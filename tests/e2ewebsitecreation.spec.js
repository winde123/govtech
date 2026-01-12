import { test, expect } from "@playwright/test";
import { situser , random_website_name } from "../tests/data/testdata";
const { LoginPage } = require("../tests/pages/login.page");
const { DashboardPage } = require("../tests/pages/dashboard.page");
const { SiteCreationForm } = require("../tests/pages/sitecreation.page");
const { WebsiteConfigPage } = require("../tests/pages/websiteconfig.page");
const { PublishPreviewPage } = require("../tests/pages/preview_publish.page");
import { firefox } from "@playwright/test";

//set up procedure
test.beforeEach("Setup", async ({ page }) => {
  await page.goto("/");
  const loginPage = new LoginPage(page);
  const dashboardpage = new DashboardPage(page);
  await loginPage.login(situser);
  //await page.waitForLoadState('domcontentloaded')
  //await page.waitForURL('**/dashboard')
  await page.waitForLoadState("load");
  dashboardpage.wait_for_create_website_link();
  //await page.waitForSelector('a.sc-boJDB.WRczQ[href="/v2/workspace/new"]',{state:'visible'})
  await dashboardpage.create_website();
});

test.describe("e2e site creation scenarios", () => {
  test.describe.configure({ mode: "serial" });
  test("User is able validate UI elements in the form", async ({ page }) => {
    const sitecreationform = new SiteCreationForm(page);
    sitecreationform.assert_website_creation_page_visibility();
  });

  test("User is able validate the number of options availables for style selection", async ({
    page,
  }) => {
    const sitecreationform = new SiteCreationForm(page);
    await sitecreationform.assert_number_of_selector_count_to_be(6);
  });

  test("User is able to validate the error message for invalid characters on site creation form", async ({
    page,
  }) => {
    const sitecreationform = new SiteCreationForm(page);
    await sitecreationform.site_name_input_field.fill("_+@");
    await sitecreationform.site_url_input_field.click();
    await expect(sitecreationform.err_msg_site_url_input_field).toBeVisible();
  });

  test("User is able to select another style choice and  navigate back to the dashboard landing page", async ({
    page,
  }) => {
    const sitecreationform = new SiteCreationForm(page);
    //await expect(sitecreationform.style_selector).toBeVisible()
    await sitecreationform.select_style("Fuji Apple");
    await sitecreationform.validate_deep_ocean_choice_not_selected();
    await sitecreationform.back_btn.click()
    await page.waitForURL('**/v2/dashboard')
  });

  test("User is able to create blank site and select another style choice", async ({ page, context }) =>{
    const sitecreationform = new SiteCreationForm(page);
    const websiteconfigpage = new WebsiteConfigPage(page);
    const preveiwpublishpage = new PublishPreviewPage(page);
    const rand_site_name = random_website_name();
    await sitecreationform.site_name_input_field.fill(rand_site_name);
    await sitecreationform.site_url_input_field.click()
    await expect(sitecreationform.site_url_input_field).toHaveAttribute('value',rand_site_name);
    await sitecreationform.select_style("Fuji Apple");
    await sitecreationform.create_website_btn.click();
    await websiteconfigpage.check_for_elements_building_blocks_visibility()
    await websiteconfigpage.approval_btn.click()
    await websiteconfigpage.remarks_textarea.fill('This is a test remark!')
    await websiteconfigpage.remarks_modal_approval_btn.click()
    await preveiwpublishpage.check_for_preview_push_page_elems_visibility()
    await preveiwpublishpage.publish_btn.click()
    const web_url = 'https://uat.gowhere.gov.sg/' + rand_site_name
    await expect(preveiwpublishpage.publish_modal_link).toHaveAttribute('href',web_url)
    await preveiwpublishpage.publish_modal_remarks_textfield.fill('Test remarks for publish page!')
    await expect(preveiwpublishpage.publish_modal_publish_btn).toBeVisible()
    await preveiwpublishpage.publish_modal_publish_btn.click()
    await expect(websiteconfigpage.published_label).toBeVisible()
    await websiteconfigpage.approval_btn.click()
    await websiteconfigpage.remarks_modal_cancel_btn.click()
    // creating a new tab and navigate to website created
    const newpage = await context.newPage();
    await newpage.goto(web_url)
    //await newpage.waitForLoadState("load")
    //await newpage.waitForURL(web_url, {waitUntil:'domcontentloaded'} )
    




    
  });
});
