// script.js

function verificarTecla(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const perguntaInput = document.getElementById('perguntaInput');
        const pergunta = perguntaInput.value.trim();

        if (pergunta !== '') {
            const resposta = obterRespostaAleatoria();
            adicionarMensagem("Você", pergunta);
            adicionarMensagem("Product Manager GPT", resposta);
        }
    }
}

function obterRespostaAleatoria() {
    const respostas = [
        "Depende...",
        "Vamos priorizar isso nas próximas iterações/sprints/ciclos",
        "Vamos realizar uma análise de custo-benefício",
        "Vamos validar isso com os usuários",
        "Precisamos considerar a estratégia de longo prazo",
        "Vamos iterar com base no feedback",
        "Isso está alinhado com nossos objetivos/metas"
    ];

    // Selecionar uma resposta aleatória
    const indiceResposta = Math.floor(Math.random() * respostas.length);
    return respostas[indiceResposta];
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
