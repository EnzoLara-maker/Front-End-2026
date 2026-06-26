// ============================================================
//  Questão 04 — Função add()
//  Insere um novo Card de Jogador ao lado do card já existente,
//  sem alterar ou remover o card anterior.
// ============================================================

// Lista de jogadores que podem ser adicionados
const jogadoresDisponiveis = [
    {
        nome: 'Lucas Paquetá',
        nascimento: '27/08/1997',
        altura: '1,80 m',
        posicao: 'Meio-campista',
        rank: '8,8',
        img: 'img/Lucas_Paqueta.png'
    }
    // Novos jogadores podem ser adicionados aqui futuramente
];

// Índice do próximo jogador a ser inserido
let proximoJogador = 0;

/**
 * add()
 * Insere um novo card de jogador ao lado do card já existente.
 * Chamada ao clicar em "Adicionar Novo Jogador".
 */
function add() {
    const areCards = document.getElementById('Cards');
    const contador = document.getElementById('contador');

    // Verifica se ainda há jogadores disponíveis para adicionar
    if (proximoJogador >= jogadoresDisponiveis.length) {
        alert('Todos os jogadores disponíveis já foram adicionados!');
        return;
    }

    // Pega os dados do próximo jogador
    const jogador = jogadoresDisponiveis[proximoJogador];

    // Cria o novo card com a mesma estrutura e organização do card original
    const novoCard = document.createElement('div');
    novoCard.className = 'card';

    novoCard.innerHTML = `
        <img src="${jogador.img}" alt="${jogador.nome}">
        <div class="card-body">
            <h5 class="card-title">
                <span>${jogador.nome}</span>
                <span class="badge">★ ${jogador.rank}</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> ${jogador.nascimento}</span><br>
                <span><strong>Altura:</strong> ${jogador.altura}</span><br>
                <span><strong>Posição:</strong> ${jogador.posicao}</span>
            </p>
        </div>
    `;

    // Insere o novo card ao lado (ao final da área de cards)
    areCards.appendChild(novoCard);

    // Atualiza o contador de jogadores
    proximoJogador++;
    const total = areCards.querySelectorAll('.card').length;
    contador.textContent = `${total} jogador${total > 1 ? 'es' : ''} na sua seleção`;
}
