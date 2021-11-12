const equip = {

    name:'GuerreirosZ',
    menbers: ['Goku', 'Kuririn','Vegeta'],
    menbersOfEquip: function(){
        //alert('D3uR0cK!');
        this.menbers.forEach(menber=>{
            console.log(`${menber} é da equipe ${this.name}`)
        });
    }

}

equip.menbersOfEquip();