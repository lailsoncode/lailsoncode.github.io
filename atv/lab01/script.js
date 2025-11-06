// Array inicial
const meuArray = [1,2,3,4,5,6]

// Exibe o array na div ao carregar a página
exibirArray()

/**
 * Função para renderizar o array na div com id="meuArray"
 */
function exibirArray(){
  const divMeuArray = document.getElementById("meuArray")
  // Limpa o conteúdo anterior
  divMeuArray.innerHTML = ""
  
  // Cria e anexa uma div para cada elemento do array
  for (let i = 0; i < meuArray.length; i++){
    divMeuArray.appendChild(criarDiv(meuArray[i]))
  }
}

/**
 * Remove o último elemento do array (pop) e atualiza a exibição
 */
function executarPop() {
  meuArray.pop()
  exibirArray()
}

/**
 * Remove o primeiro elemento do array (shift) e atualiza a exibição
 */
function executarShift(){
  meuArray.shift()
  exibirArray()
}

/**
 * Adiciona um valor no final do array (push) e atualiza a exibição
 */
function executarPush(){
    // Obtém o valor do input
    let valor = document.getElementById("elemento").value
    // Adiciona ao final
    meuArray.push(valor)
    exibirArray()
}

/**
 * Adiciona um valor no início do array (unshift) e atualiza a exibição
 */
function executarUnshift(){
  // Obtém o valor do input
  let valor = document.getElementById("elemento").value
  // Adiciona ao início
  meuArray.unshift(valor)
  exibirArray()
}

/**
 * Cria um novo elemento div para representar um item do array
 * @param {any} valor - O valor a ser exibido dentro da div
 * @returns {HTMLElement} A div criada
 */
function criarDiv(valor){ 
  const novaDiv = document.createElement("div")
  // Classes Tailwind para estilização do elemento
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}