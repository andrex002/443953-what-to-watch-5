import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {UserBlock} from "./user-block";
import {AuthorizationStatus} from "../../const";

describe(`Should UserBlock render correctly`, () => {
  it(`When user authorised`, () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UserBlock
          authorizationStatus={AuthorizationStatus.AUTH} />
          userName={`Alex`}
          userAvatar={`img/avatar.jpg`}
      </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When user not authorised`, () => {
    const tree = renderer.create(
      <BrowserRouter>
        <UserBlock
          authorizationStatus={AuthorizationStatus.NO_AUTH} />
          userName={`Alex`}
          userAvatar={`img/avatar.jpg`}
      </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
