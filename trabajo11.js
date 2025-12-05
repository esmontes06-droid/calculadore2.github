function agregar(valor) {
    document.getElementById("resultado").value += valor;
}

function limpiar() {
    document.getElementById("resultado").value = "";
}

function borrar() {
    let actual = document.getElementById("resultado").value;
    document.getElementById("resultado").value = actual.slice(0, -1);
}

function calcular() {
    try {
        let expresion = document.getElementById("resultado").value;
        let resultado = eval(expresion); // Calcula la expresión

        if (resultado === Infinity || isNaN(resultado)) {
            document.getElementById("resultado").value = "Error";
        } else {
            document.getElementById("resultado").value = resultado;
        }
    } catch (error) {
        document.getElementById("resultado").value = "Error";
    }
}
