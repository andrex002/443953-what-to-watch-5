import React from "react";
import renderer from "react-test-renderer";
import FilmPageDetails from "./film-page-details";
import {films} from "../../test-data";

const {director, actors, duration, genre, year} = films[0];

it(`Should FilmPageDetails render correctly`, () => {
  const tree = renderer.create(
      <FilmPageDetails
        director={director}
        duration={duration}
        actors={actors}
        genre={genre}
        year={year}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
