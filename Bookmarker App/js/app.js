//submit to local storage(listen for form submit)
document.getElementById('myForm')
        .addEventListener('submit', saveBookmark);

//Fetch bookmarks
function fetchBookmarks() {
    //get bookmarks from localstorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //get output id
    const bookmarksResults = document.getElementById('bookmarksResults');

    //build output
    bookmarksResults.innerHTML = '';

    //loop through the bookmarks in local storage and output them inside a div:
    for (let i = 0; i < bookmarks.length; i ++) {
        const name = bookmarks[i].name;
        const url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">' +
                                      '<h3>'+name+
                                      ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a>' +
                                      '</h3>'+
                                      '</div>';
    }
}

//save Bookmark
function saveBookmark(e) {
    //get form values
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    //create object for submit in local storage
    const bookmark = {
        name: siteName,
        url: siteUrl
    };

    //check if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
        //initialize array
        const bookmarks = [];
        bookmarks.push(bookmark);
        //SET to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //GET bookmarks from localstorage
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //add bookmark to array
        bookmarks.push(bookmark);
        //re-set back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    //clear form after submitted
    document.getElementById('myForm')
            .reset();

    //re-fetch bookmarks
    fetchBookmarks();

    //prevent from submitted
    e.preventDefault(); 
}

//delete Bookmark
function deleteBookmark(url) {
    //get bookmarks from local storage:
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url) {
            //remove from array
            bookmarks.splice(i, 1);
        }
    }

    //reset local storage after delete
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //clear form
    document.getElementById('myForm').reset();

    //re-fetch bookmarks
    fetchBookmarks();
}

//validate form. Check if sitename and URL are valid
function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert('Please fill in the form!');
        return false;
    }

    //validate url
    const expression = /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?/gi;
    const regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('please use a valid URL!');
        return false;
    }

    //if passes:
    return true;
}
