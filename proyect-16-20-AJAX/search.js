const filter = document.querySelector(".filter_wrapper");
const searchInput = document.querySelector(".search");

async function sortId(id) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(json => showPokemon(id ,json.name))
}

async function sortName(name) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(response => response.json())
    .then(json => {
        showPokemon(json.id, name);
        count = json.id;
    })
}

function handleSearch(){
    if(isNaN(searchInput.value)){
        sortName(searchInput.value);
    }else{
        sortId(searchInput.value);
        count = searchInput.value;
    }
}

document.addEventListener("keyup", e => {
    if(e.key == "Enter") handleSearch();
})
