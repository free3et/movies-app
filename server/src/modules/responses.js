const axios = require("axios");
const { Movies } = require("./movies/Movies");
const { API_KEY, API_URL } = require("../config/urls");

const getPopular = async (page) => {
  const result = await axios.get(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return new Movies(result.data);
};

module.exports = {
  getPopular,
};
