$(document).ready(function () {
    const key = 'AIzaSyCPuutF9ms4N3jb6GC5szlVTppDyGhoH-8';
    const playListId = 'PL-pLR7Cgs8-4t9JrflcDKx1-zo2cidVzK';
    const URL = 'https://www.googleapis.com/youtube/v3/playlistItems';  

    const options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playListId: playListId
    }

    loadVideos();


function loadVideos() {
    $.getJSON(URL, options, function (data) {
       console.log(data);
       const id = data.items[0].snippet.resourceId.videoId;
       mainVideos(id);
    });
}

    function mainVideos(id) {
        $('#video').html(`
             <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/${id}" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `);
    }
});