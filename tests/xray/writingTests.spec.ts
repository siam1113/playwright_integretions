import { test, expect } from '@playwright/test';

test.skip('Writing Tests page has correct title', async ({ page }, testInfo) => {
  //Adding Xray properties
  testInfo.annotations.push({ type: 'test_key', description: 'GM-3' });

  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.locator('h1')).toHaveText('Writing tests');
});

test.skip('Navigate to first test page', async ({ page }, testInfo) => {
  //Adding Xray properties
  testInfo.annotations.push({ type: 'test_key', description: 'GM-4' });

  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'First test', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'First testDirect link to First test' })).toBeVisible();
});

test.skip(`Navigate to what's next page`, async ({ page }, testInfo) => {
  //Adding Xray properties
  testInfo.annotations.push({ type: 'test_key', description: 'GM-5' });

  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'What\'s Next', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'What\'s NextDirect link to What\'s Next' })).toBeVisible();
});