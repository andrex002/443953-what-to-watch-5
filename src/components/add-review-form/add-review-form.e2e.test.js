import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReviewForm from "./add-review-form";
import {noop} from "../../test-data";

configure({adapter: new Adapter()});

describe(`health check AddReviewForm`, () => {
  it(`rating change`, () => {
    const handleRatingChange = jest.fn();

    const addReviewForm = mount(
      <AddReviewForm
        currentRating={`1`}
        handleRatingChange={handleRatingChange}
        handleCommentChange={noop}
        handlePostBtnClick={noop}
        isValidComment={true}
        isCommentSending={false}
        isCommentSendError={false}
      />
    );

    const input1 = addReviewForm.find(`input`).at(0);

    input1.simulate(`change`, {target: {checked: true}});

    expect(handleRatingChange).toHaveBeenCalledTimes(1);
    expect(handleRatingChange.mock.calls[0][0]).toMatchObject(input1);
  });

  it(`comment change`, () => {
    const handleCommentChange = jest.fn();

    const addReviewForm = mount(
      <AddReviewForm
        currentRating={`1`}
        handleRatingChange={noop}
        handleCommentChange={handleCommentChange}
        handlePostBtnClick={noop}
        isValidComment={true}
        isCommentSending={false}
        isCommentSendError={false}
      />
    );

    const textarea = addReviewForm.find(`.add-review__textarea`);

    textarea.simulate(`change`);

    expect(handleCommentChange).toHaveBeenCalledTimes(1);
    expect(handleCommentChange.mock.calls[0][0]).toMatchObject(textarea);
  });

  it(`submit`, () => {
    const handlePostBtnClick = jest.fn();
    const formSendPrevention = jest.fn();

    const addReviewForm = mount(
      <AddReviewForm
        currentRating={`1`}
        handleRatingChange={noop}
        handleCommentChange={noop}
        handlePostBtnClick={handlePostBtnClick}
        isValidComment={true}
        isCommentSending={false}
        isCommentSendError={false}
      />
    );

    const postButton = addReviewForm.find(`.add-review__btn`);
    postButton.simulate(`click`, {preventDefault: formSendPrevention});

    const form = addReviewForm.find(`form`);
    form.simulate(`submit`, {preventDefault: formSendPrevention});

    expect(handlePostBtnClick).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
