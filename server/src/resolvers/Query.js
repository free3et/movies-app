const {
  discoverMovies,
  getDetails,
  getGenres,
  searchMovie,
  getTrailer,
  getPersonInfo,
  getNowPlaying,
} = require("../modules/responses");
const { Movie } = require("../modules/movies/Movie");

async function movies(parent, args, { locale }) {
  const data = await discoverMovies(args.filter, locale);
  return data;
}

async function moviesByIds(parent, { ids }, { locale }) {
  const requests = ids.map((id) => getDetails(id, locale));
  const data = await Promise.all(requests);

  const movies = data.map(({ data }) => new Movie(data));
  return movies;
}

async function getSingleMovie(parent, { id }, { locale }) {
  const singleMovie = await getDetails(id, locale);
  return singleMovie.data;
}

async function genres(_, {}, { locale }) {
  return await getGenres(locale);
}

async function search(parent, args, { locale }) {
  const data = await searchMovie(args.queryStr, locale);
  return data;
}

async function getTrailers(parent, { id }, { locale }) {
  const trailer = await getTrailer(id, locale);
  return trailer;
}

async function getPerson(parent, { id }, { locale }) {
  const person = await getPersonInfo(id, locale);

  return person;
}

async function getNowPlayingMovie(_, {}, { locale }) {
  const play = await getNowPlaying(locale);
  return play;
}

module.exports = {
  movies,
  moviesByIds,
  genres,
  search,
  getSingleMovie,
  getTrailers,
  getPerson,
  getNowPlayingMovie,
};
