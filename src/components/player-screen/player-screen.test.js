import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {PlayerScreen} from "./player-screen";
import {films, noop} from "../../test-data";

describe(`Should PlayerScreen render correctly`, () => {
  it(`On play`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <PlayerScreen
            films={films}
            duration={100}
            progress={50}
            promoFilm={films[0]}
            currentFilmId={1}
            isPlaying={true}
            onPlayBtnClick={noop}
            onFullscreenClick={noop}
            renderPlayer={noop}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`On pause`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <PlayerScreen
            films={films}
            duration={100}
            progress={50}
            promoFilm={films[0]}
            currentFilmId={1}
            isPlaying={false}
            onPlayBtnClick={noop}
            onFullscreenClick={noop}
            renderPlayer={noop}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
