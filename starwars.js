// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

$(document).ready(() => {
	let episode = localStorage.getItem('episode');
	if(episode)
		setIntro(episode);
});

const setIntro = text => {
	localStorage.setItem('episode', text);
	$('.reading-animation').html(text);
}


$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {

  	let $Lista_films = $("#movies").find("ul");
  	$Lista_films.find("li").remove();
 
   for( let i=0 ; i < resposta.results.length; i++ ){

   		let eps = resposta.results[i].episode_id;

   		let titulo = "Episode " + eps;



   		let elemento = '<li data-episode-url="' + resposta.results[i].url + '">'+ titulo +'</li>';

        $Lista_films.append(elemento);
   }
    //console.dir(resposta);  // veja a resposta no terminal
    //alert('Post curtido!');
	
  }
});

$("#movies ul").on('click', 'li', function(e){
	 let elem = e.target;
	 let _url = elem.dataset.episodeUrl;
	 console.dir(_url); 


		$.ajax({
		  url: _url ,
		  method: 'GET',      // opcional: 'GET' é o valor padrão
		  success: function(resposta) {

		  			console.dir(_url); 
		  			console.dir(resposta); 
			 		let episode = resposta.episode_id;
			 		console.dir(episode); 

					let text = 'Episode ' + episode + '\n' +
							 	resposta.title + '\n\n' +
					 		    resposta.opening_crawl;

					setIntro(text);

			}
		});
});
