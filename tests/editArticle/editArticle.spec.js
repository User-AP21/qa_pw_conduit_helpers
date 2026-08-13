import { test } from '@playwright/test';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticleWithoutTags } from '../../src/ui/actions/article/createNewArticle';
import { editArticleTitleForExistingArticle, 
  editArticleDescriptionForExistingArticle, 
  editArticleTextForExistingArticle 
} from '../../src/ui/actions/article/editArticle';

let article;

test.beforeEach(async ({ page }) => {
  const user = generateNewUserData();
  article = generateNewArticleData();

  await signUpUser(page, user);
  await createNewArticleWithoutTags(page, article);
});


test.describe('Edit Article', () => {
test('Edit the article title for the existing article', async ({ page }) => {
  await editArticleTitleForExistingArticle(page, article);
});

test('Edit the article description for the existing article', 
  async ({ page }) => {
  await editArticleDescriptionForExistingArticle(page, article);
});

test('Edit the article text for the existing article', async ({ page }) => {
  await editArticleTextForExistingArticle(page, article);
});
});