import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/Header/HeaderComponent";

describe("HeaderComponent", () => {
  it("displays brand name", () => {
    const wrapperheader = mount(HeaderComponent);
    expect(wrapperheader.text());
  });
});
