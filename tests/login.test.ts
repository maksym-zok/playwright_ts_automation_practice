import { expect, test, } from '../base/pomFixture';
import * as data from "../test-data/addToCart-test-data.json"
import * as Var from "../test-data/variables.ts"

test("Login test_01", async({page, baseURL, loginPage, homePage}) => {
    // Open a Login page
    await page.goto(Var.loginURL)
    // Login
    await loginPage.login(data.email, data.password, homePage)
})