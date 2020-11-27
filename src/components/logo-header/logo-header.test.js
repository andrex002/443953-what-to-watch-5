import React from "react";
import renderer from "react-test-renderer";
import LogoHeader from "./logo-header";
import {BrowserRouter} from "react-router-dom";

it(`Should LogoHeader render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <LogoHeader />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
