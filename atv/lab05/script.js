// Array inicial de números (precisa estar ordenado para a Pesquisa Binária)
let meuArray = [1, 2, 3, 10, 15, 21, 22, 29, 30];

// Array para armazenar o número de comparações e a mensagem de resultado
let resultadoPesquisa = {
    comparacoes: 0,
    mensagem: "Clique em 'pesquisar' ou 'pesquisar binaria'."
};

// Exibe o array e o resultado inicial ao carregar a página
exibirTudo();

/**
 * Realiza a Pesquisa Sequencial (Linear) no array.
 * @param {number} valorBusca - O valor a ser encontrado.
 * @returns {{comparacoes: number, encontrado: boolean}} O resultado da busca.
 */
function pesquisaSequencial(valorBusca) {
    let comparacoes = 0;
    let encontrado = false;

    for (let i = 0; i < meuArray.length; i++) {
        comparacoes++;
        if (meuArray[i] === valorBusca) {
            encontrado = true;
            break;
        }
    }

    return { comparacoes, encontrado };
}

/**
 * Realiza a Pesquisa Binária no array (requer array ordenado).
 * @param {number} valorBusca - O valor a ser encontrado.
 * @returns {{comparacoes: number, encontrado: boolean}} O resultado da busca.
 */
function pesquisaBinaria(valorBusca) {
    let comparacoes = 0;
    let encontrado = false;
    let inicio = 0;
    let fim = meuArray.length - 1;

    while (inicio <= fim) {
        comparacoes++;
        // Calcula o índice do meio
        let meio = Math.floor((inicio + fim) / 2);

        if (meuArray[meio] === valorBusca) {
            encontrado = true;
            break;
        } else if (meuArray[meio] < valorBusca) {
            // Se o valor do meio for menor, a busca continua na metade direita
            inicio = meio + 1;
        } else {
            // Se o valor do meio for maior, a busca continua na metade esquerda
            fim = meio - 1;
        }
    }

    return { comparacoes, encontrado };
}

// =================================================================================
// FUNÇÕES DE EXECUÇÃO CHAMADAS PELOS BOTÕES
// =================================================================================

function executarPesquisaSequencial() {
    const valor = parseInt(document.getElementById("valorBusca").value);
    if (isNaN(valor)) {
        resultadoPesquisa.mensagem = "Digite um número válido para a busca.";
        exibirTudo();
        return;
    }

    const resultado = pesquisaSequencial(valor);
    resultadoPesquisa.comparacoes = resultado.comparacoes;
    
    if (resultado.encontrado) {
        resultadoPesquisa.mensagem = `${resultado.comparacoes} comparações. Encontrou o número ${valor}!`;
    } else {
        resultadoPesquisa.mensagem = `${resultado.comparacoes} comparações. O número ${valor} não foi encontrado.`;
    }
    exibirTudo();
}

function executarPesquisaBinaria() {
    // A Pesquisa Binária REQUER um array ordenado!
    if (!estaOrdenado(meuArray)) {
        executarSort(); // Garante a ordenação antes da busca
    }

    const valor = parseInt(document.getElementById("valorBusca").value);
    if (isNaN(valor)) {
        resultadoPesquisa.mensagem = "Digite um número válido para a busca.";
        exibirTudo();
        return;
    }

    const resultado = pesquisaBinaria(valor);
    resultadoPesquisa.comparacoes = resultado.comparacoes;

    if (resultado.encontrado) {
        resultadoPesquisa.mensagem = `${resultado.comparacoes} comparações. Encontrou o número ${valor}! (Binária)`;
    } else {
        resultadoPesquisa.mensagem = `${resultado.comparacoes} comparações. O número ${valor} não foi encontrado. (Binária)`;
    }
    exibirTudo();
}

function executarPush() {
    const valor = parseInt(document.getElementById("valorPush").value);
    if (!isNaN(valor)) {
        meuArray.push(valor);
        document.getElementById("valorPush").value = ""; // Limpa o input
        executarSort(); // O array deve estar ordenado para a busca binária
    }
}

function executarSort() {
    // Função de comparação para garantir ordenação numérica correta
    meuArray.sort((a, b) => a - b);
    resultadoPesquisa.mensagem = "Array ordenado com sucesso.";
    exibirTudo();
}

// =================================================================================
// FUNÇÕES DE EXIBIÇÃO E AUXILIARES
// =================================================================================

/**
 * Atualiza todos os elementos visuais na página.
 */
function exibirTudo() {
    exibirArray(meuArray);
    exibirResultado();
}

/**
 * Função para verificar se o array está ordenado (apenas para debug/info)
 */
function estaOrdenado(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

/**
 * Exibe a mensagem de resultado da pesquisa.
 */
function exibirResultado() {
    const divResultado = document.getElementById("resultadoPesquisa");
    divResultado.innerHTML = resultadoPesquisa.mensagem;
}

/**
 * Exibe o array na div principal.
 */
function exibirArray(array) {
    const divMeuArray = document.getElementById("meuArray");
    divMeuArray.innerHTML = "";
    
    for (let i = 0; i < array.length; i++) {
        divMeuArray.appendChild(criarDiv(array[i]));
    }
}

function criarDiv(valor) {
    const novaDiv = document.createElement("div");
    // Classes Tailwind idênticas à imagem de exemplo
    novaDiv.className = "bg-blue-600 text-white shadow-md rounded m-1 p-2 min-w-10 text-center font-bold";

    const texto = document.createElement("h1");
    texto.innerText = valor;

    novaDiv.appendChild(texto);
    return novaDiv;
}