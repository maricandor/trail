package com.ifsul.trail.controller;

import com.ifsul.trail.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
public class FileController {

    private final FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please provide a valid PDF file");
        }
        if (!file.getOriginalFilename().toLowerCase().endsWith(".pdf")) {
            return ResponseEntity.badRequest().body("Please provide a PDF file");
        }

        try {
            // Carregue o documento PDF
            PDDocument document = PDDocument.load(file.getInputStream());

            // Extrai o texto do PDF
            PDFTextStripper pdfTextStripper = new PDFTextStripper();
            String extractedText = pdfTextStripper.getText(document);

            // Salve o texto em um arquivo .txt
            String outputFilePath = "src/main/resources/uploads/saved.txt";
            Files.write(Paths.get(outputFilePath), extractedText.getBytes());

            // Feche o documento PDF
            document.close();

            return ResponseEntity.ok("Text extracted from PDF file and saved to " + outputFilePath);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error extracting text from PDF");
        }
    }
}
