import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter/dist/playwright';

test(qase([1,12], 'Installation page has the correct title'), async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Installation' }).click();
  await expect(page.locator('h1')).toHaveText('Installation');
});