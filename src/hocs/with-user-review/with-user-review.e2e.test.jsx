import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserReview from "./with-user-review";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import {defaultState} from "../../test-data";

configure({adapter: new Adapter()});
const mockStore = configureMockStore()(defaultState);

const MockComponent = () => <div />;
const MockComponentWrapped = withUserReview(MockComponent);

describe(`check withUserReview`, () => {
  it(`rating in withUserReview`, () => {
    const wrapper = mount(
        <Provider store={mockStore}>
          <MockComponentWrapped
            currentFilmId={1}
          />
        </Provider>
    );
    expect(wrapper.find(`WithUserReview`).state().currentRating).toEqual(``);
  });

  it(`comment in withUserReview`, () => {
    const wrapper = mount(
        <Provider store={mockStore}>
          <MockComponentWrapped
            currentFilmId={1}
          />
        </Provider>
    );

    expect(wrapper.find(`WithUserReview`).state().comment).toEqual(``);
  });

  it(`isReviewValid in withUserReview`, () => {
    const wrapper = mount(
        <Provider store={mockStore}>
          <MockComponentWrapped
            currentFilmId={1}
          />
        </Provider>
    );

    expect(wrapper.find(`WithUserReview`).state().isValidComment).toEqual(false);
  });
});
