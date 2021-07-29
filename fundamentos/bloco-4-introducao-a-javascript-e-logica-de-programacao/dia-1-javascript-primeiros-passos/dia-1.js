//exerc 1

// let a = 8;
// let b = 5;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);

//exerc 2

// let x = 6;
// let y = 7;

// if (x > y) {
//   console.log(x)
// }
// else {
//   console.log(y)
// }

//exerc 3

// let valor1 = 13;
// let valor2 = 15;
// let valor3 = 16;

// if (valor1 >= valor2 && valor1 >= valor3) {
//   console.log(valor1);
// }
// else if (valor2 >= valor1 && valor2 >= valor3) {
//   console.log(valor2);
// }
// else {
//   console.log(valor3)
// }

//exerc 4

// let numero = 0;

// if (numero > 0) {
//   console.log("positive");
// }
// else if (numero < 0) {
//   console.log("negative");
// }
// else {
//   console.log("zero");
// }

//exerc 5

// let angulo1 = 30;
// let angulo2 = 60;
// let angulo3 = -90;

// if (angulo1 + angulo2 + angulo3 == 180 && angulo1 >= 0 && angulo2 >= 0 && angulo3 >= 0) {
//   console.log(true);
// } else if (angulo1 < 0 || angulo2 < 0 || angulo3 <0) {
//   console.log("erro");
// } else {
//   console.log(false);
// }

//exerc 6

// let xadrez;

// xadrez = "knight";

// switch (xadrez) {
//   case "king":
//     console.log("One tile any direction");
//     break;
//   case "rook":
//     console.log("Any number of tiles vertical and horizontal");
//     break;
//   case "bishop":
//     console.log("Any number of tiles diagonals");
//     break;
//   case "queen":
//     console.log("Any number of tiles any direction");
//     break;
//   case "knight":
//     console.log("Three tiles L-shaped any direction");
//     break;
//   case "pawn":
//     console.log("One or two tiles on the first movement, one after; only forward");
//     break;
//   default:
//     break;
// }

//exerc 7

// let nota = 50;

// if (nota >= 90 && nota < 100) {
//   console.log("A");
// }
// else if (nota >= 80 && nota < 90) {
//   console.log("B");
// }
// else if (nota >= 70 && nota < 80) {
//   console.log("C");
// }
// else if (nota >= 60 && nota < 70) {
//   console.log("D");
// }
// else if (nota >= 50 && nota < 60) {
//   console.log("E");
// }
// else if (nota < 50 && nota > 0) {
//   console.log("F");
// }
// else {
//   console.log("Erro");
// }

//exerc 8

// let par1 = 3;
// let par2 = 5;
// let par3 = 7;

// if (par1 % 2 == 0 || par2 % == 0 || par3 % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//exerc 9

// let impar1 = 2;
// let impar2 = 4;
// let impar3 = 6;

// if (impar1 % 2 != 0 || impar2 % 2 != 0 || impar3 % 2 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//exerc 10

// let valorCusto = -100;
// let impostoSobreOCusto = 1.2;
// let valorCustoTotal = valorCusto * impostoSobreOCusto;
// let valorVenda = 200;

// let lucro = valorVenda - valorCustoTotal;

// if(valorCusto > 0 && valorVenda > 0){
// let lucroMil = lucro * 1000;
// console.log(lucroMil);
// }
// else {
//   console.log("Erro");
// } 

//exerc 11

// let salarioBruto = 6000;
// let aliquotaINSS;
// let aliquotaIR;
// let salarioLiquido;
// let salarioBase;
// let parcelaIR;
// let totalIR;

// if (salarioBruto <= 1556.94){
// aliquotaINSS = 0.08;
// salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
// }
// else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
// aliquotaINSS = 0.09;
// salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
// }
// else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
// aliquotaINSS = 0.11;
// salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
// }
// else if(salarioBruto > 5189.82) {
// aliquotaINSS = 570.88;
// salarioBase = salarioBruto - aliquotaINSS;
// }

// if (salarioBase <= 1903.98){
//   salarioLiquido = salarioBase;
//   console.log(salarioLiquido);
// }
// else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
// aliquotaIR = 0.075;
// parcelaIR = 142.80;
// totalIR = (salarioBase * aliquotaIR) - parcelaIR;
// salarioLiquido = salarioBase - totalIR;
// console.log(salarioLiquido);
// }
// else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
//   aliquotaIR = 0.15;
//   parcelaIR = 354.80;
//   totalIR = (salarioBase * aliquotaIR) - parcelaIR;
//   salarioLiquido = salarioBase - totalIR;
//   console.log(salarioLiquido);
// }
// else if (salarioBase > 3571.05 && salarioBase <= 4664.68) {
//   aliquotaIR = 0.225;
//   parcelaIR = 636.13;
//   totalIR = (salarioBase * aliquotaIR) - parcelaIR;
//   salarioLiquido = salarioBase - totalIR;
//   console.log(salarioLiquido);
// }
// else if (salarioBase > 4664.68) {
//   aliquotaIR = 0.275;
//   parcelaIR = 869.36;
//   totalIR = (salarioBase * aliquotaIR) - parcelaIR;
//   salarioLiquido = salarioBase - totalIR;
//   console.log(salarioLiquido);
// }