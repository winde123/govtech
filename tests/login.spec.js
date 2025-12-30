import { test, expect } from '@playwright/test';
import { situser, wronguser } from '../tests/data/testdata' ;
//import { loginpage } from '../tests/pages/loginpage';
const { LoginPage } = require('../tests/pages/loginpage')
const { DashboardPage } = require('../tests/pages/dashboardpage')

//set up procedure
test.beforeEach('Setup', async({page}) => {
    await page.goto('/');
  });

test.describe('Login Scenario',() => {
    test('User is able to Login and logout sucessfully',async ({ page }) => {
        const loginPage = new LoginPage(page)
        const dashboardPage = new DashboardPage(page)
        await expect(page).toHaveTitle('DIYGoWhere')
        await loginPage.login(situser);
        // validating url redirection to dashboard page
        await page.waitForURL('**/dashboard')
        // click on profile pic on dashboard
        await dashboardPage.logout();
        //await page.getByRole('button', { name: 'T', exact: true }).click()
        //await page.getByRole('button', { name: 'Logout' }).click()
        

    });

    test('User is not able to login with the correct password', async ({ page }) =>{
        const loginPage = new LoginPage(page)
        loginPage.login(wronguser)
        //await expect(page.getByRole('heading', { name: 'Unauthorised Login' })).toBeVisible()
        //await page.getByRole('button', { name: 'Okay' }).click()
        await expect(loginPage.unauthorised_login_modal_header).toBeVisible()
        await loginPage.unauthorised_login_modal_ok_btn.click()
        await page.waitForURL('**/home')

});










});
