console.log("successfully open");

let apikey = "455a87c940c341c08bdc416a2ec50bc0";

//Grab news container
let newsdisp = document.getElementById('newsdisp');

//Create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=455a87c940c341c08bdc416a2ec50bc0', true);
//xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if(this.status === 200){

        let json = JSON.parse(this.responseText);
        console.log(json);
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send()
/*
let news = '
<div class= "thumbnail"; style="border: none; background: white; "> \
    <div div class="col-sm-6 col-md-6 col-xs-12 image-container" > \
        <img src="images/online_learning.jpg" style="height:200px; margin-left:-15px;" /> \
        <div class="col-sm-6 col-md-6 col-xs-12"> \
            <h3></h3> \
            <p style="font-size:10px; color:#03225C;"> \
            </p> \
        </div> \
    </div> \
</div>';
*/