import { Page } from "@playwright/test";
import CommonFunctions from "../utils/commonFunctions";

export default class RegisterPage {
    readonly firstName;
    readonly lastName;
    readonly email;
    readonly phoneNumber;
    readonly password;
    readonly confirmPassword;
    readonly subscribeRadioButton;
    readonly termsConditionCheckbox;
    readonly continueButton;

    constructor(public page: Page){
    this.firstName = "#input-firstname";
    this.lastName = "#input-lastname";
    this.email = "#input-email";
    this.phoneNumber = "#input-telephone";
    this.password = "#input-password";
    this.confirmPassword = "#input-confirm";
    this.subscribeRadioButton = "#input-newsletter-no";
    this.termsConditionCheckbox = "//label[@for='input-agree']";
    this.continueButton = "//input[@value='Continue']";
    }
    async registerNewUser(enterFirstName: string, enterLastName: string, enterEmail: string, enterPhoneNumber: string, enterPassword: string, enterConfirmPassword: string){
        const commonFunctions = new CommonFunctions(this.page);
        await commonFunctions.enterInputValue(this.firstName, enterFirstName);
        await commonFunctions.enterInputValue(this.lastName, enterLastName);
        await commonFunctions.enterInputValue(this.email, enterEmail);
        await commonFunctions.enterInputValue(this.phoneNumber, enterPhoneNumber);
        await commonFunctions.enterInputValue(this.password, enterPassword);
        await commonFunctions.enterInputValue(this.confirmPassword, enterConfirmPassword);
        await this.page.locator(this.subscribeRadioButton).isChecked()
        await this.page.click(this.termsConditionCheckbox)
        await commonFunctions.clickOn(this.continueButton)
    }
}