// variables 
var letras = "";
var solucion = "";
var palabraInput =document.getElementById("palabra");
var nuevaBtn = document.getElementById("nueva");
var solucionBtn = document.getElementById("solucion");
var finalizarBtn = document.getElementById("finalizar");
var resultadoDiv = document.getElementById("resultado");

window.onload = function(){
    palabraInput.addEventListener("input", function(){
        comprobarPalabra();
    });
    nuevaBtn.addEventListener("click", function(){
        generarNuevaPalabra();
    });
}

function comprobarPalabra() {
    var palabraIngresada = palabraInput.ariaValueMax.toUpperCase();
    if (palabraIngresada === solucion) {
        resultadoDiv.innerText="¡Has acertado la palbra "+solucion+"!";
        nuevaBtn.disabled= false;
        solucionBtn.disabled = true;
    } else {
        resultadoDiv.innerText="";
    }

}

function generarNuevaPalabra(){
    letras = generarPalabraAleatoria();
    letras = generarPalabraAleatoria();
    solucion = letras.split("").sort().join("");
    document.getElementById("letras").value = letras;
    palabraInput.value = "";
    resultadoDiv.innerText = "";
    nuevaBtn.disabled = true;
    solucionBtn.disabled = false;
}
function generarPalabraAleatoria() {
    var palabras = ["HOLA", "MUNDO", "JAVA", "JAVASCRIPT", "PROGRAMACION", "COMPUTADORA", "DESARROLLO", "INTELIGENCIA", "ARTIFICIAL", "APRENDIZAJE"];
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}