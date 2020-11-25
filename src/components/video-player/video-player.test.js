import React, {createRef} from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {films} from "../../test-data";

const {srcVideo, image: poster} = films[0];

const forwardedRef = createRef();

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer.create(
    <VideoPlayer
      forwardedRef={forwardedRef}
      srcVideo={srcVideo}
      poster={poster}
      width={280}
      height={175}
    />, {
      createNodeMock() {
        return {};
      }
    }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});