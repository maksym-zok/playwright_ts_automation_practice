import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"
import * as Var from "../test-data/variables.ts"

test.afterEach(async({page, addToCartPage}) => {
    await page.goto(Var.cartURL);
    await addToCartPage.removeAllItemsWithNameFromCart("")
});

test.describe("Basic Add to Cart actions", () => {
    test("Add to cart test_01", async({page, loginPage, homePage, specialHotPage, addToCartPage}) => {
        // Open a Login page
        await page.goto(Var.loginURL);
        // Login
        await loginPage.login(data.email, data.password);
        // Navigate to Special Hot Menu Page
        await homePage.navigateTo(homePage.specialHotMenuButtonLocator);
        // Click on Desktop category
        await homePage.navigateTo(specialHotPage.desktopCategoryLocator);
        // Add a Product HTC Touch HD to Cart
        await specialHotPage.addAProductWithNameTo("HTC Touch HD", specialHotPage.productAddToCartButton);
        // Add to Cart popUp appeared
        await specialHotPage.isPopUpVisiable(specialHotPage.addToCartPopUpLocator);
        // Open a Cart page
        await page.goto(Var.cartURL);
        // Verify that item has beed added to the cart
        await addToCartPage.verifyElementPresenceInCart("HTC Touch HD");
    })
})