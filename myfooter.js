
console.log("footer is loaded");

function disp_changes(myurl){
    let newsdisp = document.getElementById('newsdisp');

    //Create a ajax get request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', myurl, true);
    //xhr.getResponseHeader('Content-type', 'application/json');
    xhr.onload = function () {
        if (this.status === 200) {

            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            let newshtml = "";
            console.log(json);
            articles.forEach(function (element) {
                news = '<div class="col-lg-4 col-md-6 col-sm-6 d-flex">' +
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

function UK(){
    url = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function US(){

    url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function Bollywood(){

    url = 'https://newsapi.org/v2/everything?domains=pinkvilla.com,filmibeat.com&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function Hollywood(){

    url = 'https://newsapi.org/v2/everything?domains=hollywoodlife.com,tmz.com&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function Celebrity(){

    url = 'https://newsapi.org/v2/everything?domains=people.com&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function Tele(){

    url = 'https://newsapi.org/v2/everything?domains=tellychakkar.com&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}
