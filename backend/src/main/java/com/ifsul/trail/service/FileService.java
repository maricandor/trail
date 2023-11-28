package com.ifsul.trail.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface FileService {
    void save(MultipartFile file);
    //   String extrairTexto(byte[] conteudoDoArquivo);
}
