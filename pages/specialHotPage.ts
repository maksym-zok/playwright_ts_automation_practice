import { Page, expect } from "@playwright/test";
export default class SpecialHotPage {

    constructor(public page: Page){
        
    }
    async addTheFirstProductToTheCard(){
        await this.page.click("(//a[contains(text(),'Desktops')])[3]")
        await this.page.hover("(//div[@class='image']//a)[1]")
        // await this.page.waitForTimeout(2000)
        await this.page.waitForLoadState('load');
        await this.page.locator("//button[@title='Add to Cart']").nth(0).waitFor({state: "visible"})
        await this.page.locator("//button[@title='Add to Cart']").nth(0).click()
    }
    async isToastIsVisiable(){
        const toast = this.page.locator("//a[text()='View Cart ']")
        await this.page.waitForLoadState('load');
        await toast.waitFor({state: "visible"})
        return toast
    }
}