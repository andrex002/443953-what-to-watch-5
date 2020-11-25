import React from "react";
import renderer from "react-test-renderer";
import {ShowMoreButton} from "./show-more-button";
import {noop} from "../../test-data";

it(`Should ShowMoreButton render correctly`, () => {
  const tree = renderer
    .create(
      <ShowMoreButton
        onShowMoreBtnClick={noop}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});