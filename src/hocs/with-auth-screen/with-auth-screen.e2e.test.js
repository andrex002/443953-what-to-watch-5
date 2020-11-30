import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withAuthScreen} from "./with-auth-screen";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import {defaultState} from "../../test-data";

configure({adapter: new Adapter()});
const mockStore = configureMockStore()(defaultState);

const MockComponent = () => <div />;
const MockComponentWrapped = withAuthScreen(MockComponent);

describe(`check withAuthScreen`, () => {
  it(`isValidEmail in withAuthScreen`, () => {
    const wrapper = mount(
        <Provider store={mockStore}>
          <MockComponentWrapped />
        </Provider>
    );
    expect(wrapper.find(`WithAuthScreen`).state().isValidEmail).toEqual(true);
  });

  it(`isValidPassword in withAuthScreen`, () => {
    const wrapper = mount(
        <Provider store={mockStore}>
          <MockComponentWrapped />
        </Provider>
    );

    expect(wrapper.find(`WithAuthScreen`).state().isValidPassword).toEqual(true);
  });
});
