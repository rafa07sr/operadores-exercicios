//Exercicio 2

   let num1 = prompt("digite um numero?")
   let num2 = prompt("digite outro numero?")
   
   let subNum = num1 - num2
   let resultado1 = num1 / num2
   let resultado2 = num2 / num1

 

    console.log ("O primeiro numero é maior que segundo?", "a diferença é de ",subNum,"e a resposta é", num1 > num2 )
    console.log ("O primeiro numero é igual ao segundo?", num1 === num2)
    console.log ("O primeiro numero é divisível pelo segundo? a divisão dos numeros é",  resultado1, Boolean(resultado1 % 2))
    console.log ("O segundo numero é divisível pelo primeiro? a divisão dos numeros é", resultado2 , Boolean(resultado2 % 2))




/*O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true*/