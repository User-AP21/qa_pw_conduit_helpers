import { test, expect } from '@playwright/test';

export class ViewArticlePage {
  constructor(page) {
    this.page = page;
    this.articleTitleHeader = page.getByRole('heading');
    this.editArticleButton = page.getByRole('link', 
      { name: ' Edit Article' }).nth(1);
    this.articleTag = page.locator('ul.tag-list > li');
  }

  async clickEditArticleButton() {
    await test.step(`Click 'Edit Article' button`, async () => {
    await this.editArticleButton.click();
    });
  }

  async assertArticleTitleIsVisible(title) {
    await test.step(`Assert the article has correct title'`, async () => {
      await expect(this.articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleTextIsVisible(text) {
    await test.step(`Assert the article has correct text'`, async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    });
  }


  async assertArticleTagIsVisible(tags) {
    await test.step(`Assert the article has tags`, async () => {
      await expect
        .poll(() => this.articleTag.allTextContents())
        .toEqual(expect.arrayContaining(tags));
    });
  }


  async assertArticleTagIsNotVisible() {
    await test.step(`Assert the article hasn't tags`, async () => {
      await expect(this.articleTag).toBeHidden();
    });
  }

  }
