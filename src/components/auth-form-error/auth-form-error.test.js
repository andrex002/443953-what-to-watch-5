import React from "react";
import renderer from "react-test-renderer";
import AuthFormError from "./auth-form-error";

it(`Should AuthFormError render correctly`, () => {
  const tree = renderer.create(
      <AuthFormError
        isValidEmail={true}
        isValidPassword={true}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
