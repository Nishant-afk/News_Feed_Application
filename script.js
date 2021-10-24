let apikey = "455a87c940c341c08bdc416a2ec50bc0";


function topnews() {
    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');

    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);
    //xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }

    xhr.send()

}

function searchresult() {
    let search_val = document.getElementById("search_text").value;
    console.log(search_val);

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    url1 = 'https://newsapi.org/v2/everything?q=';
    text1 = '&sortBy=relevancy&apiKey=';
    final_url = url1.concat(search_val, text1, apikey);

    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', final_url, true);

    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}


function sports() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);

    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}

function virus() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/everything?q=Covid&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);

    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}

function politics() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/everything?q=politics&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);

    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}

function entertainment() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);



    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}

function science() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);


    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}

function business() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);


    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}

function world() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/everything?q=international&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);

    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}
function latest() {

    console.log("successfully open");

    //Grab news container
    let newsdisp = document.getElementById('newsdisp');
    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/everything?q=new&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);

    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news =
                    '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
                    '<div class="card flex-fill">' +
                    '<img class="card-img-top img-fluid" src="' +
                    element["urlToImage"] +
                    '" alt="Card image cap">' +
                    '<div class ="card-body flex-fill">' +
                    '<h4 class ="card-title"><a href=" ' +
                    element["url"] +
                    '" target="_blank" rel="noopener noreferrer">' +
                    element["title"] +
                    '</a></h4>' +
                    '<p class ="card-text"> ' +
                    element["description"] +
                    '</p> ' +
                    '<div class="card-footer text-muted"> ' +
                    element["publishedAt"] +
                    '</div> ' +
                    '</div>' +
                    '</div> ' +
                    '</div>';
                //console.log(articles[news]);

                newshtml += news;
            });
            newsdisp.innerHTML = newshtml;
        }
        else {
            console.log("Some error occured");
        }
    }
    xhr.send();
}

function opening(){
    
}

window.onload = function () {
    topnews();
}

