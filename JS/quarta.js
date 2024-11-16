// 1

function mensagemhw() {
    const resultadoDiv = document.getElementById('nomeLabel');
    const nomeLabel = document.getElementById('nomeLabel');

    nomeLabel.style.display = "block";

    resultadoDiv.textContent = 'Hello, World!';

    setTimeout(function () {
        nomeLabel.style.display = "none";
    }, 5000);
}

const btnHw = document.getElementById('btn-hw');
btnHw.addEventListener('click', mensagemhw);

// PAGINA 2
// 1

function somarNumeros() {
    const valor1 = prompt("Qual o primeiro valor que deseja somar?");
    const valor2 = prompt("Qual o segundo valor que deseja somar?");
    const valor3 = prompt("Qual o terceiro valor que deseja somar?");
    const nomeLabel = document.getElementById('nomeLabel');
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    if (valor1 && valor2 && valor3 && !isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {

        nomeLabel.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";

        salarioLabel.textContent = "Resultado:";
        const soma = Number(valor1) + Number(valor2) + Number(valor3);
        salarioDiv.textContent = soma;

        nomeLabel.textContent = `Valores somados: ${valor1}, ${valor2} e ${valor3}!`;

    } else {
        alert("Por favor, insira valores válidos.");
    }
}

document.getElementById('somarNumeros').addEventListener('click', somarNumeros);

// 2

function media() {
    const valor1 = prompt("Qual é o primeiro valor?");
    const valor2 = prompt("Qual é o segundo valor?");
    const valor3 = prompt("Qual é o terceiro valor?");
    const valor4 = prompt("Qual é o quarto valor?");

    const nomeLabel = document.getElementById('nomeLabel');
    const resultadoDiv = document.getElementById('resultado');
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    const num3 = parseFloat(valor3);
    const num4 = parseFloat(valor4);

    if (!isNaN(num1) && !isNaN(num2)) {
        const media = (num1 + num2 + num3 + num4) / 2;

        nomeLabel.textContent = `Valores digitados: ${valor1}, ${valor2}, ${valor3} e ${valor4}`
        nomeLabel.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";

        resultadoDiv.textContent = `Valores digitados: ${valor1}, ${valor2}, ${valor3} e ${valor4}!`
        salarioLabel.textContent = "Média:"
        salarioDiv.textContent = media
        resultadoDiv.style.display = "block";
    } else {
        alert("Por favor, digite valores numéricos válidos.");
    }
}

document.getElementById('btn-media').addEventListener('click', media);

// 3

function nomeJadson() {
    let nome = prompt("Qual é o seu nome?");

    const salarioDiv = document.getElementById('div-salario');

    while (nome.toLowerCase() !== "jadson") {
        nome = prompt("Nome incorreto. Por favor, digite: Jadson!");
    }

    salarioDiv.style.display = "block";
    salarioDiv.textContent = 'Olá, Jadson!'
}

document.getElementById('btn-nomeJadson').addEventListener('click', nomeJadson);


// 4

function numerosPares35() {
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    let contador = 0;

    for (let i = 35; i <= 98111; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }

    salarioLabel.style.display = "block";
    salarioDiv.style.display = "block";

    salarioLabel.textContent = "Quantidade de números pares entre 35 e 98111:"
    salarioDiv.textContent = contador

    return contador;
}

document.getElementById('btn-numerosPares35').addEventListener('click', numerosPares35);

// 5

function numerosImpares5000() {
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    let contador = 0;

    for (let i = 1; i <= 5000; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }

    salarioLabel.style.display = "block";
    salarioDiv.style.display = "block";

    salarioLabel.textContent = "Quantidade de números ímpares entre 1 e 5000:";
    salarioDiv.textContent = contador;

    return contador;
}

document.getElementById('btn-numerosImpares5000').addEventListener('click', numerosImpares5000);

// 6

function calcularFatorial() {
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    let numero = prompt("Digite um número para calcular o fatorial:");

    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número válido (positivo).");
        return;
    }

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    salarioLabel.style.display = "block";
    salarioDiv.style.display = "block";

    salarioLabel.textContent = `O fatorial de ${numero} é:`;
    salarioDiv.textContent = fatorial;

}

document.getElementById('btn-calcularFatorial').addEventListener('click', calcularFatorial);

// 