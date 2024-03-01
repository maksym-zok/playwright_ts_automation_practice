import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"

test("Add to cart test_01", async({page, baseURL, loginPage, homePage, specialHotPage}) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.login(data.email, data.password)
    await homePage.navigateToSpecialHotPage()
    await specialHotPage.addTheFirstProductToTheCard()
    await specialHotPage.isToastIsVisiable()
})
