import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";
import {BrowserRouter} from "react-router-dom";
import {films, noop} from  "../../test-data";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../genres-list/genres-list`, () => `GenresList`);
jest.mock(`../my-list-button/my-list-button`, () => `MyListButton`);

it(`Should MainScreen render correctly`, () => {
  const tree = renderer.create(
    <BrowserRouter>
      <MainScreen
        promoFilm={films[0]}
        filteredFilms={films}
        numberFilmsShown={8}
        onFilmCardClick={noop}
      />
    </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
