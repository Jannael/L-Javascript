const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const allPokemons = localStorage.getItem('allPokemons');
let pokemonSelected = parseInt(JSON.parse(localStorage.getItem(`pokemonSelected`), 10) - 1);

function iteracion(i) {
    const maxPokemon = 549;

    pokemonSelected = (i == 0) ? pokemonSelected - 1
    : pokemonSelected + 1;

    if (pokemonSelected < 0) {
        pokemonSelected = maxPokemon;
    } else if (pokemonSelected > maxPokemon) {
        pokemonSelected = 0;
    }

    pokemonDetailRedirect(pokemonSelected);
}

left.addEventListener(`click`, ()=> iteracion(0));
right.addEventListener(`click`, ()=> iteracion(1));

const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    dark: "#EE99AC",
};

function pokemonDetailRedirect(index){
    fetch(JSON.parse(allPokemons)[index].url)
    .then(response => response.json())
    .then(json => {
        const img = document.querySelector(".pokemon-img");
        const root = document.querySelector(":root");

        img.setAttribute(`src`, `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonSelected + 1}.svg`)
        root.style.setProperty(`--bg-body`, `${typeColors[json.types[0].type.name]}`);
        
        const name = document.querySelector(".name-pokemon");
        const weight = document.querySelector(".weight");
        const height = document.querySelector(".height");
        const grass = document.querySelector(".grass");
        const poison = document.querySelector(".poison");
        const move = document.querySelectorAll(".move");
        const statsWrapper = document.querySelector(".stats-wrapper");

        if(json.types[1] == undefined) poison.style.display = "none";
        else poison.innerHTML = json.types[1].type.name;

        if(json.abilities[1] == undefined) move[1].style.display = "none";
        else move[1].innerHTML = json.abilities[1].ability.name;


        move[0].innerHTML = json.abilities[0].ability.name 
        grass.innerHTML = json.types[0].type.name;
        name.innerHTML = json.name;
        weight.innerHTML = `${json.weight / 10}kg`;
        height.innerHTML = `${json.height / 10}m`;

    const stats = json.stats;
    let htmlCode = '';

    const statNameMapping = {
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SATK",
        "special-defense": "SDEF",
        speed: "SPD",
    };

    stats.forEach(stat => {
        htmlCode += `
        <div class="stats-wrap" data-stat="${statNameMapping[stat.stat.name]}">
            <p class="body3-fonts stats">${statNameMapping[stat.stat.name]}</p>
            <p class="body3-fonts">${stat.base_stat}</p>
            <progress value="${stat.base_stat}" max="100" class="progress-bar"></progress>
        </div>`
    });
    statsWrapper.innerHTML = htmlCode;
})
}

pokemonDetailRedirect(pokemonSelected);