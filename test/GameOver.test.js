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

  it(`renders a <GameOver /> component with "Participation Trophy" message if
    score is between 0 and 50`, () => {
    const wrapper = shallow(<GameOver score={3} />);
    expect(wrapper.text()).toEqual("Participation trophy");
  });
  it(`renders a <GameOver /> component with "Pretty Good" message if
    score is between 49 and 100`, () => {
    const wrapper = shallow(<GameOver score={50} />);
    expect(wrapper.text()).toEqual("Pretty Good");
  });
  it(`renders a <GameOver /> component with "Good Job" message if
    score is >= 100`, () => {
    const wrapper = shallow(<GameOver score={101} />);
    expect(wrapper.text()).toEqual("Good Job!");
  });
});
