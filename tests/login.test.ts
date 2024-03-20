import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"
import * as Var from "../test-data/variables.ts"

test("Login test", async({page, loginPage}) => {
    // Open a Login page
    await page.goto(Var.loginURL)
    // Login
    await loginPage.login(data.email, data.password)
    //Verify that user is logged in
    expect (await page.waitForURL(Var.accountURL))
})

test("Logout test", async({page, loginPage, commonFunctions, homePage}) => {
    const selector = await commonFunctions.locatorToString(homePage.myAccountLocator);
    // Open a Login page
    await page.goto(Var.loginURL)
    // Login
    await loginPage.login(data.email, data.password)
    //Verify that user is logged in
    expect (await page.waitForURL(Var.accountURL))
    //Hover on My account menu button
    await page.hover(selector)
    //Logout from account
    await commonFunctions.navigateTo(await (commonFunctions.stringToLocator(loginPage.logOutButtonLocator)))
    //Verify that user is logged out
    expect (await page.waitForURL(Var.logOutURL))
})