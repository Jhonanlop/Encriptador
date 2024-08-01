document.getElementById("texto").addEventListener("input", verificarTexto);

function encriptar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let textoEncriptado = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    actualizarResultado(textoEncriptado, true);
}

function desencriptar() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
    actualizarResultado(textoDesencriptado, false);
}

function actualizarResultado(texto, isEncriptado) {
    let textoEncriptado = document.getElementById("texto-encriptado");
    textoEncriptado.innerHTML = `<p class="parrafo">${texto}</p>`;

    let tituloMensaje = document.querySelector(".titulo-mensaje");
    tituloMensaje.textContent = "Resultado:";

    let imagen = document.getElementById("img");
    if (isEncriptado) {
        imagen.src = "./img/caja-fuerte-cerrada.png";
    } else {
        imagen.src = "./img/caja-fuerte-abierta.png";
    }
    imagen.style.display = "block";
}

function copiarTexto() {
    let texto = document.querySelector("#texto-encriptado .parrafo").innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Error al copiar el texto");
    });
}

function verificarTexto() {
    let texto = document.getElementById("texto").value;
    let imagen = document.getElementById("img");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let tituloMensaje = document.querySelector(".titulo-mensaje");

    if (texto === "") {
        imagen.src = "/img/datos-encriptados.png";
        imagen.style.display = "block";

        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        textoEncriptado.innerHTML = `<p class="parrafo">Ingresa el texto que desees encriptar o desencriptar.</p>`;
    }
}
