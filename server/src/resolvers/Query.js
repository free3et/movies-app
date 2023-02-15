const {
  discoverMovies,
  getDetails,
  getGenres,
  searchMovie,
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

async function genres(_, {}, { locale }) {
  return await getGenres(locale);
}

async function search(parent, args, { locale }) {
  const data = await searchMovie(args.queryStr, locale);
  return data;
}

module.exports = {
  movies,
  moviesByIds,
  genres,
  search,
};
