import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilmCard} from "./film-card";
import {films, noop} from "../../test-data";

const {image, title, srcVideo} = films[0];

configure({adapter: new Adapter()});

describe(`FilmCard callback should be called`, () => {
  it(`On click`, () => {
    const onFilmCardClick = jest.fn();

    const wrapper = shallow(
        <FilmCard
          image={image}
          title={title}
          handleHoverFilmCard={noop}
          id={1}
          onFilmCardClick={onFilmCardClick}
          srcVideo={srcVideo}
          isActive={true}
        />
    );

    const filmCard = wrapper.find(`.catalog__movies-card`);
    filmCard.simulate(`click`);
    expect(onFilmCardClick).toHaveBeenCalledTimes(1);
  });

  it(`On mouse enter`, () => {
    const onMouseEnter = jest.fn();

    const wrapper = shallow(
        <FilmCard
          image={image}
          title={title}
          handleHoverFilmCard={onMouseEnter}
          id={1}
          onFilmCardClick={noop}
          srcVideo={srcVideo}
          isActive={true}
        />
    );

    const filmCard = wrapper.find(`.catalog__movies-card`);
    filmCard.simulate(`mouseenter`);
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`On mouse leave`, () => {
    const onMouseLeave = jest.fn();

    const wrapper = shallow(
        <FilmCard
          image={image}
          title={title}
          handleHoverFilmCard={onMouseLeave}
          id={1}
          onFilmCardClick={noop}
          srcVideo={srcVideo}
          isActive={true}
        />
    );

    const filmCard = wrapper.find(`.catalog__movies-card`);
    filmCard.simulate(`mouseleave`);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
