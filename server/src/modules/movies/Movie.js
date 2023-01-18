const { IMAGE_BASE_PATH } = require("../../config/urls");
const { format } = require("date-fns");

class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.releaseDate = movie.release_date;
    this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
    this.adult = movie.adult;
    this.overview = movie.overview;
    this.originalLanguage = movie.original_language;
    this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
    this.popularity = movie.popularity;
    this.voteCount = movie.vote_count;
    this.video = movie.video;
    this.voteAverage = movie.vote_average;
  }
  releaseDate(params) {
    return params.format
      ? format(new Date(this.movie.release_date), params.format)
      : this.movie.release_date;
  }
}

module.exports = {
  Movie,
};
