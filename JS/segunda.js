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

function verificarNumero() {
    const numero = prompt("Digite um número:");

    const nomeLabel = document.getElementById('nomeLabel');
    const salarioDiv = document.getElementById('div-salario');
    const salarioLabel = document.getElementById('div-salario_q');

    salarioLabel.style.display = "block";
    // nomeLabel.style.display = "block";

    if (numero !== null) {
        const numeroNumerico = parseFloat(numero);

        if (!isNaN(numeroNumerico)) {
            if (numeroNumerico > 20) {
                salarioLabel.textContent = 'O número é maior que 20:';
                salarioDiv.style.display = "block";
                salarioDiv.textContent = numeroNumerico
            } else {
                salarioLabel.textContent = 'O número não é maior que 20!';
                salarioDiv.style.display = "block";
                salarioDiv.textContent = numeroNumerico
            }
        } else {
            alert("Por favor, insira um número válido.");
        }
    }
}

document.getElementById('btn-numero20').addEventListener('click', verificarNumero);

// 2

function verificarMaiorQue10() {
    const numero = prompt("Digite um número:");

    const salarioLabel = document.getElementById('div-salario_q');
    const salarioDiv = document.getElementById('div-salario');

    if (numero !== null) {
        const numeroNumerico = parseFloat(numero);

        if (!isNaN(numeroNumerico)) {
            if (numeroNumerico > 10) {
                salarioLabel.style.display = "block";
                salarioDiv.style.display = "block";
                salarioLabel.textContent = 'O número é maior que 10:';
                salarioDiv.textContent = numero
            } else {
                salarioLabel.style.display = "block";
                salarioDiv.style.display = "block";
                salarioLabel.textContent = 'O número não é maior que 10:';
                salarioDiv.textContent = numero
            }
        } else {
            alert("Por favor, insira um número válido.");
        }
    }
}

document.getElementById('btn-verificara').addEventListener('click', verificarMaiorQue10);

// 3

function verificarSoma() {
    const A = prompt("Digite o valor de A:");
    const B = prompt("Digite o valor de B:");
    const C = prompt("Digite o valor de C:");

    const A_num = parseFloat(A);
    const B_num = parseFloat(B);
    const C_num = parseFloat(C);

    const salarioLabel = document.getElementById('div-salario_q');
    const salarioDiv = document.getElementById('div-salario');

    if (!isNaN(A_num) && !isNaN(B_num) && !isNaN(C_num)) {
        if (A_num + B_num < C_num) {
            salarioLabel.style.display = "block";
            salarioDiv.style.display = "block";

            salarioLabel.textContent = `A soma de A (${A}) + B (${B}) é menor que C:`
            salarioDiv.textContent = C
        } else {
            salarioLabel.style.display = "block";
            salarioDiv.style.display = "block";

            salarioLabel.textContent = `A soma de A (${A}) + B (${B}) não é menor que C:`
            salarioDiv.textContent = C
        }
    } else {
        alert("Por favor, insira valores válidos.");
    }
}

document.getElementById('btn-verificarSoma').addEventListener('click', verificarSoma);

// 4

function verificarSomaMaiorQue10() {
    const A = prompt("Digite o valor de A:");
    const B = prompt("Digite o valor de B:");

    const A_int = parseInt(A);
    const B_int = parseInt(B);

    const salarioLabel = document.getElementById('div-salario_q');
    const salarioDiv = document.getElementById('div-salario');

    if (!isNaN(A_int) && !isNaN(B_int)) {
        const soma = A_int + B_int;

        if (soma > 10) {
            salarioLabel.style.display = "block";
            salarioDiv.style.display = "block";

            salarioLabel.textContent = `A soma de A + B é maior que 10:`
            salarioDiv.textContent = soma
        } else {
            salarioLabel.style.display = "block";
            salarioDiv.style.display = "block";

            salarioLabel.textContent = `A soma de A + B não é maior que 10:`
            salarioDiv.textContent = soma
        }
    } else {
        alert("Por favor, insira números inteiros válidos.");
    }
}

document.getElementById('btn-verificarSomaMaiorQue10').addEventListener('click', verificarSomaMaiorQue10);

// LIVRE

function criatividadeLivre() {
    const quadradoQuestions = document.querySelector('.quadrado_questions');
    const quadResul = document.querySelector('.quad_resul');
    // const quadradoQuestions = document.querySelector('.quadrado_questions');

    const btndds3 = document.querySelector('.btn_dds3');
    const btndds = document.querySelector('.btn_dds');
    
    if (quadradoQuestions) {
        const cores = [
            '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD733',
            '#FF6347', '#8A2BE2', '#5F9EA0', '#D2691E', '#FF4500', 
            '#32CD32', '#9932CC', '#8B008B', '#BDB76B', '#ADFF2F',
            '#4B0082', '#800080', '#FF1493', '#00BFFF', '#FFD700'
          ];
  
      const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  
      quadradoQuestions.style.border = `5px solid ${corAleatoria}`;
      quadResul.style.border = `1px solid ${corAleatoria}`;
      btndds3.style.backgroundColor = `${corAleatoria}`;
      btndds.style.backgroundColor = `${corAleatoria}`;
    }
  }
  
  document.getElementById('btn-criatividadeLivre').addEventListener('click', criatividadeLivre);

//   