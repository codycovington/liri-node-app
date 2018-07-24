var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "6d5583e1515049b3b9c850ea696d22f4",
  secret: "1de97de6134f4f14a22eea9b58e43253"
});
 
spotify
    .search({ type: 'track', query: 'thriller', limit: 1 })
    .then(function(response) {
      

      var song = "Artist: " + JSON.stringify(response.tracks.items[0].artists[0].name) + "\n" +
      "Album name: " + JSON.stringify(response.tracks.items[0].name) + "\n" +
      "Spotify preview link: " + JSON.stringify(response.tracks.items[0].external_urls.spotify);
      console.log(song);
    });
