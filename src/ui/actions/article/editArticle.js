import { test } from '@playwright/test';
import { EditArticlePage } from '../../pages/article/EditArticlePage';
import { ViewArticlePage } from '../../pages/article/ViewArticlePage';

export async function addTagToExistingArticleWithoutTags( page, article ) {
  await test.step(`Add the tag for the existing article without tags`, 
    async () => {
    const editArticlePage = new EditArticlePage(page);
    const viewArticlePage = new ViewArticlePage(page);

    await viewArticlePage.clickEditArticleButton();
    await editArticlePage.fillTagsField([article.newTag]);
    await editArticlePage.clickUpdateButton();
    await page.reload();
    await viewArticlePage.assertArticleTagIsVisible([article.newTag]);

  });
}

export async function addTagToExistingArticleWithTags( page, article ) {
  await test.step(`Add the tag for the existing article with tags`, 
    async () => {
    const editArticlePage = new EditArticlePage(page);
    const viewArticlePage = new ViewArticlePage(page);

    await viewArticlePage.clickEditArticleButton();
    await editArticlePage.fillTagsField([article.newTag]);
    await editArticlePage.clickUpdateButton();
    const expectedTags = ([...article.tags, article.newTag]);
    await page.reload();
    await viewArticlePage.assertArticleTagIsVisible(expectedTags);

  });
}