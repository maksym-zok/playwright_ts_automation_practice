import { test, expect } from '@playwright/test';

test("Login test demo", async({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.click("'Login'");
    await page.fill("//input[@name='email']", "maksym.hlyva@gmail.com");
    await page.fill("//input[@name='password']", "Pass123");
    await page.click("input[value='Login']");
    await expect(page).toHaveTitle('My Account')
})

test('Recorded login test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('E-Mail Address').fill('maksym.hlyva@gmail.com');
    await page.getByPlaceholder('Password').fill('Pass123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle('My Account')
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.getByRole('link', { name: 'Logout', exact: true }).click();
    await page.locator("//h1[contains(.,'Account Logout')]");
  });