import { Page } from "@playwright/test";
import {expect, test} from '../base/pomFixture';
import HomePage from "../pages/homePage.ts";
import CommonFunctions from "../utils/commonFunctions";
export default class LoginPage {
    readonly logOutButtonLocator: string;
    readonly logInButtonLocator: string;
    readonly loginButtonFromLoginForm: string;
    readonly emailInputBox: string;
    readonly passwordInputBox: string;

    constructor(public page: Page){
    this.logOutButtonLocator = "//*[@data-toggle='dropdown']/..//a[contains(.,'Logout')]";
    this.logInButtonLocator = "//span[text()[normalize-space()='Login']]";
    this.loginButtonFromLoginForm = "//input[@value='Login']";
    this.emailInputBox = "#input-email";
    this.passwordInputBox = "#input-password";
    }
    
    async login(email: string, password: string){
        const commonFunctions = new CommonFunctions(this.page);
        await this.enterInputValue(this.emailInputBox, email);
        await this.enterInputValue(this.passwordInputBox, password);
        await commonFunctions.clickOn(this.loginButtonFromLoginForm)
        expect(await this.page.title()).toBe("My Account")
    }
    async enterInputValue(selector: string, value: string) {
        await this.page.fill(selector, value);
    }
    async verifyUserState(locator: string, expectedState: string) {
        const homePage = new HomePage(this.page);
        const commonFunctions = new CommonFunctions(this.page);
        const elementName = expectedState === 'loggedIn' ? 'Logout button' : 'Login button';
        const locatorToCheck = expectedState === 'loggedIn' ? locator : this.logInButtonLocator;
        await commonFunctions.verifyElementPresence(locatorToCheck, elementName);
    }
}