import React from "react";
import renderer from "react-test-renderer";
import FilmPageOverview from "./film-page-overview";
import {films} from "../../test-data";

const {director, actors, description, rating} = films[0];

it(`Should FilmPageOverview render correctly`, () => {
  const tree = renderer.create(
      <FilmPageOverview
        rating={rating}
        description={description}
        director={director}
        actors={actors}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
