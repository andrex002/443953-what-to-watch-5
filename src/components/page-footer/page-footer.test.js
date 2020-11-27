import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import PageFooter from "./page-footer";

it(`Should PageFooter render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <PageFooter />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
