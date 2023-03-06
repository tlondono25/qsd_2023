//ejercicio #1
/*var centigrados,fahrenheit;

centigrados = parseInt(prompt("Ingrese los grados en centigrados por favor"));

fahrenheit = (9/5*centigrados)+32;

alert(centigrados +  "los centigrados convertidos a fahrenheit" + fahrenheit);*/

//ejercicio #2


/*var altura,astericos,numfilas;
numfilas = parseInt(prompt("ingrese un numero"));
for(altura = 1; altura <= (numfilas/2); altura++){
        numfilas=" ";
    for (asteriscos = 0; astericos < altura; asteriscos++){
        numfilas += "*";
        console.log("*");
    }
}*/

//ejercicio #3
/*var factorizar=parseInt(prompt("ingrese su numero"));
var resultado = factorizar;
for (var i = 1; i < factorizar;i++){
    resultado = resultado * i;
}
alert(resultado);*/

//ejercicio #4
/*var opcion = 0;
var saldo = 100000;
var retiro = 0;
var deposito = 0;


 while(opcion < 1 || opcion > 4){
  document.write("Bienvenido al Sistema" + "<br>"
  + "Opciones" + "<br>" + "1. Consulta de Saldo"
  + "<br>" + "2. Retiro" + "<br>" + "3. Deposito"
  + "<br>" + "4. Movimientos" + "<br>");

 opcion = parseInt(prompt("Ingrese la opcion: "));
 }

 if(opcion == 1){
  document.write("Tu saldo actual es: " + saldo);
 }
 if(opcion == 2){    
 
  while (retiro > saldo || retiro==0  != 0 ) 
   retiro=parseInt(prompt("Cuanto vas a retirar"));
     }

     saldo= saldo-retiro;
     document.write("Tu saldo actual es: " + saldo); 
     
     if(opcion == 3){
        deposito = parseInt(prompt("Cuanto depositas: "));
        saldo = saldo + deposito;
        document.write("Tu saldo actual es: " + saldo);
       }
       if(opcion == 4){
        alert("Movimientos");
       }*/
//ejercicio #5
/*var numero = parseInt(prompt("Ingresa un numero"))
var n1 = 0,n2 = 1, siguiente;

console.log ("serie Fibonacci");

for (var i = 1; i <= numero; i++){
    console.log(n1);
    siguiente = n1 + n2 ;
    n1 = n2;
    n2 = siguiente;
}*/

   




