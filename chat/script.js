const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const backendUrl = "http://localhost:8081/upload";

let userMessage = null;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;
let conversation = []; // Variável para armazenar o histórico de conversas

const createChatLi = (message, className, role) => {
    // Create a chat <li> element with passed message, className, and role
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span>
    <img class="logo-white2" alt="." src="./images/logo-white2.png" height="30px" width="30px">
    </span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    chatLi.dataset.role = role; // Set the role as a data attribute
    return chatLi; // return chat <li> element
}

const handleChat = async () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Adicione a mensagem do usuário atual ao histórico
    conversation.push({ role: "user", content: userMessage });

    // Exiba a mensagem do usuário no chat
    const userChatLi = createChatLi(userMessage, "outgoing", "user");
    chatbox.appendChild(userChatLi);

    // Exiba "Digitando..."
    const incomingChatLi = createChatLi("Digitando...", "incoming", "assistant");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Gere uma resposta com base no histórico
    const response = await generateResponse(conversation);

    // Remova "Digitando..." e substitua pela resposta
    const index = conversation.findIndex(message => message.content === "Digitando...");
    if (index !== -1) {
        conversation.splice(index, 1);
    }

    // Adicione a resposta do chatbot ao histórico
    conversation.push({ role: "assistant", content: response });

    // Atualize o chat
    updateChat();
}

const generateResponse = async (messages) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    // Construa um array de mensagens para enviar à API
    const messagesForAPI = messages.map(message => ({
        role: message.role,
        content: message.content,
    }));

    // Propriedades da solicitação para a API
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messagesForAPI,
        })
    }

    // Envie a solicitação POST para a API, obtenha a resposta
    const response = await fetch(API_URL, requestOptions);
    const responseData = await response.json();

    return responseData.choices[0].message.content.trim();
}

// Função para atualizar o chat exibindo todas as mensagens
const updateChat = () => {
    chatbox.innerHTML = ""; // Limpe o chatbox
    conversation.forEach(message => {
        const chatLi = createChatLi(message.content, message.role === "user" ? "outgoing" : "incoming", message.role);
        chatbox.appendChild(chatLi);
    });
    chatbox.scrollTo(0, chatbox.scrollHeight);
}

chatInput.addEventListener("input", () => {
    // Ajuste a altura do textarea de entrada com base no seu conteúdo
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // Se a tecla Enter for pressionada sem a tecla Shift e a largura da janela for maior que 800px, lide com o chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
