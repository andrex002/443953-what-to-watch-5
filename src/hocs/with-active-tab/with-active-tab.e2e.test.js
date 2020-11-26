import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";
import {FilmTabs} from "../../const";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should activeTab equal OVERVIEW`, () => {
  const wrapper = shallow(
      <MockComponentWrapped />);

  expect(wrapper.state().activeTab).toEqual(FilmTabs.OVERVIEW);
});
