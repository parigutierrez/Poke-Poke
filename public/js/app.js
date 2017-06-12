
$(document).ready(function(){

	var xhr = new XMLHttpRequest();

	var imagenes = [

	{ "imagen":"img/bulbasaur.png" },

	{ "imagen":"img/ivysaur.png" },

	{ "imagen":"img/venusaur.png" },

	{ "imagen":"img/charmander.png" },

	{ "imagen":"img/charmeleon.png" },

	{ "imagen":"img/charizard.png" },

	{ "imagen":"img/squirtle.png" },

	{ "imagen":"img/wartortle.png" },

	{ "imagen":"img/blastoise.png" },

	{ "imagen":"img/caterpie.png" },

	{ "imagen":"img/metapod.png" },

	{ "imagen":"img/butterfree.png" },

	{ "imagen":"img/weedle.png" },

	{ "imagen":"img/kakuna.png" },

	{ "imagen":"img/beedrill.png" },

	{ "imagen":"img/pidgey.png" },

	{ "imagen":"img/pidgeotto.png" },

	{ "imagen":"img/pidgeot.png" },

	{ "imagen":"img/rattata.png" },

	{ "imagen":"img/raticate.png" },

	]

	var plantilla = "<div class='col s4'>"+'<img src="__imagen__" class="center-align">' + 
					'<h5 class="center-align">' + '__nombrePokemon__'+ '</h5>' + '</div>'

	$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
	//console.log(response);
	var pokemons = response.results;
	crearPokemons(pokemons, imagenes);
	})

	function crearPokemons(pokemons, imagenes) {
	var $contPokemones = $("#pokemons");
	var plantillaFinal = "";
	pokemons.forEach(function (pokemon, indice) {
		plantillaFinal += plantilla.replace("__nombrePokemon__", pokemon.name).replace("__imagen__", imagenes[indice].imagen);
	});
	$contPokemones.html(plantillaFinal);  
		
	}
});







