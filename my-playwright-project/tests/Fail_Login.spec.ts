import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('xxx');
  await page.locator('[data-test="login-button"]').click();  
  
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]'))
         .toContainText('Username and password do not match');
  await expect(page.getByPlaceholder('Username')).toHaveClass(/error/);

  await page.locator('[data-test="error-button"]').click();
  await expect(page.locator('[data-test="error"]')).not.toBeVisible();

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').press('ControlOrMeta+a');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
});