import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When App renders", () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it("displays a Header and a Footer", () => {
    
    const renderedHeader = renderedApp.find("Header")
 
    expect(renderedHeader.length).toEqual(1)

    const renderedFooter = renderedApp.find("Footer")
    expect(renderedFooter.length).toEqual(1)
  
  })
})