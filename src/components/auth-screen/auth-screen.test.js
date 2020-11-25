import React from "react";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";
import {noop} from "../../test-data";
import {BrowserRouter} from "react-router-dom";

it(`Should AuthScreen render correctly`, () => {
  const tree = renderer.create(
    <BrowserRouter>
      <AuthScreen
        onSubmit={noop}
        authorizationStatus={`NO_AUTH`}
      />
    </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
