import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {films, noop} from "../../test-data";

it(`Should GenresList render correctly`, () => {
  const tree = renderer.create(
      <GenresList
        films={films}
        activeGenre={`Comedy`}
        onGenreClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
