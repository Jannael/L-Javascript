let results = null;
let htmlCode = " ";
let allPokemons = [];
const MAXPOKEMON = 550;
class pokemon{
    constructor(id, name, url){
        this.id = id;
        this.name = name;
        this.url = url;
    }
}

async function getData(){
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAXPOKEMON}&offset=0`)
    .then(response => response.json())
    .then(json => results = json.results)
    return true;
}

function showPokemon(id, name){
    htmlCode += 
    `<div class="response" data-value="${id}">
            <p class="response_id">#${id}</p>
            <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="" class="response_img" loading="lazy">
            <p class="response_name">${name}</p>
    </div>`;
}

async function innerPokemon() {
    await getData();
    let count = 0;
    results.forEach(result => {
        count ++;
        showPokemon(count, result.name);
        allPokemons.push(new pokemon(count, result.name, result.url));
    }); 
    localStorage.setItem('allPokemons', JSON.stringify(allPokemons));   
    main.innerHTML += htmlCode;
    pokemonEvent(); //add event to redirect at detail and show pokemon specifics
}

function pokemonEvent() {
    getData()
    .then(() => {
        const pokemonDiv = document.querySelectorAll(".response");
        for(let pokemonContainer of pokemonDiv.entries()){
            pokemonContainer[1].addEventListener('click', ()=>{
                window.location.href = "./detail.html";
                localStorage.setItem('pokemonSelected', JSON.stringify(pokemonContainer[1].getAttribute(`data-value`))); 
        })
        }
    }); 
}

async function waitToMain() {
    setTimeout(()=>{
        if(main == null) {
            waitToMain();
            return;
        }
        else {
            innerPokemon();
            return;
        }
    }, 100)
}

waitToMain();