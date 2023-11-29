import React, { useState, useEffect } from 'react';
import "../styles/chatbot.css";

const ChatbotComponent = () => {
  const [chatVisible, setChatVisible] = useState(true);
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [inputInitHeight, setInputInitHeight] = useState(0);

  // ComponentDidMount equivalent
  useEffect(() => {
    // Adicione qualquer lógica de inicialização aqui, se necessário
    setInputInitHeight(document.querySelector('.chat-input textarea').scrollHeight);
  }, []);

  const createChatLi = (message, className, role) => {
    // Crie um elemento JSX para cada mensagem
    return (
      <li key={conversation.length} className={`chat ${className}`} data-role={role}>
        {className === 'outgoing' ? (
          <p>{message}</p>
        ) : (
          <span>
            <img className="logo-white2" alt="." src="./images/logo-white2.png" height="30px" width="30px" />
          </span>
        )}
        <p>{message}</p>
      </li>
    );
  };

  const handleChat = async () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage('');
    document.querySelector('.chat-input textarea').style.height = `${inputInitHeight}px`;

    // Adicione a mensagem do usuário atual ao histórico
    setConversation([...conversation, { role: 'user', content: trimmedMessage }]);

    // Exiba a mensagem do usuário no chat
    const userChatLi = createChatLi(trimmedMessage, 'outgoing', 'user');
    setConversation([...conversation, { role: 'user', content: trimmedMessage }]);

  
  };

  return (
    <div className={`chatbot ${chatVisible ? 'show-chatbot' : ''}`}>
      <button className="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>TrailBot</h2>
          <span className="close-btn material-symbols-outlined">close</span>
        </header>
        <ul className="chatbox">
          {/* Conteúdo do chatbox */}
        </ul>
        <div className="chat-input">
          <textarea id="user-message" placeholder="Escreva sua mensagem" spellCheck="false" required></textarea>
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>send</span>
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;
