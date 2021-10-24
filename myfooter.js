
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

function UK(){
    url = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function US(){

    url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}


function Australia(){
    url = 'https://newsapi.org/v2/top-headlines?country=au&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function Korea(){
    url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function South_Africa(){
    url = 'https://newsapi.org/v2/top-headlines?country=za&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function C_India(){
    url = 'https://newsapi.org/v2/top-headlines?country=in&category=health&q=covid&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function C_World(){
    url = 'https://newsapi.org/v2/top-headlines?category=health&q=covid&apiKey=455a87c940c341c08bdc416a2ec50bc0';
    disp_changes(url);
}

function techCrunch(){
    url = 'https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=455a87c940c341c08bdc416a2ec50bc0'
    disp_changes(url);
}

function NDTV(){
    url = 'https://newsapi.org/v2/everything?domains=ndtv.com&apiKey=455a87c940c341c08bdc416a2ec50bc0'
    disp_changes(url);
}

function DB(){
    url = 'https://newsapi.org/v2/everything?domains=bhaskar.com&apiKey=455a87c940c341c08bdc416a2ec50bc0'
    disp_changes(url);
}

function MahaTimes(){
    url = 'https://newsapi.org/v2/everything?domains=maharashtratimes.com&apiKey=455a87c940c341c08bdc416a2ec50bc0'
    disp_changes(url);
}

function Stock_Market(){
    url = 'https://newsapi.org/v2/everything?domains=marketwatch.com&apiKey=455a87c940c341c08bdc416a2ec50bc0'
    disp_changes(url);
}

function BT(){
    url = 'https://newsapi.org/v2/everything?domains=businesstoday.in&apiKey=455a87c940c341c08bdc416a2ec50bc0'
    disp_changes(url);
}

function Crypto_news(){
    url = 'https://newsapi.org/v2/everything?domains=coindesk.com&apiKey=455a87c940c341c08bdc416a2ec50bc0'
    disp_changes(url);
}
