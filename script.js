const perguntas = [
    {
        enunciado: "Você se depara com um palhaço na rua, isso é assustador ou nem faz diferença?",
        alternativas: [
            { texto: "Isso é assustador!", pontuacao: 1 },
            { texto: "Nem faz diferença", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você prefere chá ou café?",
        alternativas: [
            { texto: "Chá", pontuacao: 2 },
            { texto: "Café", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você prefere sol ou chuva?",
        alternativas: [
            { texto: "Sol", pontuacao: 2 },
            { texto: "Chuva", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você prefere primavera ou inverno?",
        alternativas: [
            { texto: "Primavera", pontuacao: 1 },
            { texto: "Inverno", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você prefere pizza ou hambúrguer?",
        alternativas: [
            { texto: "Pizza", pontuacao: 1 },
            { texto: "Hambúrguer", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta

