function displayPokemon() {
  const pokemonList = [];

  // This is a Object
  const pokemon1 = {
    name: "Bulbasaur", // <--- This is a String
    height: 7, // <--- This is a Number
    weight: 6.9, // weight is a variable and 6.9 is a Value
    types: ["grass", "poison"], // <--- This is a Array
  };

  const pokemon2 = {
    name: "Charmander",
    height: 6,
    weight: 9,
    types: ["fire"],
  };

  const pokemon3 = {
    name: "Squirtle",
    height: 0.5,
    weight: 8.5,
    types: ["water"],
  };

  // Add the Pokémon objects to the pokemonList array
  pokemonList.push(pokemon1, pokemon2, pokemon3);

  for (let i = 0; i < pokemonList.length; i++) {
    //The i++ expression in programming is an example of an increment operation. It's shorthand for i = i + 1. What it does is increase the value of i by 1.
    // This is a for loop, it will loop through the pokemonList array.
    const pokemon = pokemonList[i];
    const name = pokemon.name;
    const height = pokemon.height;
    const weight = pokemon.weight;
    const types = pokemon.types.join(", ");

    let output = `${name} (height: ${height}) (weight: ${weight}) ${types} <br>`; // This specify what values will be displayed.

    if (height > 6) {
      // This is a conditional statement, if the height is greater than 6, it will display the message below.
      output += " - Wow, that's big! <br>";
    }

    document.getElementById("output").innerHTML += output; // This is the output, allows the values to be displayed on the browser.
  }
}
