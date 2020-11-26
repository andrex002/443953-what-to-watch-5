import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPlayer from "./with-video-player";
import {films} from "../../test-data";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {renderPlayer} = props;
  const {video: srcVideo, image: poster} = films[0];

  return (
    <React.Fragment>
      {renderPlayer(srcVideo, poster)}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withVideoPlayer(MockComponent);

describe(`withVideoPlayer should pass`, () => {
  it(`withVideoPlayer isPlaying false`, () => {
    const wrapper = mount(
        <MockComponentWrapped />);

    expect(wrapper.state().isPlaying).toEqual(false);
    expect(wrapper.state().isLoading).toEqual(true);
  });

  // it(`withVideoPlayer isLoading true`, () => {
  //   const wrapper = mount(
  //       <MockComponentWrapped>
  //         <React.Fragment />
  //       </MockComponentWrapped>);

  //   expect(wrapper.state().isLoading).toEqual(true);
  // });
});
