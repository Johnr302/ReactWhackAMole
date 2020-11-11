import React from "react";
import { shallow } from "enzyme";
import Score from "../src/components/Score";

// it("");

describe("<Score />", () => {
  it("renders three <Score /> components", () => {
    const wrapper = shallow(<score />);
    // console.log(wrapper.debug());
    expect(wrapper.find(Score)).to.have.lengthOf(1);
  });
});
