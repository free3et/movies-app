const { Trailer } = require("./Trailer");

class Trailers {
  constructor(trailers) {
    this.id = trailers.id;
    this.results = trailers.results.map((trailer) => new Trailer(trailer));
  }
}

module.exports = {
  Trailers,
};
