
async function validarCedula() {
    const cedula = document.getElementById('cedula').value;
    const response = await fetch(`./validar_cedula`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cedula }),
    });

    const data = await response.json();
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `La cédula es ${data.esValida ? 'válida' : 'inválida'}.`;
}
