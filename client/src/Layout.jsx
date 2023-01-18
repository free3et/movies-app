import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Container from "@mui/material/Container";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[800],
          }}
        >
          <Outlet></Outlet>
        </Container>
      </main>
    </>
  );
};
