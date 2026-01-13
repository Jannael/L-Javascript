const main = document.querySelector(`main`);
const pokemons = JSON.parse(localStorage.getItem('allPokemons')); 

const sortNumber = document.getElementById(`number`);
const sortName = document.getElementById(`name`);
const filterWrap = document.querySelector(`.filter_wrap`);
const sortIcon = document.querySelector(".sort_icon");
const searchInput = document.querySelector(`.search_input`)
 
sortIcon.addEventListener(`click`, ()=> filterWrap.classList.toggle('open'))
sortNumber.addEventListener(`click`, ()=> filterWrap.classList.remove(`open`))
sortName.addEventListener(`click`, ()=> filterWrap.classList.remove(`open`))
searchInput.addEventListener('input', handleSearch)

function handleSearch(){
    main.innerHTML = `
        <div class="wait">
            <img src="assets/Pokemon-Pokeball-PNG-File.png" alt="" class="wait_img">
        </div>`;
    if (searchInput.value == ``) main.innerHTML = htmlCode;
    else {
        if (sortName.checked) sort("name", pokemons);
        else sort("id", pokemons);
    }
}

function sort(property, allPokemons) {
    let htmlCode = ``;
    allPokemons.forEach(pokemon => {
        let pokepro = `${pokemon[property]}`; //pokepro pokemon-property
        if (pokepro.includes(searchInput.value) && pokepro.startsWith(searchInput.value)) {
            htmlCode +=
            `<div class="response" data-value="${pokemon.id}">
                <p class="response_id">#${pokemon.id}</p>
                <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="" class="response_img" loading="lazy">
                <p class="response_name">${pokemon.name}</p>
            </div>`;
        }
    });
    main.innerHTML = htmlCode;
    pokemonEvent();
}