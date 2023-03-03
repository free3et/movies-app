const { IMG_FULL_SIZE } = require("../../config/constants");

class Play {
  constructor(movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.posterPath = `${IMG_FULL_SIZE}${movie.poster_path}`;
  }
}

module.exports = {
  Play,
};
