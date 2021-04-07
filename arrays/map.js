var numeros = [1,2,3,4]
var dobro = [];

for (var i = 0; i < numeros.length; i++){
    dobro.push(numeros[i]*2);
    console.log("numero", numeros, "dobro", dobro);
}

var dobrado = numeros.map((numero)=>{
    return numero*2
});

console.log("------------------------------------------------------")
console.log("numero", numeros, "dobro", dobro);