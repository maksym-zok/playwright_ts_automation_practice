import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"

test("Add to cart test_01", async({page, baseURL, loginPage, homePage, specialHotPage}) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(data.email, data.password, homePage)
    await homePage.navigateTo(homePage.specialHotMenuButtonLocator)
    await homePage.navigateTo(specialHotPage.desktopCategoryLocator)
    await specialHotPage.addAProductWithNameTo("HTC Touch HD", specialHotPage.productAddToCartButton)
    await specialHotPage.isPopUpVisiable(specialHotPage.addToCartPopUpLocator)
})
