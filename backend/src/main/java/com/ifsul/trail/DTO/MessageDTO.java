package com.ifsul.trail.DTO;

import com.ifsul.trail.DTO.MensagemResponse;

public record MessageDTO(
        String mensagem
) {
    public MessageDTO(MensagemResponse mensagem){
        this(mensagem.mensagem());
    }
}
