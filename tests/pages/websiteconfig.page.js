import { expect } from "@playwright/test";
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
    this.approval_btn = page.locator('button.sc-jlZhew.fqpfUA.sc-ivNAKN.dUTSRO')
    this.remarks_textarea = page.getByTestId('form-textarea')
    this.remarks_modal_cancel_btn = page.locator('button.sc-gVaSRo.hvJPiH')
    this.remarks_modal_approval_btn = page.getByTestId('button').nth(2)
    this.published_label = page.locator('div').filter({ hasText: 'Published' }).nth(5)
  }

  async check_for_elements_building_blocks_visibility(){
    await expect(this.building_blocks_header).toBeVisible()
    await expect(this.pages_header).toBeVisible()
    await expect(this.sections_options).toBeVisible()
    await expect(this.basic_options).toBeVisible()
    await expect(this.building_blocks_header).toBeVisible()
    await expect(this.building_blocks_header).toBeVisible()
    
  }
}
module.exports = { WebsiteConfigPage };