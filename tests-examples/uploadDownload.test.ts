import {test, expect} from "@playwright/test";
import {uploadDownload} from "../pages/uploadDownload";

test("Download files", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await uploadDownload.downloadFileWithText(page, "Test data for downloading!");
})
test("Upload files", async ({page}) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await uploadDownload.uploadFile(page, "uploadFiles/rocky-beach-boat-3840x2160-11681.jpg")
})