var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=dog";

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    var url = api + apiKey + query;
    loadJSON(url, gotData);

}

function gotData(giphy) {
     createImg(giphy.data[0].images.original.url);
  
}