import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("When Home renders", () => {
  let renderedHome;

  beforeEach(() => {
    renderedHome = shallow(<Home />);
  });

  it("displays a card image", () => {
    const renderedCardImg = renderedHome.find("CardImg");

    expect(renderedCardImg.length).toEqual(1);
  });
});
