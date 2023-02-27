const { Cast } = require("./Cast");

class Casts {
  constructor(casts) {
    this.cast = casts.cast.map((item) => new Cast(item));
  }
}

module.exports = {
  Casts,
};
