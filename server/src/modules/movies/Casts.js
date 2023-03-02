const { Cast } = require("./Cast");
const { Crew } = require("./Crew");

class Casts {
  constructor(casts) {
    this.cast = casts.cast.map((item) => new Cast(item));
    this.crew = casts.crew.map((el) => new Crew(el));
  }
}

module.exports = {
  Casts,
};
