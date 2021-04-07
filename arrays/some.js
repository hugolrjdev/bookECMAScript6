//Se a tarefa é validar se, pelo menos, um dos elementos de um Array satisfaz uma dada condição

var pesoDasMalas = [12,32,21,29];

var temMalaAcimaDoPeso = false;

for(var p = 0; p < pesoDasMalas.length; p++){
    if(pesoDasMalas[p] > 30 ){
        temMalaAcimaDoPeso = true;
    }
}

console.log(temMalaAcimaDoPeso);
console.log("-----------------------");

var malasAcimaDoPeso = pesoDasMalas.some((mala)=>{
    return mala < 30
})

console.log(malasAcimaDoPeso)