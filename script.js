const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImage0 = document.getElementById('0-imagem-miniatura');
const miniaturaImage1 = document.getElementById('1-imagem-miniatura');
const miniaturaImage2 = document.getElementById('2-imagem-miniatura');


const verdeCipreste = {
    nome: 'verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const meiaNoite = {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const minhaLista = [6, 7, 4, 8, 10];

const opcoesCores= [verdeCipreste, azulInverno, meiaNoite ,estelar, rosaClaro];
const opcoesTamanho = ['41mm', '45mm'];

// minhaLista[3]
// opcoesTamanhos[2]
// meiaNoite.pasta

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
};

function trocarTamanho() {
    // Atualizar variável de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    // Mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // Mudar o tamanho de imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarCor() {
    // Atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // Trocar título da página
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    // Trocar nome da cor
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome;
    // Trocar imagens das miniaturas exibidas
    miniaturaImage0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImage1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImage2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
    // Trocar imagem de visualização 
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}