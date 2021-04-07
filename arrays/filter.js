var alunos = [
    {name:"Hugo Lélio", age:32},
    {name:"Thuany Lima", age:23},
    {name:"Valentina Lélio", age:3},
    {name:"Valentina Lélio", age:0}
]

var alunosDeMaior = [];

for(var x = 0; x < alunos.length; x++){
    if(alunos[x].age >= 18){
        alunosDeMaior.push(alunos[x]);
    }
}

console.log(alunosDeMaior);
console.log("---------------------------------")

var maiorDeIdade = alunos.filter((aluno)=>{
    return aluno.age >= 18
});

console.log(maiorDeIdade);