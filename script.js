// script.js

const velocidadeDigitacao = 50; // Velocidade em milissegundos por caractere

function verificarTecla(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const perguntaInput = document.getElementById('perguntaInput');
        const pergunta = perguntaInput.value.trim();

        if (pergunta !== '') {
            const resposta = obterRespostaComica();
            adicionarMensagem("Você", pergunta);
            mostrarRespostaDigitada("Product Manager GPT", resposta);
        }
    }
}

function mostrarRespostaDigitada(remetente, resposta) {
    const chatMessages = document.getElementById('chatMessages');
    const mensagemElement = document.createElement('div');
    mensagemElement.className = 'chat-message';
    chatMessages.appendChild(mensagemElement);

    let index = 0;

    function exibirProximoCaractere() {
        if (index < resposta.length) {
            mensagemElement.innerHTML = `<strong>${remetente}:</strong> ${resposta.substring(0, index + 1)}`;
            index++;
            setTimeout(exibirProximoCaractere, velocidadeDigitacao);
        }
    }

    exibirProximoCaractere();
    perguntaInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Restante do código original...


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
       "Ah, a resposta mais confiável desde que Sócrates era um PM. Depende... talvez eu tenha uma resposta melhor depois de consultar a minha bola de cristal.",
        "Estamos adicionando isso à nossa lista de tarefas, junto com encontrar a fonte da eterna juventude para nossos desenvolvedores.",
        "Vamos colocar nossos matemáticos para trabalhar e ver se vale a pena mais do que uma máquina de café infinita.",
        "Vamos fazer uma festa com os usuários para celebrar suas opiniões enquanto oferecemos pizza grátis. Pesquisa de mercado com estilo!",
        "Estamos pensando tão à frente que estamos prestes a lançar um produto em Marte. Elon Musk, prepare-se para a concorrência!",
        "Estamos prontos para mais iterações do que uma banda de jazz. Dê-nos feedback e verá uma melodia de melhorias.",
        "Nossos objetivos são tão claros que até os astrólogos concordam. O universo está alinhado, e nosso produto também."
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
