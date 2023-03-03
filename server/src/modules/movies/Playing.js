const { Play } = require("./Play");

class Playing {
  constructor(movies) {
    this.page = movies.page;
    this.totalResults = movies.total_results;
    this.totalPages = movies.total_pages;
    this.results = movies.results.map((movie) => new Play(movie));
  }
}

module.exports = {
  Playing,
};
