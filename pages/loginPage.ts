import { Page, expect } from "@playwright/test";
export default class LoginPage {

    constructor(public page: Page){

    }
    async login(email: string, password: string){
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLogin();
        expect(await this.page.title()).toBe("My Account")
    }
    async enterEmail(email: string){
        await this.page.fill("#input-email", email)
    }
    async enterLoginPassword(loginPassword: string){
        await this.page.fill("#input-password", loginPassword)
    }
    async clickLogin(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//input[@value='Login']")
        ])
    }
}