import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"
import * as Var from "../test-data/variables.ts"

test("Login test", async({page, registerPage, myAccountPage, commonFunctions, homePage}) => {
    const randomEmail = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
    //Open a Register page
    await page.goto(Var.registerURL);
    //Login
    await registerPage.registerNewUser(data.validData.firstName,
                                        data.validData.secondName,
                                        randomEmail,
                                        data.validData.phoneNumber,
                                        data.validData.password,
                                        data.validData.password)
    //Verify that user is logged in
    expect (await page.waitForURL(Var.accountCreatedURL));
    //Hover on My account menu button
    await page.hover(await commonFunctions.locatorToString(homePage.myAccountLocator));
    //Logout from account
    await commonFunctions.navigateTo(await (commonFunctions.stringToLocator(myAccountPage.logOutButtonLocator)));
    //Verify that user is logged out
    expect (await page.waitForURL(Var.logOutURL));
    //Open a Login page
    await page.goto(Var.loginURL);
    //Login
    await myAccountPage.login(randomEmail, data.validData.password);
    //Verify that user is logged in
    expect (await page.waitForURL(Var.accountURL));
})