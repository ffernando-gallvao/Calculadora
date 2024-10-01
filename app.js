function insert(num) {
    var numero = document.getElementById(`resultado`).textContent;
    document.getElementById(`resultado`).textContent = numero + num;
}

function clean() {
    document.getElementById(`resultado`).textContent = "";
}

function back() {
    var resultado = document.getElementById(`resultado`).textContent;
    document.getElementById(`resultado`).textContent = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById(`resultado`).textContent;
    if (resultado) {
        document.getElementById(`resultado`).textContent = eval(resultado);
    } else {
        document.getElementById(`resultado`).textContent = "Nada...";
    }
}
