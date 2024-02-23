import {test, expect} from "@playwright/test"
import { log } from "console";

test("Interact with frames", async({page}) =>{
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("Number of frames = " + allframes.length);
    const myFrame = page.frame("firstFr");
    const innerFrame = myFrame?.frameLocator("//iframe[@src='innerFrame']");

    await myFrame?.fill("//input[@name='fname']", "Maksym");
    await myFrame?.fill("//input[@name='lname']", "Hlyva");
    await innerFrame?.locator("//input[@name='email']").fill("mhly@gmail.com");

    expect(await myFrame?.locator("//p[@class='title has-text-info']").textContent()).toContain("Maksym Hlyva");
    await page.waitForTimeout(3000);
})

test("Interact with multiple tabs (Twitter)", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'"),
    ])
    console.log(newWindow.url());
})

test("Interact with multiple tabs (Twitter and Facebook)", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const [multipleWindows] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow Twitter & Facebook'"),
    ])
    await page.waitForLoadState();
    const pages = multipleWindows.context().pages()
    console.log("# of pages: " + pages.length);

    let facebookPage;
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }        
    }
    const facebookTextH1 = await facebookPage.textContent("//h1")
    console.log(facebookTextH1);
     
    pages.forEach(tab => {
        console.log(tab.url());
    })
})