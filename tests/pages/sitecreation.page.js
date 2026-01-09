import { expect } from "@playwright/test";
class SiteCreationForm {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.form_header = page.getByRole("heading", {
      name: "Setting up your site",
    });
    this.site_name_header = page.getByText("Site Name");
    this.site_name_input_field = page.getByRole("textbox", {
      name: "Site Name Site URL",
    });
    this.site_url_header = page.getByText("Site URL");
    this.site_url_input_field = page.locator("input#form-field-group-base.sc-DVSzx.sc-kSLBMx.EobiF.begCOS");
    this.style_selector = page.getByText(
      "Choose a styleYou will be still able to change it later.Deep oceanFuji"
    );
    this.style_choice_deep_ocean = page
      .locator("label")
      .filter({ hasText: "Deep ocean" });
    this.style_choice_fuji_apple = page
      .locator("label")
      .filter({ hasText: "Fuji Apple" });

    this.back_btn = page.getByRole("button", { name: "Back" });
    this.create_website_btn = page.getByRole("button", {
      name: "Create Website",
    });

    this.err_msg_site_url_input_field = page.getByTestId(
      "form-field-group-error-message"
    );
  }
  async select_style(selection) {
    const style_selector = selection;
    await this.page.waitForSelector("label.sc-gHJCvS.fPdMNC", {
      state: "visible",
    });
    await this.page
      .locator("label")
      .filter({ hasText: `${style_selector}` })
      .click();

    //await this.style_choice_fuji_apple.dblclick()
  }

  async select_style_deep_ocean() {
    await this.page.waitForSelector("label.sc-gHJCvS.fPdMNC", {
      state: "visible",
    });
    await this.style_choice_deep_ocean.click();
  }

  async assert_website_creation_page_visibility() {
    await expect(this.form_header).toBeVisible();
    await expect(this.site_name_header).toBeVisible();
    await expect(this.site_name_input_field).toBeVisible();
    await expect(this.site_url_header).toBeVisible();
    await expect(this.site_url_input_field).toBeVisible();
    await expect(this.style_selector).toBeVisible();
    await expect(this.back_btn).toBeVisible();
    await expect(this.create_website_btn).toBeVisible();
  }

  async assert_number_of_selector_count_to_be(selcount) {
    const buttoncount = await this.page.locator("p.sc-fHjqPf.gXCSWo").count();
    expect(buttoncount).toBe(selcount);
  }

  async validate_deep_ocean_choice_not_selected() {
    await expect(this.style_choice_deep_ocean).toHaveClass("sc-gHJCvS fKCYMu");
  }
}
module.exports = { SiteCreationForm };
