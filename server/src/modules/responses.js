const axios = require("axios");
const { Movies } = require("./movies/Movies");
const { Genre } = require("./movies/Genre");
const { Trailers } = require("./movies/Trailers");
const { Person } = require("./movies/Person");

const { API_KEY, API_URL } = require("../config/constants");
const { Casts } = require("./movies/Casts");

/* const getPopular = async (page, language) => {
  const result = await axios.get(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`
  );
  return new Movies(result.data);
}; */

const getDetails = (id, language) => {
  return axios.get(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`
  );
};

const discoverMovies = async (filter, language) => {
  const filterMovies = await axios.get(
    `${API_URL}/discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genre}`
  );

  return new Movies(filterMovies.data);
};

const getGenres = async (language) => {
  const filterGenres = await axios.get(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=${language}`
  );

  return filterGenres.data.genres.map((genre) => new Genre(genre));
};

const searchMovie = async (queryStr, language) => {
  const searchMovies = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&language=${language}&page=${queryStr.page}&include_adult=${queryStr.includeAdult}&query=${queryStr.query}}`
  );

  return new Movies(searchMovies.data);
};

const getTrailer = async (id, language) => {
  const searchTrailer = await axios.get(
    `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=${language}`
  );

  return new Trailers(searchTrailer.data);
};

const getPersonInfo = async (id, language) => {
  const searchPerson = await axios.get(
    `${API_URL}/person/${id}?api_key=${API_KEY}&language=${language}&append_to_response=credits`
  );

  //console.log(searchPerson.data);

  return new Person(searchPerson.data);
};

module.exports = {
  //getPopular,
  getDetails,
  discoverMovies,
  getGenres,
  searchMovie,
  getTrailer,
  getPersonInfo,
};
