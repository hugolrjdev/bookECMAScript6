var nomes = ["Hugo", "Thuany", "Valentina", "Neto"]

for (var i = 0; i < nomes.length; i++) {

    console.log('for', nomes[i]);

}

nomes.forEach((name)=>{
    console.log('forEach', name);
});


var canais = ["Globo", "SBT", "Record" ]

canais.forEach((canal)=>{
    canais.push("Rede Tv"); // esta inserção será ignorada
    console.log(canal)
});

console.log(canais)