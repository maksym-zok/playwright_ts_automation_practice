import { expect, test } from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import SpecialHotPage from '../pages/specialHotPage';

const email = "TestMail_04@gmail.com";
const password = "testPass";

test("Register test_01", async({page, baseURL}) => {
    const register = new RegisterPage(page)
    await page.goto(`${baseURL}route=account/register`)
    await register.enterFirstName("TestName")
    await register.enterLastName("TestName")
    await register.enterEmail(email)
    await register.enterPhoneNumber("12345678")
    await register.enterPassword(password)
    await register.enterConfirmPassword(password)
    await register.isSubscribeChecked()
    await register.clickTermsCondition()
    await register.clickToContinue()
    expect(await page.title()).toBe("Your Account Has Been Created!")
})

test("Login test_01", async({page, baseURL}) => {
    const login = new LoginPage(page)
    await page.goto(`${baseURL}route=account/login`)
    await login.login(email, password)
})

test("Add to cart test_01", async({page, baseURL}) => {
    const login = new LoginPage(page)
    const homePage = new HomePage(page)
    const special = new SpecialHotPage(page)
    await page.goto(`${baseURL}route=account/login`)
    await login.login(email, password)
    await homePage.clickOnSpecialHotMenuButton()
    await special.addTheFirstProductToTheCard()
    await special.isToastIsVisiable()
})