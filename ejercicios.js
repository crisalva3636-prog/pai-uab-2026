 
// Noms de variables
// 1.1
//1. variAble
// 2. Variable (correcto)
// 3. vari-able (correcto)
// 4. vari_able (correcto)
// 5. _variable (correcto)
// 6. vari.able (incorrecto)
// 7. vari4able (incorrecto)
// 8. 4variable (incorrecto)
// 9. variable4 (correcto)
// 10.variable_4 (incorrecto)
// 11.LaMevaVariable (incorrecto)//

// 1.2
//el resultado es el primero nomempleat//
// 1. variAble
// 2. Variable
// 3. vari-able
// 4. vari_able
// 5. _variable
// 6. vari.able
// 7. vari4able
// 8. 4variable
// 9. variable4
// 10.variable_4
// 11.LaMevaVariable

// Declaració
// 2.1.- Què passaria si féssim aquestes declaracions de variables?
// Pensa primer que creus que passaria. Després pots provar a executar aquestes instruccions
// i veure que passa (si passa alguna cosa).
// 2.1-a.-a la consola surt un 2
// var a = 1;
// var a = 2;
// console.log(a);
// b.-surt syntax error perque no es pot declarar dues vegades la mateixa variable amb let
// var a = 1;
// let a = 2;
// console.log(a);
// c.-surt syntax error perque no es pot declarar dues vegades la mateixa variable amb let
// let a = 1;
// var a = 2;
// console.log(a);
// d.- surt syntax error perque no es pot declarar dues vegades la mateixa variable amb let
// let a = 1;
// let a = 2;
// console.log(a);
// Subtema 3. Assignació
// 3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignació
// // com si fos independent.
// let a = 5; -correcte
// let b = 5z;-incorrecte
// let c = "c";-correcte
// let c = 'c';-correcte
// let c = "c';-incorrecte
// let c = "c'c'c";-correcte
// let c = "c'c"c';-incorrecte
// let n = 35;-correcte
// let n = 35va;-incorrecte
// 3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una
// línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
// Fixa't en l'error que et dona el navegador.- el error esta qeu la c no te el valor assignat , caldria un let c = 7;
//  abans de fer la assignacio b = c;
// let a = 5;
// let b = c;
// c = 7;
// 3.3.- De quins tipus són les dades que assignem a aquestes variables?
// let a = 55;- numerica
// let b = 55.5;- numerica
// let c = "Hola";-string
// let d = 'Hola';-string
// let e = true;- booleana
// Operadors
// Operadors aritmètics
// 4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi? -25 40 80
// let a = 25;
// let b = 15 + a;
// let c = b * 2;
// console.log(a,b,c);
// 4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi? - 42 4 30
// let a = 10;
// let b = 20;
// let c = 5;
// a = a + 3;
// b = b + 4 - a;
// c = a + b + c;
// a = a + c;
// b = 4;
// c = c + 3 - b + 2;
// console.log(a,b,c);
// 4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi? - cap ja que falta el console.log(a,b,c,d)
// Escriu-los en un paper i desprès executa el codi. Et donen el mateix? - al exectutar el codi (despres d'afegir el console log) surt 16 35 62 70
// i al paper 16 65 65 46
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10;
// b = b + 5 - c;
// c = c + 4 + b;
// d = d + b + a;
// a = a + 1;
// b = b + c;
// c = b + c;
// d = b + b;
// console.log(a,b,c,d);
// 4.4.- Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// sobre paper i desprès prova a l’ordinador.
// let a = 10
// let b = 20
// let c = 5
// a = a + 3 // Fixat en aquesta instrucció.
// // Quin valor tenia la variable a abans
// // d’executar-se la instrucció?
// // I desprès?
// console.log(a);
// b = b + 4 – a
// console.log(b);
// c = a + b + c
// console.log(c);
// a = a + c
// console.log(a);
// b = 4
// console.log(b);
// c = c + 3 - b + 2
// console.log(c);
// 4.5. - Quins valors s’escriuran a la consola si executem aquest programa? Fes-ho primer
// sobre paper i desprès prova a l’ordinador.
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10;
// b = b + 5 - c;
// c = c + 4 + b;
// d = d + b + a;
// console.log(a,b,c,d);
// a = a + 1;
// b = b + c;
// c = b + c;
// d = b + b;
// console.log(a,b,c,d);
// 4.6. - Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 10;
// let b = 5;
// let c = a / b;
// let d = a * b;
// let e = a % 3;
// console.log (c,d,e);
// 4.7.- Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 10;
// let b = 5;
// let c = a * b * 3;
// let d = a / 3;
// console.log(c,d);