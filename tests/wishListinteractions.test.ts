import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json";
import * as Var from "../test-data/variables.ts"

test.afterEach(async({page, wishListPage}) => {
    await page.goto(Var.wishlistURL);
    await wishListPage.removeAllItemsWithNameFromWishList("")
});

test.describe("Basic Wishlist actions", () => {
    test("Wishlist opens when user is logged in", async({page, myAccountPage, homePage, commonFunctions}) => {
        // Open a Login page
        await page.goto(Var.loginURL);
        // Login
        await myAccountPage.login(data.validData.email, data.validData.password);
        // Verify that user is logged in
        await myAccountPage.verifyUserState('LoggedIn');
        // User navigates to Wishlist page
        await commonFunctions.navigateTo(homePage.wishlistLocator);
    })
    test("Rediraction from 'Wishlist' page to 'Login' page when user is not logged in", async({page, myAccountPage}) => {
        // Open a Wishlist page
        await page.goto(Var.wishlistURL);
        // Verify that user is logged out
        await myAccountPage.verifyUserState('LoggedOut');
        // User is redirected to Login page
        await expect(page).toHaveURL(Var.loginURL) ;
    })
    test("Adding 'HTC Touch HD' product from Desktop category to wishlist", async({page, myAccountPage, homePage, specialHotPage, wishListPage, commonFunctions}) => {
        // Open a Login page
        await page.goto(Var.loginURL);
        // Login
        await myAccountPage.login(data.validData.email, data.validData.password);
        // Navigate to Special Hot Menu Page
        await commonFunctions.navigateTo(homePage.specialHotMenuButtonLocator)
        // Click on Desktop category
        await commonFunctions.navigateTo(specialHotPage.desktopCategoryLocator);
        // Add a Product HTC Touch HD to Wishlist
        await specialHotPage.addAProductWithNameTo(specialHotPage.productAddToWishListButton, "HTC Touch HD");
        // Wishlist popUp appeared
        await specialHotPage.isPopUpVisiable(specialHotPage.wishListPopUpLocator);
        // Open a Wishlist page
        await page.goto(Var.wishlistURL);
        // Verify that item has beed added to the wishlist
        await commonFunctions.checkElementPresence(wishListPage.wishListItemsTable, "HTC Touch HD")
    });
})