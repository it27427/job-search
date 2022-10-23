import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/Header/HeaderComponent";

describe("HeaderComponent", () => {
  it("display brand name", () => {
    const wrapper = mount(HeaderComponent);
    expect(wrapper.text()).toMatch("Toto Careers");
  });
  it("display menu items for navigations", () => {
    const wrapper = mount(HeaderComponent);
    const navigationMenuItems = wrapper.findAll("[data-test='main-nav-item']");
    const navigationMenuText = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Toto",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
