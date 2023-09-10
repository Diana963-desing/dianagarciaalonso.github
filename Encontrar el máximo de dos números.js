alert ("casa");
function calcular(){
let numeros=[];
let mayor=-99999, menor=99999;

for (i=0;i<=2;i++) {
numeros[i]=parseInt(prompt(" ingrese un número "+(i+1)));
}

for (i=0;i mayor){
mayor = numeros [i];
}
if(numeros[i] < menor){
menor = numeros [i];
}
}
document.getElementById("rta").innerHTML = " el mayor de los numeros es " +mayor+ " el menor es " +menor;
