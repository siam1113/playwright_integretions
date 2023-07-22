import { test, expect } from '@playwright/test';

test('Installation page has the correct title', async ({ page }, testInfo) => {
  //Adding Xray properties
  testInfo.annotations.push({ type: 'test_key', description: 'GM-2' });


  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Installation' }).click();
  await expect(page.locator('h1')).toHaveText('Installation');
});