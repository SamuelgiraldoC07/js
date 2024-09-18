// alert("hola desde forma externa")

// comentario de linea

/*
    Comentario de bloque
*/
// declaraion de varibles

// let  nombre = "Samuel";
// let apellido = "ciro";
// Mostrar en pantalla 
// alert () -> permite mostrar un mensaje en el navegador
// alert("hola" +nombre+""+apellido); 
// let n1 = 5;
// let n2 = 50;
// let resultado = n1 + n2
// alert(n1 + " + " + n2 +" = " +resultado)
// // console.log() -> permite mostrar resultados o mensajes,
// // en la consola del navegador 
// console.log(alert(n1 + " + " + n2 +" = " +resultado));
// // document.write() -> permite mostrar el resultado o mesajes
// // en el navegador, puedes utilizar etiquetas html
// // document.write("<h1>"+n1 + " + " + n2 +" = " +resultado + "</h1>");

//**** ventanas de entrada de informacion***
// confirm() -> permite la entrada de respuesta de una pregunta 
// // la respuesta siempre va a ser true - false 
// let respuesta = confirm("¿llegaste temprano hoy?");
// alert(" tu respuesta es: "+ respuesta);
// // prompt() -> permite la entrada de una respuesta abierta a una pregunta 
//let respuesta2 = prompt("¿llegaste temprano hoy?");
//alert("tu respuesta es: "+respuesta2);
// let n1 = Number(prompt ("Digite nota 1 "));
// let n2 = Number(prompt ("Digite nota 2"));
// let n3 = Number(prompt("Digite nota 3"))
// let operacion = (n1 + n2 + n3)/3;
// alert("promedio de las 3 notas es: " +operacion);



/* 
    Calcular el salario de un empleado que gana x sueldo
    descontar en salud el 5% y en pension el 7%
*/
//3 pasos a tener en cuenta para resolver problemas o algoritmos
//de logica 
// paso 1-> identificar los datos de entrada
let salario = Number(prompt("Digite el salario del empleado"))
//paso 2 -> calculos a realizar con los datos de entrada
let salud = salario * 4/100; 
let pension = salario * 5/100;
let salarioNeto = salario - (salud + pension);
// paso 3 -> mostrar la informacion
// alert - console.log() - document.write()
alert(" el salario del empleado es : " +salario+"\n"
+"Dto en salud : "+ salud + "\n"
+"Dto en pension: "+pension +"\n"
+"Salario neto a pagar: "+salarioNeto
);