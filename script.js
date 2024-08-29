const perguntas = [
    {
    enunciado: "Você prefere verão ou primavera?",
    alternativas: [
        {texto:"Verão", pontuacao: 1}
        {texto:"Primavera", pontuacao: 2}
    ]
},
    {
    enunciado: "Você prefere vôlei ou futebol?",
    alternativas: [
        {texto:"Vôlei", pontuacao: 1}
        {texto:"Futebol", pontuacao: 2}
    ]
    },
    {
    enunciado: "Qual das matérias você prefere? biologia ou artes?",
    alternativas: [
        {texto:"biologia", pontuacao: 1}
        {texto:"artes", pontuacao: 2}
    ]
    },
    {
    enunciado: "Você prefere chá ou café?",
    alternativas: [
        {texto:"Chá",pontuacao 1}
        {texto:"Café", pontuacao 2}
    ]
    
    },
    {
    enunciado: "Você tem um trabalho para entregar, prefere fazer sozinho ou em grupo?",
    alternativas: [
        {texto:"grupo", pontuacao: 1}
        {texto: "sozinho", pontuacao: 2}
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
