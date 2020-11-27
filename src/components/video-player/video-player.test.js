import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {films, noop} from "../../test-data";
import {BrowserRouter} from "react-router-dom";

const {video: srcVideo, image: poster} = films[0];


it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <VideoPlayer
          srcVideo={srcVideo}
          poster={poster}
          renderPlayer={noop}
        />
      </BrowserRouter>, {
        createNodeMock() {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
