
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

	var plantilla = "<div class='col s4 link-modal' data-link= '__url__'>"+'<img src="__imagen__">' + 
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
		plantillaFinal += plantilla.replace("__nombrePokemon__", pokemon.name).replace("__imagen__", imagenes[indice].imagen)
		.replace("__url__", "http://pokeapi.co/api/v2/pokemon-species/"+(indice+1)+"/");

	});
	$contPokemones.html(plantillaFinal);  
	var div= $(".link-modal");
	div.click(obtenerDatos);
	}

	

	function obtenerDatos(){
		console.log(this);
		var rutaImagen = $(this).find("img").attr('src');
		console.log(rutaImagen);
		var nombrePokes = $(this).find("h5").text();
		console.log(nombrePokes);
		console.log(this.dataset.link);
		$.getJSON(this.dataset.link, function(response){
			console.log(response);
			var habitat= response.habitat.name;
			console.log(habitat);
			var color= response.color.name;
			console.log(color);
			var shape= response.shape.name;
			console.log(shape);
			var genera = response.genera[0].genus;
			console.log(genera);

			imprimirDatos({
				src: rutaImagen,
				nombre: nombrePokes,
				habitat: habitat,
				color: color,
				shape: shape,
				genera: genera
			})

		})
	}

	function imprimirDatos(objetoDatos){
	
	console.log(objetoDatos);
	var nombre = $("#nombre");
	var imagen= $("#imageModal");
	var habitat = $("#habitat");
	var color = $("#color");
	var shape = $("#shape");
	var genera = $("#genera");

	nombre.text(objetoDatos.nombre);
	imagen.attr("src",objetoDatos.src);
	habitat.text(objetoDatos.habitat);
	color.text(objetoDatos.color);
	shape.text(objetoDatos.shape);
	genera.text(objetoDatos.genera);

	}

	$('.modal').modal();
});







