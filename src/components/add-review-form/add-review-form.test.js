import React from "react";
import renderer from "react-test-renderer";
import AddReviewForm from "./add-review-form";
import {noop} from "../../test-data";

describe(`Should AddReviewForm render correctly`, () => {
  it(`With a valid review`, () => {
    const tree = renderer.create(
        <AddReviewForm
          currentRating={`5`}
          handleRatingChange={noop}
          handleCommentChange={noop}
          handlePostBtnClick={noop}
          isValidComment={true}
          isCommentSending={false}
          isCommentSendError={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With invalid review`, () => {
    const tree = renderer.create(
        <AddReviewForm
          currentRating={`5`}
          handleRatingChange={noop}
          handleCommentChange={noop}
          handlePostBtnClick={noop}
          isValidComment={false}
          isCommentSending={false}
          isCommentSendError={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When data is sending`, () => {
    const tree = renderer.create(
        <AddReviewForm
          currentRating={`5`}
          handleRatingChange={noop}
          handleCommentChange={noop}
          handlePostBtnClick={noop}
          isValidComment={true}
          isCommentSending={true}
          isCommentSendError={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`On error data sending`, () => {
    const tree = renderer.create(
        <AddReviewForm
          currentRating={`5`}
          handleRatingChange={noop}
          handleCommentChange={noop}
          handlePostBtnClick={noop}
          isValidComment={true}
          isCommentSending={false}
          isCommentSendError={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
