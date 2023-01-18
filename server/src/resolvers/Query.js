const { getPopular } = require("../modules/responses");

async function movies(parent, args) {
  const data = await getPopular(args.page);
  return data;
}

module.exports = {
  movies,
};
