import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card";
import {BrowserRouter} from "react-router-dom";
import {films, noop} from "../../test-data";

const {image, title, video: srcVideo} = films[0];

describe(`Should FilmCard render correctly`, () => {
  it(`With active`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <FilmCard
            image={image}
            title={title}
            id={1}
            srcVideo={srcVideo}
            isActive={true}
            onFilmCardHover={noop}
            onFilmCardClick={noop}
          />
        </BrowserRouter>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With no active`, () => {
    const tree = renderer.create(
        <BrowserRouter>
          <FilmCard
            image={image}
            title={title}
            id={1}
            srcVideo={srcVideo}
            isActive={false}
            onFilmCardHover={noop}
            onFilmCardClick={noop}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
