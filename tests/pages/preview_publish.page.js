import { expect } from "@playwright/test";
class PublishPreviewPage {
    /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.publish_btn = page.getByRole('button', { name: 'Publish' });
    this.request_changes_btn = page.getByRole('button', { name: 'Request changes' });
    this.request_changes_textarea = page.getByTestId('form-textarea')
    this.request_changes_cancel_btn = page.getByRole('button', { name: 'Cancel' })
    this.request_changes_modal_request_changes_btn = page.getByTestId('button').nth(2)
    this.publish_modal_link = page.locator('a[rel="noopener noreferrer"]')
    this.publish_modal_remarks_textfield = page.getByTestId('form-textarea')
    this.publish_modal_cancel_btn = page.getByRole('button', { name: 'Cancel' })
    this.publish_modal_publish_btn = page.locator('(//button[@class="sc-gVaSRo jIzLMY"])[2]')
   
  }

  async check_for_preview_push_page_elems_visibility(){
    await expect(this.publish_btn).toBeVisible()
    await expect(this.request_changes_btn).toBeVisible()
    
    
  }
}
module.exports = { PublishPreviewPage };