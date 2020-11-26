import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlayerScreen} from "./player-screen";
import {films, noop} from "../../test-data";
import {BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});

describe(`PlayerScreen callback should be called on`, () => {
  it(`Play button click`, () => {
    const onPlayClick = jest.fn();

    const wrapper = mount(
      <BrowserRouter>
        <PlayerScreen
          duration={90}
          progress={50}
          onPlayBtnClick={onPlayClick}
          onFullscreenClick={noop}
          currentFilmId={1}
          films={films}
          promoFilm={films[0]}
          isPlaying={true}
          renderPlayer={noop}
        />
      </BrowserRouter>
    );

    const playButton = wrapper.find(`.player__play`);
    
    playButton.simulate(`click`);
    expect(onPlayClick).toHaveBeenCalledTimes(1);
  });

  it(`FullScreen button click`, () => {
    const onFullscreenClick = jest.fn();

    const wrapper = mount(
      <BrowserRouter>
        <PlayerScreen
          renderPlayer={noop}
          duration={90}
          progress={50}
          onPlayBtnClick={noop}
          onFullscreenClick={onFullscreenClick}
          currentFilmId={1}
          films={films}
          promoFilm={films[0]}
          isPlaying={true}
        />
      </BrowserRouter>
    );

    const fullscreenButton = wrapper.find(`.player__full-screen`);
    fullscreenButton.simulate(`click`);
    expect(onFullscreenClick).toHaveBeenCalledTimes(1);
  });
});
