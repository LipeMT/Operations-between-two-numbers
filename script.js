let number1 = Number(prompt("Digite o primeiro número:"))
let number2 = Number(prompt("Digite o segundo número:"))

let sum = number1 + number2

alert(`A soma entre ${number1} e ${number2} é ` + (number1 + number2))

alert(`A subtração entre ${number1} e ${number2} é ` + (number1 - number2))

alert(`A multiplicação entre ${number1} e ${number2} é ` + (number1 * number2))

alert(`A divisão entre ${number1} e ${number2} é ` + (number1 / number2))

alert(`O resto da divsão entre ${number1} e ${number2} é ` + (number1 % number2))

alert(sum % 0 == 0 ? `A sum entre eles (${sum}) é par` : `A soma entre eles (${sum}) é ímpar`)

alert(number1 == number2 ? `Os números ${number1} e ${number2} são iguais` : `Os números ${number1} e ${number2} são diferentes`)