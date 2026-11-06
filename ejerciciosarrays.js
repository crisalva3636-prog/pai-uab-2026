// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
let array = [10];
// ● Afegeixi el valor “Hola” a la posició 0
array[0] = "Hola";
// ● Afegeixi el valor “Adeu” a la posició 1.
array[1] = "Adeu";
// ● Escrigui a la consola el contingut de la taula
console.log(array);

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// per a fer el següent:

// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
array[2] = "Nom";
// ● Escrigui a la consola el contingut de la taula.
console.log(array);
// ● Modifiqui el valor emmagatzamat a la posició 0.

array[0] = "Benvolgut";

// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
array = [23,45,98,73];
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
console.log(array[0] + array[2]);
// ● Guardi a la posició 6 de la taula la suma dels elements
array[6] = array[0] + array[2];
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?
console.log(array);
//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
//prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
//taula a la consola.
let numero = parseInt(prompt("Introdueix un número:"));
let resultats = [];
resultats[0] = numero * 2;
resultats[1] = numero * 3;
console.log(resultats); 

//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
//emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
//multiplicació i la divisió dels dos valors introduïts.   
let num1 = parseFloat(prompt("Introdueix el primer número:"));
let num2 = parseFloat(prompt("Introdueix el segon número:"));
let operacions = [];
operacions[0] = num1 + num2;        
operacions[1] = num1 - num2;
operacions[2] = num1 * num2;
operacions[3] = num1 / num2;
console.log(operacions);        

//21.6.- Donada aquesta taula:
//let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
//Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
//de la taula.
*****
//Donada la definició d’aquesta taula:
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];

console.log(taula[0]); // Valor a la primera posició
console.log(taula[taula.length - 1]); // Valor a la darrera posició   

//21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la
//taula, un a un.
for (let i = 0; i < taula.length; i++) {
    console.log(taula[i]);
}                   

//21.8.- Fes un programa que escrigui a la consola la suma tots els valors
//emmagatzemats a la taula.
let suma = 0;
for (let i = 0; i < taula.length; i++) {
    suma += taula[i];
}
console.log(suma);  

//21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els
//valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula
//emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.
let novaTaula = []; 
for (let i = 0; i < taula.length; i++) {
    novaTaula[i] = taula[i] + 25;
}
console.log(novaTaula);     

//21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula
//i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel
//nombre de valors).
let mitjana = suma / taula.length;  
console.log(mitjana);  

//21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més
//petit de la taula. 
let maxim = taula[0];
let minim = taula[0];
for (let i = 1; i < taula.length; i++) {
    if (taula[i] > maxim) {
        maxim = taula[i];
    }
    if (taula[i] < minim) {
        minim = taula[i];
    }
}
console.log("Valor màxim:", maxim);
console.log("Valor mínim:", minim); 

//21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els
//valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.
let novaTaulaParells = [];  
for (let i = 0; i < taula.length; i++) {
    if (taula[i] % 2 === 0) {
        novaTaulaParells.push(taula[i]);
    }
}
console.log(novaTaulaParells);      

//21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i
//escrigui a la consola quants cops apareix aquest valor a la taula. 
let valorBuscat = parseInt(prompt("Introdueix un valor per buscar a la taula:"));
let comptador = 0;  
for (let i = 0; i < taula.length; i++) {
    if (taula[i] === valorBuscat) {
        comptador++;
    }
}
console.log("El valor", valorBuscat, "apareix", comptador, "vegades a la taula.");

//21.14.- Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el
//mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada
//element que es trobi a la mateixa posició als dos arrys.
//Exemple: [1,2,3] + [2,3,4] → [3,5,7]
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];     

if (array1.length === array2.length) {
    let sumaArrays = [];    

    for (let i = 0; i < array1.length; i++) {
        sumaArrays[i] = array1[i] + array2[i];
    }           

    console.log(sumaArrays);
} else {
    console.log("Els arrays no tenen el mateix nombre d'elements.");
}           

//21.15.- Fes un programa que, donats una taula amb números, guardi a una nova taula els
//valors de la primera però donant-li la volta.
//Exemple: [1,2,3,4,5] → [5,4,3,2,1]
//******
//Donada la definició d’aquesta taula:
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];  

let taulaInvertida = [];
for (let i = 0; i < taula.length; i++) {
    taulaInvertida[i] = taula[taula.length - 1 - i];
}   
console.log(taulaInvertida);

//21.16.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i
//escrigui a la consola si es troba o no a la taula. IMPORTANT: Fes-lo fent servir un
//while de manera que si es troba l’element, s’acabi el bucle.
let numeroBuscat = parseInt(prompt("Introdueix un número per buscar a la taula:"));
let trobat = false;  
let i = 0;      


while (i < taula.length && !trobat) {
    if (taula[i] === numeroBuscat) {
        trobat = true;  
    }   i++;
}   

if (trobat) {
    console.log("El número", numeroBuscat, "es troba a la taula.");
} else {
    console.log("El número", numeroBuscat, "no es troba a la taula.");
}       

//21.17.- Fes un programa que demani un número a l’usuari (fent servir prompt()) i
//escrigui a la consola si hi ha algun valor més gran a la taula. IMPORTANT: Fes-lo
//fent servir un while de manera que si es troba que hi ha un element més gran,
//s’acabi el bucle.

let numeroComparar = parseInt(prompt("Introdueix un número per comparar amb la taula:"));
let hiHaMesGran = false;  
let i = 0;      

while (i < taula.length && !hiHaMesGran) {
    if (taula[i] > numeroComparar) {
        hiHaMesGran = true;  
    }   i++;    
}

if (hiHaMesGran) {
    console.log("Hi ha algun valor més gran que", numeroComparar, "a la taula.");
} else {
    console.log("No hi ha cap valor més gran que", numeroComparar, "a la taula.");
}       

//21.18.- Fes un programa que escrigui “Sí” si el primer número de la taula està repetit
//i “No” en cas contrari.

let primerNumero = taula[0];
let estaRepetit = false;    
for (let i = 1; i < taula.length; i++) {
    if (taula[i] === primerNumero) {
        estaRepetit = true;  
        break;  
    }
}

if (estaRepetit) {
    console.log("Sí");
} else {
    console.log("No");
}   

//21.19.- Fes un programa que donades dues taules de la mateixa mida, crei una nova taula
//amb la unió de les dues taules de manera alterna. Per exemple:
//[1,2,3] unió [4,5,6] → [1,4,2,5,3,6]

let taulaA = [1, 2, 3];
let taulaB = [4, 5, 6];
let taulaUnida = [];   

for (let i = 0; i < taulaA.length; i++) {
    taulaUnida.push(taulaA[i]);  
    taulaUnida.push(taulaB[i]);  
}

console.log(taulaUnida);


    









