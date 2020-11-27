import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayerScreen from "./with-player-screen";
import {films} from "../../test-data";

configure({adapter: new Adapter()});

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

describe(`withFullscreenPlayer should pass`, () => {
  it(`isPlaying true`, () => {
    const wrapper = mount(
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().isPlaying).toEqual(true);
  });

  it(`duration in the player`, () => {
    const wrapper = mount(
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().duration).toEqual(0);
  });

  it(`progress in the player`, () => {
    const wrapper = mount(
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().progress).toEqual(0);
  });
});
