import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withPlayerScreen from "./with-player-screen";
import {films} from "../../test-data";

const MockComponent = (props) => {
  const {children, renderPlayer} = props;

  return (
    <React.Fragment>
      {renderPlayer(films[0])}
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withPlayerScreen(MockComponent);


it(`withPlayerScreen is rendered correctly`, () => {
  const tree = renderer.create((

    <MockComponentWrapped>
      <React.Fragment />
    </MockComponentWrapped>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
