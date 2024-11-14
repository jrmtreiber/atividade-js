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
// CALCULOS

document.addEventListener('DOMContentLoaded', function () {
    const valor = document.getElementById('numero');
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeDiv = document.getElementById('nomeDiv');
    const resultadoDiv = document.getElementById('resultado');

    valor.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            nomeLabel.style.display = "block";
            nomeDiv.style.display = "block";
            resultadoDiv.style.height = "185px";

            nomeLabel.textContent = "Resultado:";

            const numero = parseInt(valor.value);
            let resultadoTexto = "";

            for (let i = 1; i <= 10; i++) {
                resultadoTexto += `${numero} x ${i} = ${numero * i}<br>`;
            }

            resultadoDiv.innerHTML = resultadoTexto;
        }
    });
});

function limpardados() {
    const nomeLabel = document.getElementById('nomeLabel');
    const nomeDiv = document.getElementById('nomeDiv');
    const resultadoDiv = document.getElementById('resultado');

    nomeLabel.style.display = 'none';
    nomeDiv.style.display = 'none';
    resultadoDiv.style.display = 'none';
    resultadoDiv.innerHTML = ""; 
};

document.getElementById('btn-cleardados').addEventListener('click', limpardados);
