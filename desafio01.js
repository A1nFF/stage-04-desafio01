let firstNumber = prompt("Digite o primeiro número: ");
let secondNumber = prompt("Digite o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const divi = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${multi}`);
alert(`A divisão dos dois números é: ${divi}`);
alert(`A resto da divisão dos dois números é: ${restDiv}`);

if ((firstNumber % secondNumber) == 0) {
    alert(`A soma dos dois números é par: ${sum}`);
} else{
    alert(`A soma dos dois números é impar: ${sum}`);
}

if (firstNumber === secondNumber) {
    alert(`Os números inseridos são iguais: ${firstNumber} e ${secondNumber}`);
} else {
    alert(`Os números inseridos são diferentes: ${firstNumber} e ${secondNumber}`);
}