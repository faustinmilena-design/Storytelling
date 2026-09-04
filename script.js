const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O ciclo escolar acabou e você precisa decidir seu primeiro passo em relação a vida adulta. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Fazer uma faculdade na área de nutrição.",
                afirmacao: "atuar num trabalho relacionado a nutrição, como na sonda hospitalar"
            },
            {
                texto: "Conseguir uma renda fixa, ingressando no mercado de trabalho",
                afirmacao: "conseguir mais condições para investir ainda mais"
            }
        ]
    },
    {
        enunciado: "Você conseguiu uma oportunidade para ter carteira de motorista. Qual você prefere para ajudar na vida profissional?",
        alternativas: [
            {
                texto: "Fazer carteira de moto",
                afirmacao: "atuar como motoboy"
            },
            {
                texto: "Fazer carteira de carro",
                afirmacao: "atuar como uber-taxi"
            }
        ]
    },
    {
        enunciado: "Você não fez uma faculdade, decidiu fazer alguns cursos no SENAC. Qual ajuda mais no futuro profissional?",
        alternativas: [
            {
                texto: "Gastronomia",
                afirmacao: "ajuda mais em relação a criação do próprio negócio"
            },
            {
                texto: "informática",
                afirmacao: "Ajuda a entrar numa corporativa"
            }
        ]
    },
    {
        enunciado: "Você enfrenta problemas no trabalho em relação a fofocas. Como lida com isso?",
        alternativas: [
            {
                texto: "Relatar aos encarregados",
                afirmacao: "Resolver da melhor forma"
            },
            {
                texto: "Tentar resolver sozinho",
                afirmacao: "Resolve do seu jeito e não envolve mais pessoas"
            }
        ]
    },
    {
        enunciado: "Se a rotina for pesada demais. Como você resolve?",
        alternativas: [
            {
                texto: "Troco a rotina.",
                afirmacao: "trocar o que pode para ter mais tempo de lazer"
            },
            {
                texto: "Tento dormir mais cedo.",
                afirmacao: "Priorizar seu bem-estar e redefinir seus limites transformou sua relação com o tempo e com a produtividade."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
