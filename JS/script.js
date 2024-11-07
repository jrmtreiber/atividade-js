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

// 2

function pedirNome() {
    const nome = prompt("Qual é o seu nome?");

    const resultadoDiv = document.getElementById('resultado');
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeDiv = document.getElementById('nomeDiv');

    if (nome) {
        nomeLabel.style.display = "block";
        nomeDiv.style.display = "block";
        resultadoDiv.textContent = nome;
    }
}

document.getElementById('btn-perguntas').addEventListener('click', pedirNome);

// 3

function pedirNomeSalario() {
    const nome = prompt("Qual é o seu nome?");
    const salario = prompt("Qual é o seu salário?");
    const salarioDiv = document.getElementById('div-salario');
    const resultadoDiv = document.getElementById('resultado');
    const salarioLabel = document.getElementById('div-salario_q');
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeDiv = document.getElementById('nomeDiv');

    if (salario) {
        const salarioFormatado = Number(salario).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        salarioDiv.textContent = `${salarioFormatado}`;
        nomeLabel.style.display = "block";
        nomeDiv.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";
    }
    if (nome) {
        const nomeFormatado = nome.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

        resultadoDiv.textContent = `${nomeFormatado}`;
        resultadoDiv.style.display = "block";
    }
}

document.getElementById('btn-perguntasSalario').addEventListener('click', pedirNomeSalario);

// 4

function somarNumeros() {
    const valor1 = prompt("Qual o primeiro valor que deseja somar?");
    const valor2 = prompt("Qual o segundo valor que deseja somar?");
    const nomeLabel = document.getElementById('nomeLabel');
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    if (valor1 && valor2 && !isNaN(valor1) && !isNaN(valor2)) {

        nomeLabel.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";

        salarioLabel.textContent = "Resultado:"
        const soma = Number(valor1) + Number(valor2);
        salarioDiv.textContent = soma

        nomeLabel.textContent = `Valores somados: ${valor1} e ${valor2}!`

    } else {
        alert("Por favor, insira valores válidos.");
    }
}

document.getElementById('btn-somarNumeros').addEventListener('click', somarNumeros);

// 5

function notas() {
    const valor1 = prompt("Qual é o primeiro valor?");
    const valor2 = prompt("Qual é o segundo valor?");
    const nomeLabel = document.getElementById('nomeLabel');
    const resultadoDiv = document.getElementById('resultado');
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const media = (num1 + num2) / 2;

        nomeLabel.textContent = `Valores digitados: ${valor1} e ${valor2}`
        nomeLabel.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";

        resultadoDiv.textContent = `Valores digitados: ${valor1} e ${valor2}!`
        salarioLabel.textContent = "Média:"
        salarioDiv.textContent = media
        resultadoDiv.style.display = "block";
    } else {
        alert("Por favor, digite valores numéricos válidos.");
    }
}

document.getElementById('btn-notas').addEventListener('click', notas);

// 6

function anteriorSucessor() {
    const valor = prompt("Qual é o valor?");
    const numero = parseInt(valor);

    if (!isNaN(numero)) {
        const anterior = numero - 1;
        const sucessor = numero + 1;

        const salarioDiv = document.getElementById('div-salario');
        const resultadoDiv = document.getElementById('resultado');
        const salarioLabel = document.getElementById('div-salario_q');
        const nomeLabel = document.getElementById('nomeLabel');
        const nomeDiv = document.getElementById('nomeDiv');

        salarioLabel.textContent = `Anterior:`
        salarioDiv.textContent = `${anterior}`;
        nomeLabel.textContent = `Sucessor:`
        resultadoDiv.textContent = `${sucessor}`;

        nomeLabel.style.display = "block";
        nomeDiv.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";
        resultadoDiv.style.display = "block";
    } else {
        alert("Por favor, digite um número válido.");
    }
}

document.getElementById('btn-anteriorSucessor').addEventListener('click', anteriorSucessor);

// 7

function dobroTerça() {
    const valor = prompt("Qual é o valor?");
    const numero = parseFloat(valor);

    if (!isNaN(numero)) {
        const dobro = numero * 2;
        const terco = numero / 3;

        const salarioDiv = document.getElementById('div-salario');
        const resultadoDiv = document.getElementById('resultado');
        const salarioLabel = document.getElementById('div-salario_q');
        const nomeLabel = document.getElementById('nomeLabel');
        const nomeDiv = document.getElementById('nomeDiv');

        salarioLabel.textContent = `Dobro:`;
        salarioDiv.textContent = `${dobro}`;
        nomeLabel.textContent = `Terça parte:`;
        resultadoDiv.textContent = `${terco}`;

        nomeLabel.style.display = "block";
        nomeDiv.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";
        resultadoDiv.style.display = "block";
    } else {
        alert("Por favor, digite um número válido.");
    }
}

