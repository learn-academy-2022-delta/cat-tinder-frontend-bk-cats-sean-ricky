import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("When NotFound renders", () => {
  let renderedNotFound;

  beforeEach(() => {
    renderedNotFound = shallow(<NotFound />);
  });

  it("displays a h3", () => {
    const renderedText = renderedNotFound.find("h3");
    expect(renderedText.length).toEqual(1);
  });
});
