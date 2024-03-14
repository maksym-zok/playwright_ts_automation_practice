import { Locator, Page, expect } from "@playwright/test";
export default class SpecialHotPage {
        readonly desktopCategoryLocator: Locator;
        readonly laptopsCategoryLocator: Locator;
        readonly componentsCategoryLocator: Locator;
        readonly tabletsCategoryLocator: Locator;
        readonly softwareCategoryLocator: Locator;
        readonly phonesAndPDAsCategoryLocator: Locator;
        readonly camerasCategoryLocator: Locator;
        readonly mp3PlayersCategoryLocator: Locator;
        readonly productCaption: string;
        readonly productImage: string;
        readonly productAddToCartButton: string;
        readonly productAddToWishListButton: string;
        readonly productQuickView: string;
        readonly productComparethisProduct: string;
        readonly popUpToastLocator: string;
        readonly wishListPopUpLocator: string;
        readonly addToCartPopUpLocator: string;
        readonly notificationPopUp: string;

    constructor(public page: Page, productName: string){
        this.desktopCategoryLocator = page.locator("(//a[contains(text(),'Desktops')])[3]");
        this.laptopsCategoryLocator = page.locator("(//a[contains(text(),'Laptops')])[3]");
        this.componentsCategoryLocator = page.locator("(//a[contains(text(),'Components')])[3]");
        this.tabletsCategoryLocator = page.locator("(//a[contains(text(),'Tablets')])[3]");
        this.softwareCategoryLocator = page.locator("(//a[contains(text(),'Software')])[3]");
        this.phonesAndPDAsCategoryLocator = page.locator("(//a[contains(text(),'Phones & PDAs')])[3]");
        this.camerasCategoryLocator = page.locator("(//a[contains(text(),'Cameras')])[3]");
        this.mp3PlayersCategoryLocator = page.locator("(//a[contains(text(),'MP3 Players')])[3]");
        this.productCaption = `//div[@class="product-thumb"]//div[@class="caption"]`;
        this.productImage = "//div[@class='image']";
        this.productAddToCartButton = "//button[@title='Add to Cart']";
        this.productAddToWishListButton = "//button[@title='Add to Wish List']";
        this.productQuickView = "//button[@title='Quick view']"
        this.productComparethisProduct = "//button[@title='Compare this Product']"
        this.popUpToastLocator = "//div[@id='notification-box-top']";
        this.wishListPopUpLocator = "//div[@id='notification-box-top']//span[contains(text(),'Wish List')]";
        this.addToCartPopUpLocator = "//div[@id='notification-box-top']//a[text()='View Cart ']"

    }

    async addAProductWithNameTo(productName: string, to: string){
        await this.page.hover(`${this.productCaption}//a[contains(text(), "${productName}")]/../../..${this.productImage}`);
        await this.page.waitForLoadState('load');
        await this.page.locator(`${this.productCaption}//a[contains(text(), "${productName}")]/../../..${to}`).nth(0).waitFor({state: "visible"});
        await this.page.locator(`${this.productCaption}//a[contains(text(), "${productName}")]/../../..${to}`).nth(0).click();
    }

    async isPopUpVisiable(popUpType: string){
        const toast = this.page.locator(`${popUpType}`);
        await this.page.waitForLoadState('load');
        await toast.waitFor({state: "visible"});
        return toast;
    }
}