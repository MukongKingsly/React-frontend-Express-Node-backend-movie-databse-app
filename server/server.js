
const express = require('express');
const app = express();
const moviesComingSoon = require('./movie-json/json/movies-coming-soon.json');
const moviesInTheatres = require('./movie-json/json/movies-in-theaters.json');
const moviesTopRated = require('./movie-json/json/top-rated-movies-01.json');
app.get("/top-rated-movies", (req, res) => {
  res.json({
    movies: moviesTopRated
  });
}
);

app.get("/movies-in-theatres", (req, res) => {
    res.json({
      movies: moviesInTheatres
    });
  }
  );

  app.get("/movies-coming-soon", (req, res) => {
    res.json({
      movies: moviesComingSoon
    });
  }
  );

app.listen(5000, () => {
    console.log("Server started on port 5000");
    });

    //npm run dev to start server