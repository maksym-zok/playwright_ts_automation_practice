import { expect, test, } from '../base/pomFixture';
import * as Var from "../test-data/variables.ts";

test.describe('Checking the menu buttons in the header', () => {

    test("Navigate to Special hot page from Home page", async ({ page, homePage, commonFunctions}) => {
        // Open a home page
        await page.goto(Var.homeURL)
        // Click on "Special Hot" button
        await commonFunctions.navigateTo(homePage.specialHotMenuButtonLocator);
        // "Special Hot" page is opened
        expect (await page.waitForURL(Var.specialHotURL))
    })

    test("Navigate to Home page from Special Hot page", async ({ page, homePage, commonFunctions}) => {
        // Open a "Special Hot"
        await page.goto(Var.specialHotURL);
        // Click on "Home" button
        await commonFunctions.navigateTo(homePage.homeButtonLocator);
        // "Home" page is opened
        expect (await page.waitForURL(Var.homeURL));
    })

    test("Navigate to Blog page from Home page", async ({ page, homePage, commonFunctions}) => {
        // Open a "Home" page
        await page.goto(Var.homeURL);
        // Click on "Blog" button
        await commonFunctions.navigateTo(homePage.blogButtonLocar);
        // "Blog" page is opened
        expect (await page.waitForURL(Var.blogURL));
    })
    test("Navigate to My account page from Home page", async ({ page, homePage, commonFunctions}) => {
        // Open a "Home" page
        await page.goto(Var.homeURL)
        // Click on "My Account" button
        await commonFunctions.navigateTo(homePage.myAccountLocator);
        // "My account" page is opened
        expect (await page.waitForURL(Var.loginURL))
    })
    test("'Shop by category' menu opening/closing", async({page, homePage, commonFunctions}) => {
        // Open a "Home" page
        await page.goto(Var.homeURL);
        // Verify that "Shop by category" menu is closed
        await homePage.shopByCategoryMenuState(homePage.shopByCategoryMenuClosedLocator);
        // Open "Shop by category" menu
        await commonFunctions.navigateTo(homePage.shopByCategoryButtonLocator);
        // Verify that "Shop by category" menu is opened
        await homePage.shopByCategoryMenuState(homePage.shopByCategoryMenuOpenedLocator);
    })
})

test("Verify Homepage Elements", async({page, homePage, commonFunctions}) =>{
    // Open a "Home" page
    await page.goto(Var.homeURL);
    // Verify the presence of the logo.
    await commonFunctions.checkElementPresence(homePage.logoSelector);
    // Verify the visibility of the main menu.
    await commonFunctions.checkElementPresence(homePage.mainMenuLocator);
    // Check if the search bar is present.
    await commonFunctions.checkElementPresence(homePage.searchBarLocator);
    // Check for the main block of the home page
    await commonFunctions.checkElementPresence(homePage.mainBlockLocator);
    // Check if the footer is present.
    await commonFunctions.checkElementPresence(homePage.footerLocator);
})