LIRI (Language Interpretation and Recognition Interface). A simple NODE app version of SIRI with designated command inputs.
1. Retrieve tweets from a Twitter timeline <process.argv[2] = my-tweets>
2. Grab Spotify track info for a given song <process.argv[2] = spotify-that-song> <process.argv[3] = <song title>>
3. Get movie information from OMDB <process.argv[2] = movie-that> <process.argv[3] = <movie title>>
4. Read commands from text files. <process.argv[2] = do-what-it-says>
  
  APIs 
  1. Twitter API
  2. Spotify API
  3. OMDB API

NPM Packages Required:
1. Twitter
2. node-spotify-api
3. request
