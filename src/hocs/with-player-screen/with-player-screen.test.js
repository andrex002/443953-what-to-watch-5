import React, {createRef} from "react";
import renderer from "react-test-renderer";
import withPlayerScreen from "./with-player-screen";
import PropTypes from "prop-types";

const forwardedRef = createRef();

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withPlayerScreen(MockComponent);


it(`withPlayerScreen is rendered correctly`, () => {
  const tree = renderer.create((
    
    <MockComponentWrapped>
         <React.Fragment />
      </MockComponentWrapped>
  ), {
    createNodeMock(MockComponent) {
      const forwardedRef = createRef();
      
      return (
        <MockComponent forwardedRef={forwardedRef} />
      );
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
