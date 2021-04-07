//verificar se é verdadeiro ou falso

var alunos = [
    {name:"Hugo Lélio", age:32},
    {name:"Thuany Lima", age:23},
    {name:"Valentina Lélio", age:3},
    {name:"Hugo Lélio Neto", age:0}
]


var todosSaoMaioresDeIdade = true;

for(var i = 0; i < alunos.length; i++){
    if(alunos[i].age < 18){
        todosSaoMaioresDeIdade = false;
    }
}

console.log('Todos são maiores de idade?', todosSaoMaioresDeIdade);
console.log("-----------------------");

var maioresDeIdade = alunos.every((aluno)=>{
    return aluno.age < 18;
});

console.log('Todos são maiores de idade?', maioresDeIdade);