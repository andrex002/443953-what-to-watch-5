import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withVideoPlayer from "./with-video-player";
import {films} from "../../test-data";

const MockComponent = (props) => {
  const {children, renderPlayer} = props;
  const {srcVideo, poster} = films[0];
  return (
    <React.Fragment>
      {renderPlayer(srcVideo, poster)}
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

const MockComponentWrapped = withVideoPlayer(MockComponent);


it(`withVideoPlayer is rendered correctly`, () => {
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