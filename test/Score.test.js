import React from "react";
import Enzyme, { shallow } from "enzyme";

import Score from "../src/components/Score";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Score />", () => {
  it("renders <Score /> component", () => {
    const wrapper = shallow(<Score />);
    expect(wrapper.find(".score")).toHaveLength(1);
  });

  it("renders a <Score /> component with a number", () => {
    const wrapper = shallow(<Score score={3} />);
    expect(wrapper.text()).toEqual(`Score: 3`);
  });
});
