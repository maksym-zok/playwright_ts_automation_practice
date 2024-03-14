import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"

test("Register test_01", async({page, baseURL, registerPage}) => {
    const randomNumber = Math.floor(Math.random() * 1000)
    await page.goto(`${baseURL}route=account/register`)
    await registerPage.enterFirstName(data.firstName)
    await registerPage.enterLastName(data.secondName)
    await registerPage.enterEmail(`TestMail_${randomNumber}@gmail.com`)
    await registerPage.enterPhoneNumber(data.phoneNumber)
    await registerPage.enterPassword(data.password)
    await registerPage.enterConfirmPassword(data.password)
    await registerPage.isSubscribeChecked()
    await registerPage.clickTermsCondition()
    await registerPage.clickToContinue()
    expect(await page.title()).toBe("Your Account Has Been Created!")
})

test("Login test_01", async({page, baseURL, loginPage, homePage}) => {
    // Open a Login page
    await page.goto(`${baseURL}route=account/login`)
    // Login
    await loginPage.login(data.email, data.password, homePage)
})