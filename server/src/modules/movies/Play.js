const { IMAGE_BASE_PATH, IMG_FULL_SIZE } = require("../../config/constants");

class Play {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.voteAverage = movie.vote_average;
    this.runtime = movie.runtime;
    this.releaseDate = movie.release_date;
    this.posterPath = `${IMG_FULL_SIZE}${movie.poster_path}`;
    this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
  }
}

module.exports = {
  Play,
};
