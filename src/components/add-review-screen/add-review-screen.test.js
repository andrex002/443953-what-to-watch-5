import React from "react";
import renderer from "react-test-renderer";
import {AddReviewScreen} from "./add-review-screen";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import {films, defaultState} from "../../test-data";

const mockStore = configureMockStore()(defaultState)


it(`Should AddReviewScreen render correctly`, () => {
  const tree = renderer.create(
    <Provider store={mockStore}>
      <BrowserRouter>
        <AddReviewScreen
          films={films}
          currentFilmId={1}
        />
      </BrowserRouter>
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
