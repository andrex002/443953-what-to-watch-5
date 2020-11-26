import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list";
import {films} from "../../test-data";

configure({adapter: new Adapter()});

it(`GenresList callback should be called on genre click`, () => {
  const onGenreClick = jest.fn();
  const formSendPrevention = jest.fn();

  const wrapper = shallow(
      <GenresList
        films={films}
        activeGenre={`Comedy`}
        onGenreClick={onGenreClick}
      />
  );

  const genreLink = wrapper.find(`.catalog__genres-link`).at(0);

  genreLink.simulate(`click`, {preventDefault: formSendPrevention});
  
  expect(onGenreClick).toHaveBeenCalledTimes(1);
});
