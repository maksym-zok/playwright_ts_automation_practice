import { expect, test, } from '../base/pomFixture';
import HomePage from "../pages/homePage.ts";

test.describe('Checking the menu buttons in the header', () => {

    test("Navigate to Special hot page from Home page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a home page
        await page.goto(`${baseURL}route=common/home`)
        // Click on "Special Hot" button
        await homePage.navigateToSpecialHotPage();
        // "Special Hot" page is opened
        expect (await page.waitForURL(`${baseURL}route=product/special`))
    })

    test("Navigate to Home page from Special Hot page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a "Special Hot"
        await page.goto(`${baseURL}route=product/special`)
        // Click on "Home" button
        await homePage.navigateToHomePage();
        // "Home" page is opened
        expect (await page.waitForURL(`${baseURL}route=common/home`))
    })

    test("Navigate to Blog page from Home page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a "Home" page
        await page.goto(`${baseURL}route=common/home`)
        // Click on "Blog" button
        await homePage.navigateToBlogPage();
        // "Blog" page is opened
        expect (await page.waitForURL(`${baseURL}route=extension/maza/blog/home`))
    })

    test("Navigate to My account page from Home page", async ({ page, baseURL }) => {
        const homePage = new HomePage(page);
        // Open a "Home" page
        await page.goto(`${baseURL}route=common/home`)
        // Click on "My Account" button
        await homePage.navigateToMyAccountPage();
        // "My account" page is opened
        expect (await page.waitForURL(`${baseURL}route=account/loginSSSSSSSSSSSSS`))
    })

    test("'Shop by category' menu opening/closing", async({page, baseURL}) => {
        const homePage = new HomePage(page);
        // Open a "Home" page
        await page.goto(`${baseURL}route=common/home`);
        // Verify that "Shop by category" menu is closed
        await homePage.shopByCategoryMenuClosed();
        // Open "Shop by category" menu
        await homePage.clickOnShopByCategoryButton();
        // Verify that "Shop by category" menu is opened
        await homePage.shopByCategoryMenuOpened();
    })
})

test("Verify Homepage Elements", async({page, baseURL}) =>{
    const homePage = new HomePage(page);
    // Open a "Home" page
    await page.goto(`${baseURL}route=common/home`);
    // Verify the presence of the logo.
    await homePage.verifyLogoPresence();
    // Verify the visibility of the main menu.
    await homePage.verifyMainMenuPresence();
    // Check if the search bar is present.
    await homePage.verifySearchBarPresence();
    // Check for the main block of the home page
    await homePage.verifyMainBlockPresence();
    // Check if the footer is present.
    await homePage.verifyFooterPresence();
})
