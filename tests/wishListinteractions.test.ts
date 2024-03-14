import { expect, test, } from '../base/pomFixture';
import LoginPage from "../pages/loginPage.ts";
import HomePage from "../pages/homePage.ts";
import SpecialHotPage from "../pages/specialHotPage.ts";
import * as data from "../test-data/addToCart-test-data.json";

test("'Wishlist' opens when user is logged in", async({page, baseURL, loginPage, homePage}) => {
    // Open a Login page
    await page.goto(`${baseURL}route=account/login`);
    // Login
    await loginPage.login(data.email, data.password, homePage);
    // Verify that user is logged in
    await loginPage.verifyUserState(page, loginPage.logOutButtonLocator, 'loggedIn');
    // User navigates to Wishlist page
    await homePage.navigateTo(homePage.wishlistLocator);
})
test("Rediraction from 'Wishlist' page to 'Login' page when user is not logged in", async({page, baseURL, loginPage}) => {
    // Open a Wishlist page
    await page.goto(`${baseURL}route=account/wishlist`);
    // Verify that user is logged out
    await loginPage.verifyUserState(page, loginPage.logInButtonLocator, 'loggedOut');
    // User is redirected to Login page
    await expect(page).toHaveURL(`${baseURL}route=account/login`) ;
})
test("Adding a first product from Desktop category to wishlist", async({page, baseURL, loginPage, homePage, specialHotPage}) => {
    // Open a Login page
    await page.goto(`${baseURL}route=account/login`);
    // Login
    await loginPage.login(data.email, data.password, homePage);
    // Navigate to Special Hot Menu Page
    await homePage.navigateTo(homePage.specialHotMenuButtonLocator)
    // Click on Desktop category
    await homePage.navigateTo(specialHotPage.desktopCategoryLocator);
    // Add a Product HTC Touch HD to Wishlist
    await specialHotPage.addAProductWithNameTo("HTC Touch HD", specialHotPage.productAddToWishListButton);
    // Wishlist popUp appeared
    await specialHotPage.isPopUpVisiable(specialHotPage.wishListPopUpLocator);
})