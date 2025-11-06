let meuArray = [10, 2, 3, -1];

// Variável para armazenar o array original, caso você queira restaurar (opcional)
const arrayOriginal = [...meuArray]; 

exibirArray();

function exibirArray() {
    // Limpa a div de exibição
    document.getElementById("meuArray").innerHTML = "";
    
    // Mapeia o array atual para criar divs e as anexa
    meuArray.map((valor) => {
        const novoQuadro = criarDiv(valor);
        document.getElementById("meuArray").appendChild(novoQuadro);
    });
    
    console.log("Array atual:", meuArray);
}

function criarDiv(valor) {
    const novaDiv = document.createElement("div");
    // Ajuste no className para centralizar o texto dentro da div
    novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1 flex items-center justify-center"; 

    const texto = document.createElement("h1");
    texto.className = "text-center text-sm font-semibold";
    texto.innerText = valor;

    novaDiv.appendChild(texto);
    return novaDiv;
}

// 1. sort: Ordenar os elementos do array
function executarSort() {
    // Usamos uma função de comparação (a - b) para garantir ordenação numérica crescente.
    meuArray.sort((a, b) => a - b);
    
    exibirArray();
    alert("Array ordenado com sucesso!");
}

// 2. filter: Filtrar os elementos do array maiores que 2
function executarFilter() {
    // O filter retorna um NOVO array. Atribuímos este novo array a 'meuArray'.
    meuArray = meuArray.filter((valor) => valor > 2);
    
    exibirArray();
    alert("Filtro aplicado: Apenas elementos maiores que 2 permanecem.");
}

// 3. map: Passar por todos os elementos do array, dobrando o seu valor
function executarMap() {
    // O map retorna um NOVO array com os valores transformados.
    meuArray = meuArray.map((valor) => valor * 2);
    
    exibirArray();
    alert("Map aplicado: Todos os elementos foram dobrados.");
}

// 4. find: Encontrar o primeiro elemento do array com valor igual a 10
function executarFind() {
    // O find retorna o primeiro elemento que satisfaz a condição (ou undefined).
    const encontrado = meuArray.find((valor) => valor === 10);
    
    if (encontrado !== undefined) {
        alert(`Elemento encontrado com valor 10: ${encontrado}`);
    } else {
        alert("Elemento com valor 10 não foi encontrado no array atual.");
    }
    // Não chama exibirArray() pois o array não é modificado
}

// 5. reduce: Aplicar um cálculo (soma) para todos os elementos do array
function executarReduce() {
    // O reduce acumula o resultado (acumulador) aplicando uma função a cada elemento.
    // O segundo argumento (0) define o valor inicial do acumulador.
    const somaTotal = meuArray.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }, 0);
    
    alert(`Reduce aplicado: A soma total de todos os elementos é ${somaTotal}.`);
    // Não chama exibirArray() pois o array não é modificado
}