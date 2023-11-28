package com.ifsul.trail.service.impl;


import com.ifsul.trail.service.FileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileServiceImpl implements FileService {
        @Override
        public void save(MultipartFile file) {
            ClassPathResource resource = new ClassPathResource("/uploads");
//        System.out.println(new ClassPathResource("").getFile());
            try {
                System.out.println(resource.getFile().getAbsolutePath());
                File directory = resource.getFile();
                Path targetPath = Paths.get(directory.getAbsolutePath(), file.getOriginalFilename());
                file.transferTo(targetPath.toFile());
            } catch (IOException e) {
                System.out.println(e.getMessage());
            }
        }

    }
