// La funcion Insertar se encarga de seleccionar el numero y colocarlo en el areatexto llamado Resultado
function insertar(num) {
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
}


// La funcion Limpiar lo que realiza es al precionnar el boton 'C' elimine toda la operacion de la calculadora, osea la reinicia
function limpiar(){
    document.getElementById('resultado').value = '';
}

//La función calcular toma el valor actual del campo de texto con id resultado, evalúa la expresión matemática contenida en él y actualiza el campo con el resultado. Si el campo está vacío, muestra un mensaje de advertencia.
function calcular(){
    var resultado = document.getElementById('resultado').value;
    if(resultado){
        document.getElementById('resultado').value = eval(resultado);
    } else {
        document.getElementById('resultado').value = 'Ingrese una operacion';
    }

}