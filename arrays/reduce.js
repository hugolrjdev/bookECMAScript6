var numeros = [1,2,3,4,5,6,7,8] 
var valores = [1,2,3,4,5,6,7,8] 
var soma = 0;


var alunos = [
    {name:"Hugo Lélio", age:32},
    {name:"Thuany Lima", age:23},
    {name:"Valentina Lélio", age:3},
    {name:"Hugo Lélio Neto", age:0}
]


for(var n = 0; n < numeros.length; n++){
    soma += numeros[n];
}

console.log(soma);



soma = valores.reduce((soma, valor)=>{
    return soma + valor;
});

console.log("-----------------------");
console.log(soma);


var nomes;

nomes = alunos.reduce((arrayNames, aluno)=>{
    arrayNames.push(aluno.name);
    return arrayNames;
}, []);

//reduce((arrayNames, aluno) arrayNames é o nome do array que será criado para receber os nomes 

console.log(names)