package com.ifsul.trail.service.impl;

import com.ifsul.trail.service.FileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class FileServiceImpl implements FileService {
    @Value("${file.path}")
    private String filePath;
    @Override
    public void save(MultipartFile file) {
        String dir = "/" + filePath;
                // System.getProperty("user.dir") +
        try {
            file.transferTo(new File(dir + "/" + file.getOriginalFilename()));
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        /*
        // Verifica se o arquivo foi salvo com sucesso
        File fileSaved = new File(dir + "/" + file.getOriginalFilename());
        if (!fileSaved.exists()) {
            throw new RuntimeException("O arquivo não foi salvo com sucesso");
        }
         */
    }
}
