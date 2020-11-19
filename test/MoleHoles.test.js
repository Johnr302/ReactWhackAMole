import React from "react";
import Enzyme, { shallow } from "enzyme";

import { MoleHoles, makeMoleHoles } from "../src/components/Moleholes";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("MoleHoles", () => {
  it("renders <MoleHoles /> component", () => {
    const wrapper = shallow(<MoleHoles />);
    expect(wrapper.find(".circle")).toHaveLength(1);
  });
  it("renders a <MoleHoles />component with a number", () => {
    const wrapper = shallow(<MoleHoles />);
    expect(wrapper.text()).toEqual(``);
  });

  //   it('shows a MoleHole component 9 times', () => {
  //     const testee = shallow(
  //       <MoleHoles />
  //     );

  //     const makeMoleHoles = testee.find('.circle');

  //     expect(placeComponents.length).toEqual(places.length);

  //     placeComponents.forEach((placeComponent, index) => {
  //           expect(placeComponent.prop('place')).toEqual(places[index]);
  //     });

  //   });
});
