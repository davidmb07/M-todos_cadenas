function useTrimStart(button) {
    textElement = document.getElementById("trimStartResult");
    if (textElement.innerText) {
        // Si el texto está visible, lo ocultamos y cambiamos el texto del botón
        textElement.innerText = "";
        button.innerText = "Mostrar";
    } else {
        // Si el texto no está visible, lo mostramos y cambiamos el texto del botón
        text = "         🍕 Pizza a domicilio (con tiempo de espera extra al inicio)";
        result = text.trimStart();
        textElement.innerText = "Original: '" + text + "'\nResultado: '" + result + "'";
        button.innerText = "Ocultar";
    }
}

function useTrimEnd(button) {
    textElement = document.getElementById("trimEndResult");
    if (textElement.innerText) {
        // Si el texto está visible, lo ocultamos y cambiamos el texto del botón
        textElement.innerText = "";
        button.innerText = "Mostrar";
    } else {
        // Si el texto no está visible, lo mostramos y cambiamos el texto del botón
        text = "Este mensaje tiene unos cuantos espacios extra... 🚀          ";
        result = text.trimEnd();
        textElement.innerText = "Original: '" + text + "'\nResultado: '" + result + "'";
        button.innerText = "Ocultar";
    }
}