import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/Header/HeaderComponent";

describe("HeaderComponent", () => {
  it("display brand name", () => {
    const wrapper = mount(HeaderComponent);
    expect(wrapper.text()).toMatch("Toto Careers");
  });
});
