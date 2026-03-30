let perguntas;
let perguntaAtual = 0;
let pontuacao = 0;

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function atualizarPontuacao() {
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
}

function iniciarQuiz() {
    perguntas = embaralhar([...paises]);
    perguntaAtual = 0;
    pontuacao = 0;

    document.querySelector(".fundoQuiz h1").textContent = "Que país é esse?";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("iniciar").style.display = "none";

    atualizarPontuacao();
    carregarPergunta();
}

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("bandeira").src = pergunta.bandeira;

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    const opcoes = embaralhar([
        pergunta,
        ...embaralhar(paises.filter(p => p !== pergunta)).slice(0, 2),
    ]);

    opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao.nome;
        botao.addEventListener("click", () => verificarResposta(opcao, botao));
        opcoesDiv.appendChild(botao);
    });

    const botaoProximo = document.getElementById("proximo");
    botaoProximo.classList.remove("botaoProximo-ativo");
    botaoProximo.classList.add("botaoProximo-desativado");
    botaoProximo.removeEventListener("click", proximaPergunta);
}

function verificarResposta(opcao, botao) {
    const pergunta = perguntas[perguntaAtual];

    if (opcao.nome === pergunta.nome) {
        botao.style.backgroundColor = "#4CAF50";
        pontuacao++;
    } else {
        botao.style.backgroundColor = "#f44336"; 
    }

    atualizarPontuacao();

    document.querySelectorAll("#opcoes button").forEach(b => {
        b.disabled = true;
        if (b.textContent === pergunta.nome) {
            b.style.backgroundColor = "#4CAF50";
        }
    });

    const botaoProximo = document.getElementById("proximo");
    botaoProximo.classList.remove("botaoProximo-desativado");
    botaoProximo.classList.add("botaoProximo-ativo");
    botaoProximo.addEventListener("click", proximaPergunta);
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarQuiz();
    }

    const botaoProximo = document.getElementById("proximo");
    botaoProximo.classList.remove("botaoProximo-ativo");
    botaoProximo.classList.add("botaoProximo-desativado");
    botaoProximo.removeEventListener("click", proximaPergunta);
}

function finalizarQuiz() {
    alert(`Quiz finalizado! Você acertou ${pontuacao} de ${perguntas.length}.`);

    document.getElementById("quiz").style.display = "none";
    document.getElementById("iniciar").style.display = "block";

    document.querySelector(".fundoQuiz h1").textContent = "Adivinhe o País";
}

document.getElementById("iniciar").addEventListener("click", iniciarQuiz);
