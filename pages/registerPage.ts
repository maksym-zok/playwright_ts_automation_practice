import { Page } from "@playwright/test";
export default class RegisterPage {

    constructor(public page: Page){

    }
    async enterFirstName(firstName: string){
        await this.page.fill("#input-firstname", firstName)
    }
    async enterLastName(lastName: string){
        await this.page.fill("#input-lastname", lastName)
    }
    async enterEmail(email: string){
        await this.page.fill("#input-email", email)
    }
    async enterPhoneNumber(phoneNumber: string){
        await this.page.fill("#input-telephone", phoneNumber)
    }
    async enterPassword(password: string){
        await this.page.fill("#input-password", password)
    }
    async enterConfirmPassword(confirmPassword: string){
        await this.page.fill("#input-confirm", confirmPassword)
    }
    async isSubscribeChecked(){
        await this.page.locator("#input-newsletter-no").isChecked()
    }
    async clickTermsCondition(){
        await this.page.click("//label[@for='input-agree']")
    }
    async clickToContinue() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.click("//input[@value='Continue']")
        ])
    }
}