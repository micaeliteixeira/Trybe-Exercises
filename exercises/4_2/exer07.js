/*Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

smaller  = numbers[0];

for (let i=0; i<numbers.length; i++){
  if (smaller>numbers[i]){
   smaller=numbers[i];
  }
} 

console.log('O menor numero é: ' + smaller );

