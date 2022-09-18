console.log("Entro al main.js");

// const url = "https://pokeapi.co/api/v2/pokemon/10";
const imgPokemon = document.getElementById('imgPokemon');
const idPokemon = document.getElementById('idPokemon');
const nombrePokemon = document.getElementById('nombrePokemon');
const pesoPokemon = document.getElementById('pesoPokemon');

// function getRandomInt(max) {
//     const pokemonAleatorio = Math.floor(Math.random() * max);
//     return console.log(pokemonAleatorio);
//   }


const randomPokemon = () => {
    console.log("Entró a la función randomPokémon");

    const pokemon_number = generateRandomNumber(1,802); 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_number}`;
    console.log(pokemon_number);

    fetch(url)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            imgPokemon.src = data.sprites.other.home.front_default; 
            idPokemon.innerHTML = data.id;
            nombrePokemon.innerHTML = data.name.toUpperCase();
            pesoPokemon.innerHTML = data.weight;
        })
        .catch((error) => console.log(error));
}

function generateRandomNumber(min=0, max=100){
    //find diff
    let difference = max - min;

    //generate random number
    let rand = Math.random();

    //multiply with difference
    rand = Math.floor(rand * difference);

    //add with min value
    rand = rand + min;

    return rand;
}