import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json";
import * as Var from "../test-data/variables.ts"

test.afterEach(async({page, wishListPage}) => {
    await page.goto(Var.wishlistURL);
    await wishListPage.removeAllItemsWithNameFromWishList("")
});

test.describe("Basic Wishlist actions", () => {
    test("Wishlist opens when user is logged in", async({page, loginPage, homePage}) => {
        // Open a Login page
        await page.goto(Var.loginURL);
        // Login
        await loginPage.login(data.email, data.password);
        // Verify that user is logged in
        await loginPage.verifyUserState(loginPage.logOutButtonLocator, 'loggedIn');
        // User navigates to Wishlist page
        await homePage.navigateTo(homePage.wishlistLocator);
    })
    test("Rediraction from 'Wishlist' page to 'Login' page when user is not logged in", async({page, loginPage}) => {
        // Open a Wishlist page
        await page.goto(Var.wishlistURL);
        // Verify that user is logged out
        await loginPage.verifyUserState(loginPage.logInButtonLocator, 'loggedOut');
        // User is redirected to Login page
        await expect(page).toHaveURL(Var.loginURL) ;
    })
    test("Adding 'HTC Touch HD' product from Desktop category to wishlist", async({page, loginPage, homePage, specialHotPage, wishListPage, commonFunctions}) => {
        // Open a Login page
        await page.goto(Var.loginURL);
        // Login
        await loginPage.login(data.email, data.password);
        // Navigate to Special Hot Menu Page
        await homePage.navigateTo(homePage.specialHotMenuButtonLocator)
        // Click on Desktop category
        await homePage.navigateTo(specialHotPage.desktopCategoryLocator);
        // Add a Product HTC Touch HD to Wishlist
        await specialHotPage.addAProductWithNameTo("HTC Touch HD", specialHotPage.productAddToWishListButton);
        // Wishlist popUp appeared
        await specialHotPage.isPopUpVisiable(specialHotPage.wishListPopUpLocator);
        // Open a Wishlist page
        await page.goto(Var.wishlistURL);
        // Verify that item has beed added to the wishlist
        await wishListPage.verifyElementPresenceInWishList("HTC Touch HD")
    });
})