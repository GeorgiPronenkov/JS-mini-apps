const inputElement = document.querySelector('#inputValue');
const buttonElement = document.getElementsByTagName('button');
const movieSearchable = document.querySelector('#movies-searchable');


//handle error
function handleError(error) {
    console.log('Error: ', error);
}

function movieSection(movies) {

     const section = document.createElement('section');
     section.classList = 'section';

     movies.map((movie) => { //loop from all movies
         if (movie.poster_path) {
             const img = document.createElement('img');
             img.src = IMAGE_URL + movie.poster_path;
             img.setAttribute('data-movie-id', movie.id);

             section.appendChild(img);
         }
     });

     return section;
}

function createMovieContainer(movies, title='') {

     const movieElement = document.createElement('div');
     movieElement.setAttribute('class', 'movie');

     const header = document.createElement('h2');
     header.innerHTML = title;

     const content = document.createElement('div');
     content.classList = 'content';

     const contentClose = `<p id="content-close" class="btn btn-danger">Close X</p>`;

     content.innerHTML = contentClose;

     const section = movieSection(movies);

     movieElement.appendChild(header);
     movieElement.appendChild(section);
     movieElement.appendChild(content);
     return movieElement;
}

function renderSearchMovies(data) {

    //data.results[]- array of every single movie
    movieSearchable.innerHTML = ''; //clear
    const movies = data.results;  //get the movies
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data:', data);
}

function renderMovies(data) {

    const movies = data.results;  //get the movies
    const movieBlock = createMovieContainer(movies, this.title);
    movieSearchable.appendChild(movieBlock);
}

buttonElement.onclick = function(event) {

     //prevent refresh page
     event.preventDefault();
     const value = inputElement.value;
     searchMovie(value);

    inputElement.value = ''; //clear input field
    console.log('value: ', value);
};

//video frame
function createIframe(video) {

    const iframe = document.createElement('iframe');
    iframe.src = `https://youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullscreen = true;

    return iframe;
}

function createVideoTemplate(data, content) {

    //display movie videos
    content.innerHTML = '<p id="content-close" class="btn btn-danger">Close X</p>';
    const videos = data.results;
    const length = videos.length > 4 ? 4 : videos.length;
    const iframeContainer = document.createElement('div');

    for (let i = 0; i < length; i ++) {
        const video = videos[i]; //single video
        const iframe = createIframe(video);
        iframeContainer.appendChild(iframe);
        content.appendChild(iframeContainer);
    } 
}

document.onclick = function(event) {

    const target = event.target; //where ever click

    //click on image events
    if (target.tagName.toLowerCase() === 'img') {
        const movieId = target.dataset.movieId; //get moviedId from json data
        const section = event.target.parentElement; //section
        const content = section.nextElementSibling; //content
        content.classList.add('content-display');

        const path = `/movie/${movieId}/videos`;
        const url = generateUrl(path);
        //fetch movie videos
        fetch(url)  //pass the const url
            .then((res) => res.json())
            .then((data) => createVideoTemplate(data, content))
            .catch((error) => {
                console.log('Error: ', error);
            });
    }

    if (target.id === 'content-close') {
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
}

searchMovie('Tron')

getUpcomingMovies();

getTopRatedMovies();

getPopularMovies();