document.getElementById('btn-dobroTerça').addEventListener('click', dobroTerça);


// 8

function distancia() {
    const valor = prompt("Qual é a distância em metros?");
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeDiv = document.getElementById('nomeDiv');
    const metrosc = document.getElementById('resultado');
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');
    const numero = parseFloat(valor);

    if (!isNaN(numero)) {
        // salarioDiv.style.height = '300px';
        // nomeLabel.style.display = "block";
        // nomeDiv.style.display = "block";
        // salarioLabel.style.display = "block";
        // salarioDiv.style.display = "block";
        // nomeLabel.textContent = `Metros calculados:`
        // salarioLabel.textContent = "Resultados:";
        // metrosc.textContent = numero

        const km = numero / 1000;
        const hm = numero / 100;
        const dam = numero / 10;
        const dm = numero * 10;
        const cm = numero * 100;
        const mm = numero * 1000;

        alert(`Distância informada: ${numero} metros\n\n` +
              `Em quilômetros (km): ${km} km\n` +
              `Em hectômetros (hm): ${hm} hm\n` +
              `Em decâmetros (dam): ${dam} dam\n` +
              `Em decímetros (dm): ${dm} dm\n` +
              `Em centímetros (cm): ${cm} cm\n` +
              `Em milímetros (mm): ${mm} mm`);
    } else {
        alert("Por favor, digite um número válido.");
    }
}

document.getElementById('btn-distancia').addEventListener('click', distancia);

// 9

function converterParaDolares() {
    const valorReais = prompt("Quanto dinheiro você tem na carteira em R$?");
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeDiv = document.getElementById('nomeDiv');
    const salarioDiv = document.getElementById('div-salario');
    const reais2 = document.getElementById('resultado');
    const salarioLabel = document.getElementById('div-salario_q');
    const reais = parseFloat(valorReais);
    
    if (!isNaN(reais) && reais >= 0) {
        nomeLabel.style.display = "block";
        nomeDiv.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";
        reais2.style.display = "block";

        nomeLabel.textContent = 'Valor em reais:'
        salarioLabel.textContent = 'Valor em dolares:'

        const cotacaoDolar = 3.45;
        const dolares = reais / cotacaoDolar;
        const reaisFormatado = reais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const dolaresFormatado = dolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

        reais2.textContent = reaisFormatado
        salarioDiv.textContent = dolaresFormatado
    } else {
        alert("Por favor, digite um valor válido.");
    }
}

document.getElementById('btn-converter').addEventListener('click', converterParaDolares);

// 10

function calcularTinta() {
    const largura = prompt("Qual é a largura da parede em metros?");
    const altura = prompt("Qual é a altura da parede em metros?");

    const nomeLabel = document.getElementById('nomeLabel');
    const nomeDiv = document.getElementById('nomeDiv');
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');
    const resultadoDiv = document.getElementById('resultado');
    const areaDiv = document.getElementById('areaResultado');
    const tintaDiv = document.getElementById('tintaResultado');

    const larguraNumerica = parseFloat(largura);
    const alturaNumerica = parseFloat(altura);

    if (!isNaN(larguraNumerica) && larguraNumerica > 0 && !isNaN(alturaNumerica) && alturaNumerica > 0) {
        const area = larguraNumerica * alturaNumerica;
        const tintaNecessaria = area / 2;

        nomeLabel.style.display = "block";
        nomeDiv.style.display = "block";
        salarioLabel.style.display = "block";
        salarioDiv.style.display = "block";
        areaDiv.style.display = "block";
        tintaDiv.style.display = "block";

        nomeLabel.textContent = `Área da parede:`;
        resultadoDiv.textContent = `${area.toFixed(2)} m²`
        salarioLabel.textContent = "Tinta necessária:";
        salarioDiv.textContent = `${tintaNecessaria.toFixed(2)} litros`;

        areaDiv.textContent = `${area.toFixed(2)} m²`;
        tintaDiv.textContent = `${tintaNecessaria.toFixed(2)} litros`;
    } else {
        alert("Por favor, insira valores válidos para largura e altura.");
    }
}

document.getElementById('btn-calcularTinta').addEventListener('click', calcularTinta);


// 

