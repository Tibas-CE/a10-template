//PARTE 1 - criação de arrays

const minhaLista = ["Black sabbath", "Tom Zé", "Show"]
//const numeros = [8, 30, 1991];
const lista = [30, "Tibério", true];
const umItem = [1];
const vazio = [];

//PARTE 2 - observação de arrays

console.log(minhaLista.length); //3
console.log(minhaLista[3]); //undefined
console.log(lista.includes(30)); //true
console.log(lista.includes("Tibério")); //true
console.log(lista.includes(true)); //true
console.log(umItem); //[1]
console.log(umItem.length); //1

//PARTE 3 - manipulação de arrays

//OBS: dessa forma as duas arrays receberam "Cachoeria"
/*const copiaMinhaLista = minhaLista;
console.log(copiaMinhaLista, minhaLista);
copiaMinhaLista.push("Cahoeira");
console.log(copiaMinhaLista, minhaLista);*/

//uso do slice() -OBS:apenas a copia recebeu "Cachoeira"
/*const copiaMinhaLista = minhaLista.slice();
console.log(copiaMinhaLista, minhaLista);
copiaMinhaLista.push("Cachoeira");
console.log(copiaMinhaLista, minhaLista);
copiaMinhaLista.splice(2, 2); //remove 2 itens
console.log(copiaMinhaLista, minhaLista);
console.log(minhaLista.sort());
console.log(numeros);
console.log(numeros.sort());*/

//EXERCÍCIO DE FIXAÇÃO

//crie uma array
const numeros = [4, 5, 6, 1, 7, 8, 9, 2];

//imprima a array
console.log(numeros);

//imprima ordenada
console.log(numeros.sort());

//imprima reversa
console.log(numeros.reverse());

//remova o último item
numeros.pop();
console.log(numeros);

//adicionando um item
numeros.push(6);
console.log(numeros);

//removendo item usando splice() OBS:remove através do índice
numeros.splice(2, 1);
console.log(numeros);