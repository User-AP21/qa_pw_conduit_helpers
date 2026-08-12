import { expect, test } from '@playwright/test';

export class EditArticlePage {
  constructor(page) {
    this.page = page;
    this.tags = page.getByPlaceholder('Enter tags');
    this.updateButton = page.getByRole('button', {
      name: 'Update',
    });
  }

  async fillTagsField(tags) { 
    await test.step(`Fill the 'Tags' field`, async () => {
      for (const tag of tags) {
      await this.tags.fill(tag);
      await this.tags.press('Enter');
    }
    });
  }

  async clickUpdateButton() {
    await test.step(`Click 'Update Article' button`, async () => {
      await this.updateButton.click();
      await expect(this.page).toHaveURL(/\/article\//);
    });
  }
}
