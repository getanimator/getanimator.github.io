// script.js

function verificarTecla(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarMensagem("Você", perguntaInput.value);
        responder();
    }
}

function adicionarMensagem(remetente, mensagem) {
    const chatMessages = document.getElementById('chatMessages');
    const mensagemElement = document.createElement('div');
    mensagemElement.className = 'chat-message';
    mensagemElement.innerHTML = `<strong>${remetente}:</strong> ${mensagem}`;
    chatMessages.appendChild(mensagemElement);
    perguntaInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function responder() {
    const respostaElement = document.getElementById('resposta');
    const pergunta = perguntaInput.value.trim();
    if (pergunta !== '') {
        adicionarMensagem("Product Manager GPT", 'Depende...');
    } else {
        adicionarMensagem("Product Manager GPT", 'Por favor, faça uma pergunta válida.');
    }
}
