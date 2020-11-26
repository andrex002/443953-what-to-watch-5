  
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyListButton} from "./my-list-button";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

it(`click on MyListButton`, () => {
    const onMyListClick = jest.fn();
    const formSendPrevention = jest.fn();

    const wrapper = shallow(
        <MyListButton
          id={1}
          isFavorite={true}
          onMyListClick={onMyListClick}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
    );

    const myListButton = wrapper.find(`.movie-card__button`);
    myListButton.simulate(`click`, {preventDefault: formSendPrevention});
    expect(onMyListClick).toHaveBeenCalledTimes(1);
  });
  