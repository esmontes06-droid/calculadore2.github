# calculadore2.github
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora JS</title>
    <style>
        body {
            background: #f2f2f2;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculadora {
            width: 260px;
            background: rgba(53, 56, 99, 0.61);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 0 10px #aaa;
        }

        #resultado {
            width: 100%;
            height: 50px;
            font-size: 24px;
            text-align: right;
            padding-right: 10px;
            margin-bottom: 10px;
        }

        .botones {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }

        button {
            padding: 15px;
            font-size: 20px;
            border: none;
            background: #e3e3e3;
            border-radius: 8px;
            cursor: pointer;
        }

        button:hover {
            background: #ccc;
        }

        .operador {
            background: #ffcc66;
        }

        .igual {
            background: #66ccff;
            grid-column: span 2;
        }
    </style>
</head>
<body>

    <div class="calculadora">
        <input type="text" id="resultado" disabled>

        <div class="botones">
            <button onclick="limpiar()">C</button>
            <button onclick="borrar()">⌫</button>
            <button class="operador" onclick="agregar('/')">/</button>
            <button class="operador" onclick="agregar('*')">*</button>

            <button onclick="agregar('7')">7</button>
            <button onclick="agregar('8')">8</button>
            <button onclick="agregar('9')">9</button>
            <button class="operador" onclick="agregar('-')">-</button>

            <button onclick="agregar('4')">4</button>
            <button onclick="agregar('5')">5</button>
            <button onclick="agregar('6')">6</button>
            <button class="operador" onclick="agregar('+')">+</button>

            <button onclick="agregar('1')">1</button>
            <button onclick="agregar('2')">2</button>
            <button onclick="agregar('3')">3</button>
            <button class="igual" onclick="calcular()">=</button>

            <button onclick="agregar('0')">0</button>
            <button onclick="agregar('.')">.</button>
        </div>
    </div>

    <!-- Enlazando el archivo JS -->
    <script src="trabajo11.js"></script>

</body>
</html>
