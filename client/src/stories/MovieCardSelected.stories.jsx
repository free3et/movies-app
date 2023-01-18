import React from "react";
import { MovieCardSelected } from "../components/MovieCardSelected/MovieCardSelected";
import { movies } from "./stub";

export default {
  title: "Cards/Movie card selected",
  component: MovieCardSelected,
  argTypes: {
    test: "test",
  },
};

const Template = (args) => <MovieCardSelected {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  movie: movies[0],
};
