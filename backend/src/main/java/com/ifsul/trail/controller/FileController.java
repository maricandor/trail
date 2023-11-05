package com.ifsul.trail.controller;

import com.ifsul.trail.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;
    @PostMapping("/upload")
    public void upload(@RequestParam MultipartFile file){
        if (file.isEmpty()) {
            try {
                throw new MissingServletRequestPartException("file");
            } catch (MissingServletRequestPartException e) {
                throw new RuntimeException(e);
            }
        }
        fileService.save(file);
    }
}
