import { test, expect } from '@playwright/test';

test('finds the search element by role', async ({ page }) => {
  await page.goto('/');

  const searchEl = await page.getByRole('search');

  await expect(searchEl).toBeVisible();
});
