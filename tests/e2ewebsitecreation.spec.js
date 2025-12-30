import { test, expect } from '@playwright/test';
import { situser } from '../tests/data/testdata' ;
const { LoginPage } = require('../tests/pages/loginpage')
const { DashboardPage } = require('../tests/pages/dashboardpage')
const { SiteCreationForm } = require('../tests/pages/sitecreationpage')

//set up procedure
test.beforeEach('Setup', async({page}) => {
    await page.goto('/');
    const loginPage = new LoginPage(page)
    const dashboardpage = new DashboardPage(page)
    await loginPage.login(situser);
    //await page.waitForLoadState('domcontentloaded')
    //await page.waitForURL('**/dashboard')
    await page.waitForLoadState('load')
    await dashboardpage.createwebsite()
    
});

test.describe('e2e site creation scenarios', () => {
    test('User is able validate UI elements in the form', async ({page}) =>{
        const sitecreationform = new SiteCreationForm(page)
        await expect(sitecreationform.form_header).toBeVisible()
        await expect(sitecreationform.site_name_header).toBeVisible()
        await expect(sitecreationform.site_name_input_field).toBeVisible()
        await expect(sitecreationform.site_url_header).toBeVisible()
        await expect(sitecreationform.site_url_input_field).toBeVisible()
        await expect(sitecreationform.style_selector).toBeVisible()
        await expect(sitecreationform.back_btn).toBeVisible()
        await expect(sitecreationform.create_website_btn).toBeVisible()
    });


    

    




});