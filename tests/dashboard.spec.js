import { test, expect } from '@playwright/test';
import { situser } from '../tests/data/testdata' ;
const { LoginPage } = require('../tests/pages/login.page')
const { DashboardPage } = require('../tests/pages/dashboard.page')

//set up procedure
test.beforeEach('Setup', async({page}) => {
    await page.goto('/');
    const loginPage = new LoginPage(page)
    await loginPage.login(situser);
    //await page.waitForLoadState('domcontentloaded')
    //await page.waitForURL('**/dashboard')
    await page.waitForLoadState('load')
    await page.waitForURL('**/dashboard')
    
});

test.describe('Dashboard scenarios', () => {
    test.describe.configure({ mode: "serial" });

    test('User is able validate correct profile options', async ({page}) =>{
        //const loginPage = new LoginPage(page)
        //await loginPage.login(situser);
        const dashboardpage = new DashboardPage(page)
        //await page.waitForSelector('a.sc-boJDB.WRczQ[href="/v2/workspace/new"]',{state:'visible'})
        await expect(dashboardpage.profile_btn).toBeVisible()
        await dashboardpage.profile_btn.click()
        await dashboardpage.validate_profile_menu_items()
    });

    test('User is able to see the correct UI elements', async({ page }) =>{
        //const loginPage = new LoginPage(page)
        //await loginPage.login(situser);
        const dashboardpage = new DashboardPage(page)
        //await page.waitForSelector(dashboardpage.create_new_website_link)
        //await expect(dashboardpage.create_new_website_link).toBeVisible()
        //await page.waitForSelector('a.sc-boJDB.WRczQ[href="/v2/workspace/new"]',{state:'visible'})
        await expect(dashboardpage.start_new_site_header).toBeVisible()
        await expect(dashboardpage.new_site_instructions).toBeVisible()
        await expect(dashboardpage.site_dashboard_header).toBeVisible()
        await expect(dashboardpage.site_dashboard_instructions).toBeVisible()
    });

    test('User is able to click on link to create a new site', async({ page }) =>{
        const dashboardpage = new DashboardPage(page)
        //await page.waitForSelector('a.sc-boJDB.WRczQ[href="/v2/workspace/new"]',{state:'visible'})
        await dashboardpage.create_website()
        await page.waitForURL('**/workspace/new')

    
    });

    




});