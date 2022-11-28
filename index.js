
const namePoke = document.getElementById('name-poke');
const imgPoke = document.getElementById('img-poke');
const typesPoke = document.getElementById('types');
const statsPoke = document.getElementById('stats-poke');
const form = document.getElementById('form');
const img = document.createElement("img");

const api = 'https://pokeapi.co/api/v2/pokemon/';


const callAPI = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(res => res.json())  
    .then(data => { 

            const stats = data.stats;
            const type = data.types;

            img.src = data.sprites.front_default;
            namePoke.innerText = data.name;

            recorrerTypes(type);
            recorrerStats(stats);
            imgPoke.appendChild(img);
            console.log(data);
        })
        .catch(e => console.error(new Error(e)));
}
const recorrerTypes = types => {
    typesPoke.innerText='';
    const type1 = document.createElement("div");
    type1.classList.add('ty');
    type1.textContent = types[0].type.name;
    typesPoke.appendChild(type1);
    if (types[1]) {
        const type2 = document.createElement("div");
        type2.classList.add('ty');
        type2.textContent = types[1].type.name;
        typesPoke.appendChild(type2);
    }

}
const recorrerStats = stats =>{
    statsPoke.innerText = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementname = document.createElement("div");
        const statElementamount = document.createElement("div");
        statElementname.textContent = stat.stat.name;
        statElementamount.textContent = stat.base_stat;
        statElement.appendChild(statElementname);
        statElement.appendChild(statElementamount);
        statsPoke.appendChild(statElement);
    });
}