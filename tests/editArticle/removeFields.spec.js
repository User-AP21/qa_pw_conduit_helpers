import { test } from '@playwright/test';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';

test.beforeEach(async ({ page }) => {
  const user = generateNewUserData();
  const article = generateNewArticleData(3);

  await signUpUser(page, user);
  await createNewArticle(page, article);
});


test.describe('Remove fields', () => {
test('Add the tag for the existing article without tags', async ({ page }) => {
 
});
});