// Função para verificar a tecla pressionada
function verificarTecla(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede a quebra de linha no textarea ou formulários
        responder();
    }
}

// Função para responder à pergunta
function responder() {
    const perguntaInput = document.getElementById('perguntaInput');
    const respostaElement = document.getElementById('resposta');

    const pergunta = perguntaInput.value.trim();
    if (pergunta !== '') {
        respostaElement.textContent = 'Depende...';
    } else {
        respostaElement.textContent = 'Por favor, faça uma pergunta válida.';
    }

    // Limpar a caixa de pergunta após responder
    perguntaInput.value = '';
}
