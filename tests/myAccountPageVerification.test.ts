import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"
import * as Var from "../test-data/variables.ts"

test("Verify right column menu buttons functionality when user is logged out", async({page, myAccountPage, commonFunctions}) => {
    //Open a Login page
    await page.goto(Var.loginURL);
    //Navigate to Register page
    await commonFunctions.navigateTo(myAccountPage.registerButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.registerURL))
    //Navigate to Login page
    await commonFunctions.navigateTo(myAccountPage.loginButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.loginURL))
    //Navigate to Forgotten password page
    await commonFunctions.navigateTo(myAccountPage.forgottenPasswordButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.forgottenURL))
    //Click on My account button
    await commonFunctions.navigateTo(myAccountPage.myAccountButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on Address book button
    await commonFunctions.navigateTo(myAccountPage.addressBookButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on WishList button
    await commonFunctions.navigateTo(myAccountPage.wishListButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on Order History button
    await commonFunctions.navigateTo(myAccountPage.orderHistoryButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on Downloads button
    await commonFunctions.navigateTo(myAccountPage.downloadsButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on Recurring Payments button
    await commonFunctions.navigateTo(myAccountPage.recurringPaymentsButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on Rewards Points button
    await commonFunctions.navigateTo(myAccountPage.rewardsPointsButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on Returns button
    await commonFunctions.navigateTo(myAccountPage.returnsButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on Transactions button
    await commonFunctions.navigateTo(myAccountPage.transactionsButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))
    //Click on newsletter button
    await commonFunctions.navigateTo(myAccountPage.newsletterButtonFromMyAccountPage);
    //Redirected to Login Page
    expect (await page.waitForURL(Var.loginURL))    
})

test("Verify right column menu buttons functionality when user is logged in", async({page, myAccountPage, commonFunctions}) => {
    //Open a Login page
    await page.goto(Var.loginURL);
    //Login
    await myAccountPage.login(data.validData.email, data.validData.password);
    //Verify that user is logged in
    expect (await page.waitForURL(Var.accountURL));
    //Navigate to My Account page
    await commonFunctions.navigateTo(myAccountPage.myAccountButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.accountURL))
    //Navigate to Edit Account page
    await commonFunctions.navigateTo(myAccountPage.editAccountButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.editAccountURL))
    //Navigate to Password page
    await commonFunctions.navigateTo(myAccountPage.passwordButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.passwordURL))
    //Navigate to Address Book page
    await commonFunctions.navigateTo(myAccountPage.addressBookButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.addressBookURL))
    //Navigate to WishList page
    await commonFunctions.navigateTo(myAccountPage.wishListButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.wishlistURL))
    //Navigate to Notification page
    await commonFunctions.navigateTo(myAccountPage.notificationButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.notificationURL))
    //Open Account page
    await page.goto(Var.accountURL);    
    //Navigate to Order History page
    await commonFunctions.navigateTo(myAccountPage.orderHistoryButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.orderHistoryURL))
    //Navigate to Downloads page
    await commonFunctions.navigateTo(myAccountPage.downloadsButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.downloadsURL))
    //Navigate to Recurring page
    await commonFunctions.navigateTo(myAccountPage.recurringPaymentsButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.recurringPaymentsURL))
    //Navigate to Rewards Points page
    await commonFunctions.navigateTo(myAccountPage.rewardsPointsButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.rewardPointsURL))
    //Navigate to Returns page
    await commonFunctions.navigateTo(myAccountPage.returnsButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.returnsURL))
    //Navigate to Transactions page
    await commonFunctions.navigateTo(myAccountPage.transactionsButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.transactionURL))
    //Navigate to Newsletter page
    await commonFunctions.navigateTo(myAccountPage.newsletterButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.newsletterURL))    
    //Navigate to Logout page
    await commonFunctions.navigateTo(myAccountPage.logOutButtonFromMyAccountPage);
    expect (await page.waitForURL(Var.logOutURL))    
})