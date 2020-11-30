import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import {withAuthScreen} from "./with-auth-screen";
import PropTypes from "prop-types";
import {defaultState} from "../../test-data";

const mockStore = configureMockStore()(defaultState);

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const MockComponentWrapped = withAuthScreen(MockComponent);

it(`withAuthScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <Provider store={mockStore}>
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>
    </Provider>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
