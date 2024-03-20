import { Locator, Page } from "@playwright/test";
import {expect, test} from '../base/pomFixture';
import HomePage from "../pages/homePage.ts";
import CommonFunctions from "../utils/commonFunctions";
export default class MyAccountPage {
    readonly logOutButtonLocator: string;
    readonly logInButtonLocator: string;
    readonly loginButtonFromLoginForm: string;
    readonly emailInputBox: string;
    readonly passwordInputBox: string;
    readonly warningInvalidCredentials: string;
    readonly warningExceededAllowedNumberOfLoginAttempts: string;
    readonly loginButtonFromMyAccountPage: Locator;
    readonly registerButtonFromMyAccountPage: Locator;
    readonly forgottenPasswordButtonFromMyAccountPage: Locator;
    readonly myAccountButtonFromMyAccountPage: Locator;
    readonly addressBookButtonFromMyAccountPage: Locator;
    readonly wishListButtonFromMyAccountPage: Locator;
    readonly orderHistoryButtonFromMyAccountPage: Locator;
    readonly downloadsButtonFromMyAccountPage: Locator;
    readonly recurringPaymentsButtonFromMyAccountPage: Locator;
    readonly rewardsPointsButtonFromMyAccountPage: Locator;
    readonly returnsButtonFromMyAccountPage: Locator;
    readonly transactionsButtonFromMyAccountPage: Locator;
    readonly newsletterButtonFromMyAccountPage: Locator;
    readonly editAccountButtonFromMyAccountPage: Locator;
    readonly passwordButtonFromMyAccountPage: Locator;
    readonly notificationButtonFromMyAccountPage: Locator;
    readonly logOutButtonFromMyAccountPage: Locator;

    constructor(public page: Page){
    this.logOutButtonLocator = "//*[@data-toggle='dropdown']/..//a[contains(.,'Logout')]";
    this.logInButtonLocator = "//span[text()[normalize-space()='Login']]";
    this.loginButtonFromLoginForm = "//input[@value='Login']";
    this.emailInputBox = "#input-email";
    this.passwordInputBox = "#input-password";
    this.warningInvalidCredentials = "//div[text()=' Warning: No match for E-Mail Address and/or Password.']";
    this.warningExceededAllowedNumberOfLoginAttempts = "//div[text()=' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.']";
    this.loginButtonFromMyAccountPage = page.locator("//a[contains(text(),'Login')]");
    this.registerButtonFromMyAccountPage = page.locator("//a[contains(text(),'Register')]");
    this.forgottenPasswordButtonFromMyAccountPage = page.locator("//a[text()='Forgotten Password']");
    this.myAccountButtonFromMyAccountPage = page.locator("//a[contains(text(),'My Account')]");
    this.addressBookButtonFromMyAccountPage = page.locator("//a[contains(text(),'Address Book')]");
    this.wishListButtonFromMyAccountPage = page.locator("//a[contains(text(),'Wish List')]");
    this.orderHistoryButtonFromMyAccountPage = page.locator("//a[contains(text(),'Order History')]");
    this.downloadsButtonFromMyAccountPage = page.locator("//a[contains(text(),'Downloads')]");
    this.recurringPaymentsButtonFromMyAccountPage = page.locator("//a[contains(text(),'Recurring payments')]");
    this.rewardsPointsButtonFromMyAccountPage = page.locator("//a[contains(text(),'Reward Points')]");
    this.returnsButtonFromMyAccountPage = page.locator("//a[contains(text(),'Returns')]");
    this.transactionsButtonFromMyAccountPage = page.locator("//a[contains(text(),'Transactions')]");
    this.newsletterButtonFromMyAccountPage = page.locator("//a[contains(text(),'Newsletter')]");
    this.editAccountButtonFromMyAccountPage = page.locator("//a[contains(text(),'Edit Account')]");
    this.passwordButtonFromMyAccountPage = page.locator("//a[contains(text(),'Password')]");
    this.notificationButtonFromMyAccountPage = page.locator("//a[contains(text(),'Notification')]");
    this.logOutButtonFromMyAccountPage= page.locator("//a[contains(text(),'Logout')]");
    }
    
    async login(email: string, password: string){
        const commonFunctions = new CommonFunctions(this.page);
        await this.enterInputValue(this.emailInputBox, email);
        await this.enterInputValue(this.passwordInputBox, password);
        await commonFunctions.clickOn(this.loginButtonFromLoginForm)
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