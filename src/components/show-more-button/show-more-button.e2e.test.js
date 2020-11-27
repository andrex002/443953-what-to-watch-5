import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMoreButton} from "./show-more-button";

configure({adapter: new Adapter()});

it(`ShowMoreButton callback should be called on button click`, () => {
  const onShowMoreButtonClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton
        onShowMoreBtnClick={onShowMoreButtonClick}
      />
  );

  const showMoreBtn = wrapper.find(`.catalog__button`);
  showMoreBtn.simulate(`click`);
  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
