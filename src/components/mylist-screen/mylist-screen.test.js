import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {MyListScreen} from "./mylist-screen";
import {films, noop} from  "../../test-data";

jest.mock(`../user-block/user-block`, () => `UserBlock`);

it(`Should MyListScreen render correctly`, () => {
  const tree = renderer.create(
    <BrowserRouter>
      <MyListScreen
        favoriteFilms={films}
        onFilmCardClick={noop}
        getFavoriteFilms={noop}
      />
    </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

