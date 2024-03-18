import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"
import * as Var from "../test-data/variables.ts"

test("Add to cart test_01", async({page, baseURL, loginPage, homePage, specialHotPage}) => {
    // Open a Login page
    await page.goto(Var.loginURL)
    // Login
    await loginPage.login(data.email, data.password, homePage)
    // Navigate to Special Hot Menu Page
    await homePage.navigateTo(homePage.specialHotMenuButtonLocator)
    // Click on Desktop category
    await homePage.navigateTo(specialHotPage.desktopCategoryLocator)
    // Add a Product HTC Touch HD to Cart
    await specialHotPage.addAProductWithNameTo("HTC Touch HD", specialHotPage.productAddToCartButton)
    // Add to Cart popUp appeared
    await specialHotPage.isPopUpVisiable(specialHotPage.addToCartPopUpLocator)
})
