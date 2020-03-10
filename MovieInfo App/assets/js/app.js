//initial values
const API_KEY = '62e13ad8a607aa7d20bfe089d1c31390';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=62e13ad8a607aa7d20bfe089d1c31390';

const inputElement = document.querySelector('#inputValue');
const buttonElement = document.querySelector('#search');
const movieSearchable = document.querySelector('#movies-searchable');

function movieSection(movies) {
     return movies.map((movie) => { //loop from all movies
         return `
            <img src=${IMAGE_URL + movie.poster_path} data-movie-id="${movie.id}" alt="movie"/>
         `;
     })
}

function createMovieContainer(movies) {

     const movieElement = document.createElement('div');
     movieElement.setAttribute('class', 'movie');

     const movieTemplate = `
           <section class="section">
             ${ movieSection(movies) }
          </section>
             <div class="content">
                <p id="content-close">X</p>
             </div>
     `;

     movieElement.innerHTML = movieTemplate;
     return movieElement;
}

buttonElement.onclick = function(event) {

     //prevent refresh page
     event.preventDefault();
     const value = inputElement.value;

     const newUrl = url + '&query=' + value;

     //built-in js function-request the data and get it into the app
    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            //data.results[]- array of every single movie
             const movies = data.results;
             const movieBlock = createMovieContainer(movies);
             movieSearchable.appendChild(movieBlock);
            console.log('Data:' , data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
            console.log('value: ', value);

};

