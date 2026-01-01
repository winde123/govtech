class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */

  constructor(page) {
    this.page = page;
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.login_email_inputfield = page.getByRole("textbox", { name: "Email" });
    this.loginform_loginbtn = page
      .locator("#headlessui-popover-panel-3")
      .getByRole("button", { name: "Login" });
    this.unauthorised_login_modal_header = page.getByRole("heading", {
      name: "Unauthorised Login",
    });
    this.unauthorised_login_modal_ok_btn = page.getByRole("button", {
      name: "Okay",
    });
  }

  async login(loginuser) {
    await this.loginBtn.click();
    await this.login_email_inputfield.fill(loginuser);
    await this.loginform_loginbtn.click();
  }

}
module.exports = { LoginPage };
