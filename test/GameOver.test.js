import React from "react";
import Enzyme, { shallow } from "enzyme";

import GameOver from "../src/components/GameOver";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<GameOver />", () => {
  it("renders <GameOver /> component", () => {
    const wrapper = shallow(<GameOver />);
    expect(wrapper.find("#gameOver")).toHaveLength(1);
  });

  it("renders a <GameOver /> component", () => {
    const wrapper = shallow(<GameOver score={3} />);
    expect(wrapper.text()).toEqual("Participation trophy");
  });
});
