import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FilmScreen} from "./film-screen";
import {films, noop} from "../../test-data";
import {AuthorizationStatus} from "../../const";

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../my-list-button/my-list-button`, () => `MyListButton`);

describe(`Should FilmPage render correctly`, () => {
  it(`When user authorised`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmScreen
              currentFilm={films[0]}
              onFilmCardClick={noop}
              currentFilmId={1}
              authorizationStatus={AuthorizationStatus.AUTH}
              loadFilm={noop}
              films={films}
              isFilmByIdLoading={false}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When user not authorised`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmScreen
              currentFilm={films[0]}
              onFilmCardClick={noop}
              currentFilmId={1}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              loadFilm={noop}
              films={films}
              isFilmByIdLoading={false}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When page loading`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmScreen
              currentFilm={films[0]}
              onFilmCardClick={noop}
              currentFilmId={1}
              authorizationStatus={AuthorizationStatus.AUTH}
              loadFilm={noop}
              films={films}
              isFilmByIdLoading={true}
            />
          </BrowserRouter>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
