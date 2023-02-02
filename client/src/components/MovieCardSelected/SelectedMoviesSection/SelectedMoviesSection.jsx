import { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MovieCardSelected } from "../MovieCardSelected";
import { SelectedMoviesForm } from "../SelectedMoviesForm/SelectedMoviesForm";
import { ModalConfirm } from "../../Modal/Modal";
import { AppContext } from "../../../context/index";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 140px)",
  position: "sticky",
  top: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));

const MoviesList = styled(Stack)(({ theme }) => ({
  overflow: "scroll",
  height: "100%",
}));

export const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
  const [listName, setListName] = useState("");
  const [url, setUrl] = useState("");

  const { state } = useContext(AppContext);

  const onSubmit = ({ listName }) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${
      window.location.host
    }/recomendations?title=${listName}&locale=${
      state.locale
    }&ids=${ids.join()}`;
    setUrl(link);
    setListName(listName);
  };

  const onCloseModal = () => {
    setUrl("");
  };

  return (
    <SelectedMovies>
      <MoviesList spacing={2}>
        {selectedMovies.map((movie) => (
          <MovieCardSelected
            key={movie.id}
            movie={movie}
            onCardDelete={deleteMovie}
          />
        ))}
      </MoviesList>
      <Box pt={2}>
        <SelectedMoviesForm onSubmit={onSubmit} />
      </Box>
      <ModalConfirm
        open={!!url}
        url={url}
        title={listName}
        onClose={onCloseModal}
      />
    </SelectedMovies>
  );
};
