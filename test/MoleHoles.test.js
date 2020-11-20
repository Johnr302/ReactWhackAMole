import React from "react";
import Enzyme, { shallow } from "enzyme";

import { MoleHoles, makeMoleHoles } from "../src/components/Moleholes";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("MoleHoles", () => {
  it("renders  a <MoleHoles /> component", () => {
    const wrapper = shallow(<MoleHoles />);
    expect(wrapper.find(".circle")).toHaveLength(1);
  });

  it("has a makeMolesHoles method that returns an array of 9 MoleHoles components", () => {
    expect(makeMoleHoles("", () => {})).toHaveLength(9);
  });

  it(`renders the Moleholes disabled if the gamestate property equals "finished"`, () => {
    const wrapper = shallow(<MoleHoles gameState="finished" />).props();
    console.warn(wrapper.disabled);
    expect(wrapper.disabled).toBe(true);
  });

  it(`renders the Moleholes enabled if the gamestate property equals "started"`, () => {
    const wrapper = shallow(<MoleHoles gameState="started" />).props();
    console.warn(wrapper.disabled);
    expect(wrapper.disabled).toBe(false);
  });
});
