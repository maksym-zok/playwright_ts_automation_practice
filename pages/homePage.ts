import { Page } from "@playwright/test";
export default class HomePage {

    constructor(public page: Page){
        
    }
    async clickOnSpecialHotMenuButton(){
        await this.page.click("(//*[contains(text(),' Special')]/../../../a)[2]")
    }
}