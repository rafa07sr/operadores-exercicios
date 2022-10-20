
/* a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
 */


const operacao1 = 5 > 20 && 5 > 2
console.log("5 é maior que 20 e também é menor que 2:", operacao1)

const operacao2 = 5 === 5 || 5 === "5"
console.log("5 é igual a 5 ou é igual a '5':", operacao2)

const operacao3 = ! 20 > 50
console.log("negação de (vinte é maior que cinquenta):", operacao3)

const operacao4 = ! 20 >50 || 50 > 60
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta):", operacao4)


/* 
**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990,
 reside em: Rua dos bobos nº 0 e possui 2 filhos.
 Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais,
  mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.** */


/*   Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário */

// calcule: 

/* 1) O salário fixo mais o auxílio creche

2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.) */


const salario = 2000
const auxCreche = 45.50
const comiJan = 5784.50 * 0.10
const comiFev = 3418.41 * 0.10
const comiMar = 4124.10 * 0.10
const comiAbr = 1874.00 * 0.10
const comiMai = 7000.00 * 0.10
const comiJun = 9450.00 * 0.10

    const salTotal = salario + comiJan
    const salTotal2 = salario + comiFev
    const salTotal3 = salario + comiMar
    const salTotal4 = salario + comiAbr
    const salTotal5 = salario + comiMai
    const salTotal6 = salario + comiJun


  const desJan = salTotal - (salTotal * 0.05)
  const salTotJan = auxCreche + desJan

  const desFev = salTotal2 - (salTotal2 * 0.05)
  const salTotFev = auxCreche + desFev

  const desMar = salTotal3 - (salTotal3*0.05)
  const salTotMar = auxCreche + desMar

  const desAbr = salTotal4 - (salTotal4 * 0.05)
  const salTotAbr = auxCreche + desAbr
  
  const desMai = salTotal5 - (salTotal5 * 0.05)
  const salTotMai = auxCreche + desMai

  const desJun = salTotal6 - (salTotal6 * 0.05)
  const salTotJun = auxCreche + desJun

   const totRece1 = salTotal + auxCreche 
   const totRece2 = salTotal2 + auxCreche 
   const totRece3 = salTotal3 + auxCreche 
   const totRece4 = salTotal4 + auxCreche 
   const totRece5 = salTotal5 + auxCreche 
   const totRece6 = salTotal6 + auxCreche 

   const total = totRece1 + totRece2 + totRece3 + totRece4 + totRece5 + totRece6
   const media = total / 6




console.log( "O total do salario de janeiro foi", salTotJan)
console.log( "O total do salario de fevereiro foi", salTotFev)
console.log( "O total do salario de Março foi", salTotMar)
console.log( "O total do salario de Abril foi", salTotAbr)
console.log( "O total do salario de Maio foi", salTotMai)
console.log( "O total do salario de Junho foi", salTotJun)
console.log ("A media de salario é", media)






