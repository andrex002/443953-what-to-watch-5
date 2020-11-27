import React from "react";
import renderer from "react-test-renderer";
import FilmCardsList from "./film-cards-list";
import {films, noop} from "../../test-data";
import {BrowserRouter} from "react-router-dom";


it(`Should FilmCardsList render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <FilmCardsList
          films={films}
          activeFilmCard={1}
          onFilmCardClick={noop}
          handleHoverFilmCard={noop}
        />
      </BrowserRouter>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
