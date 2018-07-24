require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
var input = process.argv[3];

if (command == "my-tweets") {
    console.log("Hello");

      var params = {screen_name: 'CodeBase14'};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          for (var i = 0; i < 20; i++) {
          console.log("Tweet: " + tweets[i].text);
          console.log("Created on: " + tweets[i].created_at + "\n");
          }
      }
      });

} else if (command == "spotify-this-song"){
    spotifyFunc(input);

} else if (command == "movie-this"){
    request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    console.log(JSON.parse(body).Title + "\n" +
    "Year: " + JSON.parse(body).Year + "\n" +
    "The movie's rating is: " + JSON.parse(body).imdbRating + "\n" +
    "Country: " + JSON.parse(body).Country + "\n" +
    "Language: " + JSON.parse(body).Language + "\n" +
    "Plot: " + JSON.parse(body).Plot + "\n" +
    "Actors: " + JSON.parse(body).Actors);
  }
});
    
} else if (command == "do-what-it-says"){
    fs.readFile('random.txt', "utf8",function(err, data) {
        console.log(data);
        var dataArr = data.split(",");
        spotifyFunc(dataArr[1]);
      });

} else {
    console.log("nothing returned, please try a different query");
}

function spotifyFunc(input) {
    spotify
    .search({ type: 'track', query: input, limit: 1 })
    .then(function(response) {
        
      var song = "Artist: " + JSON.stringify(response.tracks.items[0].artists[0].name) + "\n" +
      "Song name: " + JSON.stringify(response.tracks.items[0].name) + "\n" +
      "Album name: " + JSON.stringify(response.tracks.items[0].album.name) + "\n" +
      "Preview link: " + JSON.stringify(response.tracks.items[0].external_urls.spotify);
      console.log(song);
    });

}