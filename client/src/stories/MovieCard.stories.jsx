import React from "react";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { movies } from "./stub";
export default {
  title: "Cards/Movie card",
  component: MovieCard,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MovieCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  movie: movies[0],
};
