function responder() {
    const perguntaInput = document.getElementById('perguntaInput');
    const respostaElement = document.getElementById('resposta');

    const pergunta = perguntaInput.value.trim();
    if (pergunta !== '') {
        respostaElement.textContent = 'Depende...';
    } else {
        respostaElement.textContent = 'Por favor, faça uma pergunta válida.';
    }
}
