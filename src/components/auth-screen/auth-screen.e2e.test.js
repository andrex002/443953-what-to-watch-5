import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AuthScreen} from "./auth-screen";
import {BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});

it(`AuthScreen submit`, () => {
  const onSignInSubmit = jest.fn();
  const formSendPrevention = jest.fn();

  const wrapper = mount(
    <BrowserRouter>
      <AuthScreen
        onSubmit={onSignInSubmit}
        authorizationStatus={`NO_AUTH`}
      />
    </BrowserRouter>
  );

  wrapper.find(`input[name="user-email"]`).instance().value = `test@test.com`;
  wrapper.find(`input[name="user-password"]`).instance().value = `123`;
  const form = wrapper.find(`.sign-in__form`);
  form.simulate(`submit`, {preventDefault: formSendPrevention});
  expect(onSignInSubmit).toHaveBeenCalledTimes(1);
});
