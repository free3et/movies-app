export const getMovieRuntime = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  return `${hours}h ${minutes}m`;
};
