import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveCard from "./with-active-card";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

it(`Should active card`, () => {
  const wrapper = shallow(
      <MockComponentWrapped />);

  expect(wrapper.state().activeFilmCard).toEqual(``);
});
