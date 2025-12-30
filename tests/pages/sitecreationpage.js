class SiteCreationForm {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;
        this.form_header = page.getByRole('heading', { name: 'Setting up your site' });
        this.site_name_header = page.getByText('Site Name');
        this.site_name_input_field = page.getByRole('textbox', { name: 'Site Name Site URL' })
        this.site_url_header = page.getByText('Site URL')
        this.site_url_input_field = page.getByRole('textbox', { name: 'e.g. yourgowhereurl' })
        this.style_selector = page.getByText('Choose a styleYou will be still able to change it later.Deep oceanFuji')
        this.back_btn = page.getByRole('button', { name: 'Back' })
        this.create_website_btn = page.getByRole('button', { name: 'Create Website' })
    }
    async selectstyle(selection) {
        const style_selector = selection
        const selector = `locator('label').filter({ hasText: '${style_selector}' })`
        //clicking on the selector
        eval(`await page.${selector}.click()`)
    }

  }
  module.exports = { SiteCreationForm };