import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"
import * as Var from "../test-data/variables.ts"

test("Login test", async({page, myAccountPage}) => {
    //Open a Login page
    await page.goto(Var.loginURL);
    //Login
    await myAccountPage.login(data.validData.email, data.validData.password);
    //Verify that user is logged in
    expect (await page.waitForURL(Var.accountURL));
})

test("Logout test", async({page, myAccountPage, commonFunctions, homePage}) => {
    //Open a Login page
    await page.goto(Var.loginURL);
    // Login
    await myAccountPage.login(data.validData.email, data.validData.password);
    //Verify that user is logged in
    expect (await page.waitForURL(Var.accountURL));
    //Hover on My account menu button
    await page.hover(await commonFunctions.locatorToString(homePage.myAccountLocator));
    //Logout from account
    await commonFunctions.navigateTo(await (commonFunctions.stringToLocator(myAccountPage.logOutButtonLocator)));
    //Verify that user is logged out
    expect (await page.waitForURL(Var.logOutURL));
})

test("Login test with invalid credentials", async({page, myAccountPage, commonFunctions}) => {
    //Open a Login page
    await page.goto(Var.loginURL);
    //Login with invalid credentials
    await myAccountPage.login(data.invalidData.email, data.invalidData.password);
    //Verify that warning for invalid credentials appeared
    expect (await commonFunctions.checkElementPresence(myAccountPage.warningInvalidCredentials, 
        "Warning: No match for E-Mail Address and/or Password."));
    //Verify that user is on the login page
    expect (await page.waitForURL(Var.loginURL));
})

test("Login test with invalid credentials for 5 times untill exceeded allowed number of login attempts", async({page, myAccountPage, commonFunctions}) => {
    //Open a Login page
    await page.goto(Var.loginURL);
    //Login with invalid credentials for 3 times
    for (let i = 0; i < 5; i++) {
        await myAccountPage.login(data.invalidData.email, data.invalidData.password);
    }
    //Verify that account has exceeded allowed number of login attempts appeared
    expect (await commonFunctions.checkElementPresence(myAccountPage.warningInvalidCredentials,
        "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."));
    //Verify that user is on the login page
    expect (await page.waitForURL(Var.loginURL));
})