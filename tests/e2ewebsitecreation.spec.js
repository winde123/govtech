import { test, expect } from '@playwright/test';
import { situser } from '../tests/data/testdata' ;
const { LoginPage } = require('../tests/pages/login.page')
const { DashboardPage } = require('../tests/pages/dashboard.page')
const { SiteCreationForm } = require('../tests/pages/sitecreation.page')

//set up procedure
test.beforeEach('Setup', async({page}) => {
    await page.goto('/');
    const loginPage = new LoginPage(page)
    const dashboardpage = new DashboardPage(page)
    await loginPage.login(situser);
    //await page.waitForLoadState('domcontentloaded')
    //await page.waitForURL('**/dashboard')
    await page.waitForLoadState('load')
    dashboardpage.wait_for_create_website_link()
    //await page.waitForSelector('a.sc-boJDB.WRczQ[href="/v2/workspace/new"]',{state:'visible'})
    await dashboardpage.createwebsite()
    
});

test.describe('e2e site creation scenarios', () => {
    test('User is able validate UI elements in the form', async ({page}) =>{
        const sitecreationform = new SiteCreationForm(page)
        sitecreationform.assert_website_creation_page_visibility()
    });

    test('User is able validate the number of options availables for style selection', async ({ page })=>{
        const sitecreationform = new SiteCreationForm(page)
        await  sitecreationform.assert_number_of_selector_count_to_be(6)

    });

    test('User is able to validate the error message for invalid characters', async ({ page }) => {
        const sitecreationform = new SiteCreationForm(page)
        await sitecreationform.site_name_input_field.fill('_+@')
        await sitecreationform.site_url_input_field.click()
        await expect(sitecreationform.err_msg_site_url_input_field).toBeVisible()

    });

    test('User is able to navigate back to the dashboard landing page',async ({page})=>{
        const sitecreationform = new SiteCreationForm(page)
        //await expect(sitecreationform.style_selector).toBeVisible()
        await sitecreationform.select_style('Fuji Apple')
        await sitecreationform.validate_deep_ocean_choice_not_selected()
        //await sitecreationform.back_btn.click()
        //await page.evaluate(styleselector)

    });





    

    




});