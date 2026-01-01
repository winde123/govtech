class WebsiteConfigPage {
    /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.building_blocks_header = page.getByTestId('undefined-tabs-link-0');
    this.pages_header = page.getByTestId('undefined-tabs-link-1');
    this.building_blocks_section = page.locator('div').filter({ hasText: /^Sections$/ });
    this.sections_options = page.getByText('TextSection imageImage');
    this.basic_section_header = page.locator('div').filter({ hasText: /^Basic$/ });
    this.basic_options = page.getByText('HeaderTextButtonRowColumnLinkImageCard');
    this.pages_list_section = page.getByRole('tabpanel', { name: 'Pages' });
    this.create_new_page_btn = page.getByRole('button', { name: 'New' });
    this.approval_btn = page.getByRole('button', { name: 'Send for approval' })
  }
}
module.exports = { WebsiteConfigPage };