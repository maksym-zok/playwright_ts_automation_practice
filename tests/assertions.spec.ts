import { test, expect } from '@playwright/test';

// 1) expect(page).toHaveURL()   Page has URL
// 2) expect(page).toHaveTitle()   Page has title
// 3) expect(locator).toBeVisible()  Element is visible
// 4) expect(locator).toBeEnabled()  Control is enabled
// 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
// 6) expect(locator).toHaveAttribute() Element has attribute
// 7) expect(locator).toHaveText()  Element matches text
// 8) expect(locator).toContainText()  Element contains text
// 9) expect(locator).toHaveValue(value) Input has a value
// 10) expect(locator).toHaveCount()  List of elements has given length

test('Asserions test', async({page})=>{
    // open app url
    await page.goto('https://www.nopcommerce.com/en/register')
    
    // 1) expect(page).toHaveURL()   Page has URL
    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register')

    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('Register - nopCommerce')

    // 3) expect(locator).toBeVisible()  Element is visiabele
    const headerLocator = page.locator("//*[@class='desktop-logo']");
    await expect(headerLocator).toBeVisible();

    // 4) expect(locator).toBeEnabled()
    //    expect(locator).toBeDisabled()
    const firstNameRegistrationLocator = page.locator("//*[@id='FirstName']");
    await expect(firstNameRegistrationLocator).toBeEnabled();
})
