console.log("successfully open");

let apikey = "455a87c940c341c08bdc416a2ec50bc0";

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
            '<div class="col-lg-4 d-flex">' +
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
                element["publishedAt"]  +
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
