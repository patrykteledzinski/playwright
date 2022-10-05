// @ts-check
const { test, expect } = require('@playwright/test');

test('dla hltech', async ({ page }) => {
  // Go to https://www.hltech.com/
  await page.goto('https://www.hltech.com/');
  // Click #menu-item-1459 >> text=O nas
  await page.locator('#menu-item-1459 >> text=O nas').click();
  await expect(page).toHaveURL('https://www.hltech.com/o-nas/');
  // Click .img-fluid
  await page.locator('.img-fluid').click();
  // Click h2:has-text("O NAS")
  await page.locator('h2:has-text("O NAS")').click();
  // Click h3:has-text("Misja")
  await page.locator('h3:has-text("Misja")').click();
  // Click text=Wizja
  await page.locator('text=Wizja').click();
  // Click text=Wartości
  await page.locator('text=Wartości').click();
  // Click text=Put the client first
  await page.locator('text=Put the client first').click();
  // Click text=Go the extra mile
  await page.locator('text=Go the extra mile').click();
  // Click text=Do the right thing
  await page.locator('text=Do the right thing').click();
});

