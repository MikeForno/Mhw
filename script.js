console.log("Monster")

fetch('https://mhw-db.com/monsters')
    .then(response => response.json())
    .then(monsters => {
        console.log(monsters)
        monsters.map(monster=>{
            makehtmllist(monster)
            console.log(monster.name, monster.type, monster.species)
        })
    });
    function makehtmllist(monster){
        let navn="<h1>" + monster.name + "</h1>"
        let species="<p>" + monster.species + "</p>"
        let type="<p>" + monster.type + "</p>"
        let monsterbox="<div class='monstas'>" + navn + species + type + "</div>"

        let monsterlist=document.getElementById("monster-list")
        monsterlist.innerHTML+=monsterbox

    }
