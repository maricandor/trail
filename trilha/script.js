
const backendBaseUrl = "http://localhost:8080"; // Substitua pela porta do seu backend

document.addEventListener("DOMContentLoaded", function () {
    const trilha = document.getElementById("trilha");
    const linha = document.getElementById("linha");
    const adicionarQuadradoButton = document.getElementById("adicionarQuadrado");

    let contadorQuadrados = 0;
    let posicaoY = 10; // Posição inicial na vertical

    adicionarQuadradoButton.addEventListener("click", function () {
        const quadrado = document.createElement("div");
        quadrado.className = "quadrado";
        quadrado.style.top = posicaoY + "px"; // Define a posição vertical do quadrado
        trilha.appendChild(quadrado);

        // Adicionar um ponto à linha ondulada
        const ponto = document.createElement("div");
        ponto.className = "ponto";
        ponto.style.left = "50%"; // Centraliza o ponto horizontalmente
        ponto.style.top = posicaoY + "px"; // Define a posição vertical do ponto
        linha.appendChild(ponto);

        contadorQuadrados++;
        posicaoY += 60; // Espaçamento vertical entre os quadrados
    });
});
