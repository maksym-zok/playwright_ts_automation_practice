import { Page, Locator,} from "@playwright/test";
import { expect, test, } from '../base/pomFixture';
import HomePage from "../pages/homePage";


export async function performWishlistClickAction(page: Page, Locator: string) {
    let removeLinks = await page.locator(Locator).count();
    while (removeLinks > 0) {
        await Promise.all([
            page.locator(Locator).nth(0).click(),
            page.waitForNavigation({ waitUntil: 'networkidle' }),
            page.waitForLoadState('domcontentloaded')
        ]);
        removeLinks = await page.locator(Locator).count();
    }
}