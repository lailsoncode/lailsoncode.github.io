let meuArray = [10, 2, 3, -1, 5, 8];
const arrayDeStrings = ["Alice", "Bob", "Charlie"];


exibirArray(meuArray, "meuArray"); // Exibe o array inicial

// FUNÇÕES DE EXECUÇÃO CHAMADAS PELOS BOTÕES
function executarDobrarNumeros() {
    const novoArray = dobrarNumeros(meuArray);
    exibirResultado("Resultado da Dobra:", novoArray.join(", "), "resultadoDisplay");
    exibirArray(novoArray, "meuArrayResultado");
}

function executarFiltrarMaioresQueDois() {
    const novoArray = filtrarMaioresQueDois(meuArray);
    exibirResultado("Números > 2:", novoArray.join(", "), "resultadoDisplay");
    exibirArray(novoArray, "meuArrayResultado");
}

function executarEncontrarPrimeiroMaiorQueDois() {
    const valor = encontrarPrimeiroMaiorQueDois(meuArray);
    exibirResultado("Primeiro > 2:", valor !== undefined ? valor : "Não encontrado", "resultadoDisplay");
    exibirArray([], "meuArrayResultado"); // Limpa o display de array
}

function executarSomarElementos() {
    const soma = somarElementos(meuArray);
    exibirResultado("Soma Total:", soma, "resultadoDisplay");
    exibirArray([], "meuArrayResultado"); // Limpa o display de array
}

function executarAdicionarUm() {
    //MODIFICA o array original
    adicionarUm(meuArray); 
    exibirResultado("Array Original Modificado:", meuArray.join(", "), "resultadoDisplay");
    exibirArray(meuArray, "meuArray"); // Atualiza o display do array original
    exibirArray([], "meuArrayResultado"); // Limpa o display de array
}

function executarCriarObjetos() {
    const arrayObjetos = criarObjetos(arrayDeStrings);

    console.log("Array de Objetos Criado:", arrayObjetos); 
    exibirResultado("Array de Objetos (JSON):", JSON.stringify(arrayObjetos, null, 2), "resultadoDisplay");
    exibirArray(arrayDeStrings, "meuArrayResultado"); // Exibe o array original de strings
}

function executarLogarPares() {
    logarPares(meuArray);
    exibirResultado("Logar Pares:", "Verifique o console (F12)!", "resultadoDisplay");
    exibirArray([], "meuArrayResultado"); // Limpa o display de array
}

// IMPLEMENTAÇÕES COM LOOP FOR

function dobrarNumeros(array) {
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray.push(array[i] * 2);
    }
    return novoArray;
}

function filtrarMaioresQueDois(array) {
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 2) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

function encontrarPrimeiroMaiorQueDois(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 2) {
            return array[i];
        }
    }
    return undefined; // Retorna undefined se não encontrar
}

function somarElementos(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

function adicionarUm(array) {
    // Modifica o array original
    for (let i = 0; i < array.length; i++) {
        array[i] += 1;
    }
}

function criarObjetos(array) {
    const novoArray = [];
    for (let i = 0; i < array.length; i++) {
        const objeto = {
            nome: array[i]
        };
        novoArray.push(objeto);
    }
    return novoArray;
}

function logarPares(array) {
    console.log("\n--- Elementos Pares ---");
    for (let i = 0; i < array.length; i++) {
        // Verifica se é um número par
        if (typeof array[i] === 'number' && array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
    console.log("------------------------");
}


// AUXILIARES

/**
 * Exibe os elementos de um array em uma div específica.
 * @param {Array} array - O array a ser exibido.
 * @param {string} divId - O ID da div onde o array será renderizado.
 */
function exibirArray(array, divId) {
    const container = document.getElementById(divId);
    if (!container) return; // Garante que a div existe
    container.innerHTML = "";
    
    // Se o array está vazio, adiciona um placeholder
    if (array.length === 0) {
        container.innerHTML = '<span class="text-gray-500 m-4">Array vazio ou resultado não é array.</span>';
        return;
    }

    // Usa for para iteração
    for (let i = 0; i < array.length; i++) {
        container.appendChild(criarDiv(array[i]));
    }
    console.log(`[${divId}]:`, array);
}


function exibirResultado(titulo, resultado, divId) {
    const display = document.getElementById(divId);
    if (!display) return;
    
    // Usa <pre> para formatar resultados complexos como JSON
    display.innerHTML = `<p class="font-bold">${titulo}</p><pre class="text-xs md:text-sm whitespace-pre-wrap">${resultado}</pre>`;
}

function criarDiv(valor) {
    const novaDiv = document.createElement("div")
    // Use uma classe de cor diferente para destacar os resultados
    novaDiv.className = "min-w-10 bg-emerald-300 shadow-md rounded m-2 p-1"; 

    const texto = document.createElement("h1")
    texto.className = "text-center text-sm font-bold"
    
    // Tratamento básico para exibir objetos (como em criarObjetos)
    if (typeof valor === 'object' && valor !== null) {
        texto.innerText = valor.nome || JSON.stringify(valor);
    } else {
        texto.innerText = valor;
    }
    

    novaDiv.appendChild(texto)
    return novaDiv
}