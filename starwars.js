// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {

  	let $Lista_films = $("#movies").find("ul");
  	$Lista_films.find("li").remove();
 
   for( let i=0 ; i < resposta.results.length; i++ ){

   		let eps = resposta.results[i].episode_id;

   		let titulo = "Episode " + eps;

   		let elemento = '<li data-episode-url="http://swapi.co/api/films/'+ eps +'/">'+ titulo +'</li>';
        $Lista_films.append(elemento);
   }
    //console.dir(resposta);  // veja a resposta no terminal
    //alert('Post curtido!');
	
  }
});

$("#movies ul").on('click', 'li', function(e){
	let elem = e.target;
	let url = elem.dataset.episodeUrl;

$.ajax({
  url: url,
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {

	  
	console.log(resposta);

	}
});
