
import { Page, expect } from "@playwright/test"
import { BasePage } from "./BasePage"
import { homePageLocators } from "../locators/HomePageLocators.ts"
import { orderPageLocators } from "../locators/OrderPageLocators.ts"

export class OrderPage extends BasePage{

    constructor(page: Page) {
        super(page)
    }

    async addProductToCart(producTitle: string) {
        let addToCartButton = orderPageLocators.productAddToCartButton(producTitle);
        // Use ` in string interpolation
        console.log(`Locator used: ${addToCartButton}`)
        await this.page.locator(addToCartButton).click();
        await this.page.waitForTimeout(1000);
}

    async verifyRemoveToCartButtonDisplayed(producTitle: string){
        let removeCartButton = orderPageLocators.productRemoveFromCartButton(producTitle);
        console.log(`Locator used: ${removeCartButton}`)
        await  expect (this.page.locator(removeCartButton)).toBeVisible();
    }

}
