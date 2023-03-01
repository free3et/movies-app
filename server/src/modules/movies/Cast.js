const { IMAGE_BASE_PATH } = require("../../config/constants");

class Cast {
  constructor(cast) {
    this.id = cast.id;
    this.title = cast.title;
    this.posterPath = cast.poster_path;
    this.character = cast.character;
    this.releaseDate = cast.release_date;
    this.voteAverage = cast.vote_average;
    this.popularity = cast.popularity;
  }
}

module.exports = {
  Cast,
};
