import { useState, useCallback } from "react";
import { MAX_SELECTED_MOVIES } from "../../config/constants";

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  //const [id, setSingleMovieId] = useState(1)

  const selectMovie = useCallback(
    (movie) => {
      const lengh = selectedMovies.length;
      const isNewMovie = !selectedMovies.find(({ id }) => id === movie.id);

      if (isNewMovie && lengh <= MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies]);
      }
    },
    [selectedMovies]
  );

  const deleteMovie = useCallback(
    (movie) => {
      setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id));
    },
    [selectedMovies]
  );

  /*   const getDetails = useCallback(
    (movie) => {
      setSingleMovieId(+movie.id);

    },
    [id]
  ); */

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
    /* getDetails,
    id */
  };
};
