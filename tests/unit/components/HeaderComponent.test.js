import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/Header/HeaderComponent";

describe("HeaderComponent", () => {
  it("display brand name", () => {
    const wrapper = mount(HeaderComponent);
    expect(wrapper.text()).toMatch("Toto Careers");
  });

  it("display menu items for navigations", () => {
    const wrapper = mount(HeaderComponent);
    const navMenuItems = wrapper.findAll("[data-text='main-nav-item']");
    const navMenuTexts = navMenuItems.map((item) => item.text());
    expect(navMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Toto",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(HeaderComponent, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });
      const loginButton = wrapper.findComponent({ name: "ActionButton" });
      const profileThumb = wrapper.findComponent({ name: "ProfileThumbnail" });
      expect(loginButton.exists()).toBe(true);
      expect(profileThumb.exists()).toBe(false);
    });
  });

  describe("when user is logged in", () => {
    it("displays profile picture", () => {
      const wrapper = mount(HeaderComponent, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const loginButton = wrapper.findComponent({ name: "ActionButton" });
      const profileThumb = wrapper.findComponent({ name: "ProfileThumbnail" });
      expect(loginButton.exists()).toBe(false);
      expect(profileThumb.exists()).toBe(true);
    });
  });
});
