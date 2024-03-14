import { expect, test, } from '../base/pomFixture';
import HomePage from "../pages/homePage.ts";

test.describe('Checking the menu buttons in the header', () => {

    test("Navigate to Special hot page from Home page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a home page
        await page.goto(`${baseURL}route=common/home`)
        // Click on "Special Hot" button
        await homePage.navigateTo(homePage.specialHotMenuButtonLocator);
        // "Special Hot" page is opened
        expect (await page.waitForURL(`${baseURL}route=product/special`))
    })

    test("Navigate to Home page from Special Hot page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a "Special Hot"
        await page.goto(`${baseURL}route=product/special`)
        // Click on "Home" button
        await homePage.navigateTo(homePage.homeButtonLocator);
        // "Home" page is opened
        expect (await page.waitForURL(`${baseURL}route=common/home`))
    })

    test("Navigate to Blog page from Home page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a "Home" page
        await page.goto(`${baseURL}route=common/home`)
        // Click on "Blog" button
        await homePage.navigateTo(homePage.blogButtonLocar);
        // "Blog" page is opened
        expect (await page.waitForURL(`${baseURL}route=extension/maza/blog/home`))
    })

    test("Navigate to My account page from Home page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a "Home" page
        await page.goto(`${baseURL}route=common/home`)
        // Click on "My Account" button
        await homePage.navigateTo(homePage.myAccountLocator);
        // "My account" page is opened
        expect (await page.waitForURL(`${baseURL}route=account/loginSSSSSSSSSSSSS`))
    })

    test("'Shop by category' menu opening/closing", async({page, baseURL}) => {
        const homePage = new HomePage(page);
        // Open a "Home" page
        await page.goto(`${baseURL}route=common/home`);
        // Verify that "Shop by category" menu is closed
        await homePage.shopByCategoryMenuState(homePage.shopByCategoryMenuClosedLocator);
        // Open "Shop by category" menu
        await homePage.navigateTo(homePage.shopByCategoryButtonLocator);
        // Verify that "Shop by category" menu is opened
        await homePage.shopByCategoryMenuState(homePage.shopByCategoryMenuOpenedLocator);
    })
})

test("Verify Homepage Elements", async({page, baseURL}) =>{
    const homePage = new HomePage(page);
    // Open a "Home" page
    await page.goto(`${baseURL}route=common/home`);
    // Verify the presence of the logo.
    await homePage.verifyElementPresence(homePage.logoSelector, 'Logo');
    // Verify the visibility of the main menu.
    await homePage.verifyElementPresence(homePage.mainMenuLocator, 'Main Menu');
    // Check if the search bar is present.
    await homePage.verifyElementPresence(homePage.searchBarLocator, 'Search Bar');
    // Check for the main block of the home page
    await homePage.verifyElementPresence(homePage.mainBlockLocator, 'Main Block');
    // Check if the footer is present.
    await homePage.verifyElementPresence(homePage.footerLocator, 'Footer');
})