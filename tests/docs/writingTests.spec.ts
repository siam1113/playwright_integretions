import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/dist/playwright';

test(qase(3,'Writing Tests page has correct title'), async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Doccs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await expect(page.locator('h1')).toHaveText('Writing tests');
});

test(qase(10,'Navigate to first test page'), async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'First test', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'First testDirect link to First test' })).toBeVisible();
});

test(qase(11,'Navigate to what\'s next page'), async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'What\'s Next', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'What\'s NextDirect link to What\'s Next' })).toBeVisible();
});