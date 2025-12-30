import { expect } from '@playwright/test';
class DashboardPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
        this.profile_btn = page.getByRole('button', { name: 'T', exact: true });
        this.logout_btn = page.getByRole('button', { name: 'Logout' });
        this.profile_menu = page.getByText('HomepageDashboardQuick Start')
        this.create_new_website_link = page.getByRole('link', { name: 'Blank site' })
        this.start_new_site_header = page.getByRole('heading', { name: 'Start a new site' })
        this.new_site_instructions = page.getByText('Choose a template to start')
        this.site_dashboard_header = page.getByRole('heading', { name: 'Site dashboard' })
        this.site_dashboard_instructions = page.getByText('View and manage all your')
    }
    async logout() {
        await this.profile_btn.click()
        await this.logout_btn.click()
    }

    async validateprofilemenuitems(){
        await expect(this.profile_menu).toHaveText('HomepageDashboardQuick Start GuideUser GuideContact UsRelease Notes')
    }

    async createwebsite(){
        await this.create_new_website_link.click()
    }
  }
  module.exports = { DashboardPage };