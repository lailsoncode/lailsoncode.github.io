const meuArray = [1, 2, 3, 4, 5, 6]

exibirArray()

function push(array, elemento) {
    array[array.length] = elemento;
    return array.length;
}

function pop(array) {
    if (array.length === 0) {
        return undefined;
    }
    const elementoRemovido = array[array.length - 1];
    array.length = array.length - 1; 
    return elementoRemovido;
}

function unshift(array, elemento) {
    // Desloca todos os elementos uma posição para a frente
    for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1];
    }
    
    // Insere o novo elemento na primeira posição
    array[0] = elemento;
    
    return array.length;
}

function shift(array) {
    if (array.length === 0) {
        return undefined;
    }
    
    const elementoRemovido = array[0];
    
    // Desloca todos os elementos uma posição para trás
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    
    // Reduz o comprimento do array
    array.length = array.length - 1;
    
    return elementoRemovido;
}

function executarPop() {
  pop(meuArray) 
  exibirArray()
}

function executarShift(){
  shift(meuArray) 
  exibirArray()
}

function executarPush(){
    let valor = document.getElementById("elemento").value
    push(meuArray, valor) 
    exibirArray()
}

function executarUnshift(){
  let valor = document.getElementById("elemento").value
  unshift(meuArray, valor) 
  exibirArray()
}

function exibirArray(){
  const divMeuArray = document.getElementById("meuArray")
  divMeuArray.innerHTML = ""
  for (let i = 0; i < meuArray.length; i++){
    divMeuArray.appendChild(criarDiv(meuArray[i]))
  }
}

function criarDiv(valor){ 
  const novaDiv = document.createElement("div")
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1"

  const texto = document.createElement("h1")
  texto.className = "text-center"
  texto.innerText = valor

  novaDiv.appendChild(texto)
  return novaDiv
}


// function push(array, elemento) {
//     array[array.length] = elemento;
//     return array.length; // Retorna o novo comprimento do array, como o push nativo
// }
// function unshift(array, elemento) {

//     for (let i = array.length; i > 0; i--) {
//         array[i] = array[i - 1];
//     }
    
//     array[0] = elemento;
    
//     return array.length; // Retorna o novo comprimento do array
// }

// function pop(array) {
//     if (array.length === 0) {
//         return undefined; // Retorna undefined se o array estiver vazio
//     }
    
//     const elementoRemovido = array[array.length - 1];
    
//     array.length = array.length - 1; 
    
//     return elementoRemovido; // Retorna o elemento removido
// }

// function shift(array) {
//     if (array.length === 0) {
//         return undefined; // Retorna undefined se o array estiver vazio
//     }
    
//     const elementoRemovido = array[0];
    
//     for (let i = 0; i < array.length - 1; i++) {
//         array[i] = array[i + 1];
//     }
    
//     array.length = array.length - 1;
    
//     return elementoRemovido; // Retorna o elemento removido
// }

// //teste
// let meuArray = [10, 20, 30];
// console.log("Array Inicial:", meuArray); // [10, 20, 30]

// console.log("\n--- TESTE PUSH ---");
// push(meuArray, 40);
// console.log("Após push(40):", meuArray); // [10, 20, 30, 40]

// console.log("\n--- TESTE UNSHIFT ---");
// unshift(meuArray, 5);
// console.log("Após unshift(5):", meuArray); // [5, 10, 20, 30, 40]

// console.log("\n--- TESTE POP ---");
// let popado = pop(meuArray);
// console.log("Elemento popado:", popado); // 40
// console.log("Após pop():", meuArray); // [5, 10, 20, 30]

// console.log("\n--- TESTE SHIFT ---");
// let shiftado = shift(meuArray);
// console.log("Elemento shiftado:", shiftado); // 5
// console.log("Após shift():", meuArray); // [10, 20, 30]

// // Teste de encadeamento
// let shiftado2 = shift(meuArray);
// console.log("Elemento shiftado:", shiftado2); // 10
// console.log("Após shift():", meuArray); // [20, 30]