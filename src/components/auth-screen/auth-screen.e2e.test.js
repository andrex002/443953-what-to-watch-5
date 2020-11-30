import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthScreen from "./auth-screen";
import {noop} from "../../test-data";
import {BrowserRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

it(`AuthScreen submit`, () => {
  const onSignInSubmit = jest.fn();
  const formSendPrevention = jest.fn();

  const wrapper = mount(
      <BrowserRouter>
        <AuthScreen
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          isValidEmail={true}
          isValidPassword={true}
          renderEmailInput={noop}
          renderPasswordInput={noop}
          onFormSubmit={onSignInSubmit}
        />
      </BrowserRouter>
  );

  const form = wrapper.find(`.sign-in__form`);
  form.simulate(`submit`, {preventDefault: formSendPrevention});
  expect(onSignInSubmit).toHaveBeenCalledTimes(1);
});
