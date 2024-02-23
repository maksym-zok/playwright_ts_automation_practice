import {expect, type Locator, type Page, test} from '@playwright/test';

export class uploadDownload {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    static async downloadFileWithText(page: Page, text: string) {
        await page.type("#textbox", text);
        await page.click("id=create");
        const download = await Promise.all([
            page.waitForEvent("download"),
            page.click("id=link-to-download")
        ]);
        const fileName = await download[0].suggestedFilename();
        await download[0].saveAs(fileName);
        }
    static async uploadFile(page: Page, fileLocation: string) {
        await page.setInputFiles("//input[@type='file']", ([fileLocation]));
    }
}