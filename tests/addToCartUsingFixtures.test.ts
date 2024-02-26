import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"

// test("Register test_01", async({page, baseURL, registerPage}) => {
//     await page.goto(`${baseURL}route=account/register`)
//     await registerPage.enterFirstName(data.firstName)
//     await registerPage.enterLastName(data.secondName)
//     await registerPage.enterEmail(data.email)
//     await registerPage.enterPhoneNumber(data.phoneNumber)
//     await registerPage.enterPassword(data.password)
//     await registerPage.enterConfirmPassword(data.password)
//     await registerPage.isSubscribeChecked()
//     await registerPage.clickTermsCondition()
//     await registerPage.clickToContinue()
//     expect(await page.title()).toBe("Your Account Has Been Created!")
// })

test("Login test_01", async({page, baseURL, loginPage}) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(data.email, data.password)
})

test("Add to cart test_01", async({page, baseURL, loginPage, homePage, specialHotPage}) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(data.email, data.password)
    await homePage.clickOnSpecialHotMenuButton()
    await specialHotPage.addTheFirstProductToTheCard()
    await specialHotPage.isToastIsVisiable()
})
