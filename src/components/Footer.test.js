import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("When the Footer renders", () => {
  let renderedFooter;

  beforeEach(() => {
    renderedFooter = shallow(<Footer />);
  });

  it("have a Navbar", () => {
    const renderedNavbar = renderedFooter.find("Navbar");

    expect(renderedNavbar.length).toEqual(1);
  });
});
