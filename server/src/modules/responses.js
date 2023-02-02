const axios = require("axios");
const { Movies } = require("./movies/Movies");
const { API_KEY, API_URL } = require("../config/constants");

const getPopular = async (page, language) => {
  const result = await axios.get(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`
  );
  return new Movies(result.data);
};

const getDetails = (id, language) => {
  return axios.get(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`
  );
};

module.exports = {
  getPopular,
  getDetails,
};
