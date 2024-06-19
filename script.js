const perguntas = [
    {
    enunciado: "Você prefere verão ou primavera?",
    alternativas: [
    "Verão",
    "Primavera"
    ]
},
    {
    enunciado: "Você prefere vôlei ou futebol?",
    alternativas: [
    "Vôlei",
    "Futebol"
    ]
    },
    {
    enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate,como você se posiciona?",
    alternativas: [
    "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
    "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores."
    ]
    },
    {
    enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
    "Criar uma imagem utilizando uma plataforma de design como o Paint.",
    "Criar uma imagem utilizando um gerador de imagem de IA."
    ]
    
    },
    {
    enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
    "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
    "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial."
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
