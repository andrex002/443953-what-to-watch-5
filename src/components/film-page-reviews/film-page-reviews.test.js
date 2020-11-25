import React from "react";
import renderer from "react-test-renderer";
import {FilmPageReviews} from "./film-page-reviews";
import {noop, comments} from "../../test-data";

it(`Should FilmPageReviews render correctly`, () => {
  const tree = renderer.create(
    <FilmPageReviews
      filmId={1}
      loadComments={noop}
      comments={comments}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
