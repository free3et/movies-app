class Person {
  constructor(person) {
    this.name = person.name;
    this.type = person.type;
    this.biography = person.biography;
    this.birthday = person.birthday;
    this.deathday = person.deathday;
    this.gender = person.gender;
    this.homepage = person.homepage;
    this.name = person.name;
    this.placeOfBirth = person.place_of_birth;
    this.profilePath = person.profile_path;
  }
}

module.exports = {
  Person,
};
