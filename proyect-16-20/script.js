const img_response = document.querySelector(".response_img");
const name_response = document.querySelector(".response_name");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let results = null;
let count = 0;

async function getData(){
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then(response => response.json())
    .then(json => results = json)
}
function callData(count){
    getData();
    showPokemon(results.results[count].url.split("/")[6],results.results[count].name)
}

function showPokemon(number, name){
    img_response.setAttribute(`src`, `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`);
    name_response.innerHTML = name;
}

function iteracion(i){
    const maxPokemon = 549;
    (i == 0) ? count--
    : count++
    count < 0 && (count = maxPokemon);
    count > maxPokemon && (count = 0);
    callData(count);
}

getData();
left.addEventListener("click", ()=> iteracion(0));
right.addEventListener("click", ()=> iteracion(1));