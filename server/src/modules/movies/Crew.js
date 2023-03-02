const { IMAGE_BASE_PATH } = require("../../config/constants");

class Crew {
  constructor(crew) {
    this.id = crew.id;
    this.title = crew.title;
    this.posterPath = crew.poster_path;
    this.releaseDate = crew.release_date;
    this.voteAverage = crew.vote_average;
    this.popularity = crew.popularity;
    this.department = crew.department;
    this.job = crew.job;
  }
}

module.exports = {
  Crew,
};
