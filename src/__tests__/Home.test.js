import Home from "../pages/Home/Home"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Home Component", () => {
  it("should have title", function () {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("Title")).toHaveLength(1)
  })

  it("should have text", function () {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("Text")).toHaveLength(11)
  })

  it("should have button", function () {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("Button")).toHaveLength(1)
  })

  it("should have spin", function () {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("Spin")).toHaveLength(1)
  })
})
