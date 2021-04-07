var alunos = [
    {name:"Hugo Lélio", age:32},
    {name:"Thuany Lima", age:23},
    {name:"Valentina Lélio", age:3},
    {name:"Hugo Lélio Neto", age:0}
]

var aluno;

for(var n = 0; n < alunos.length; n++){
    if(alunos[n].name === "Valentina Lélio"){
        aluno = alunos[n];
        break;
    }
}

console.log(aluno);
console.log("-----------------------------");

var searchForName = alunos.find((aluno)=>{
    return aluno.name === "Hugo Lélio Neto"
});

console.log(searchForName);
