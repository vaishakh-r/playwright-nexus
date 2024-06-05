
import { Page } from "@playwright/test"
import { BasePage } from "./BasePage"
import { homePageLocators } from "../locators/HomePageLocators.ts"
import { orderPageLocators } from "../locators/OrderPageLocators.ts"

export class HomePage extends BasePage{

    constructor(page: Page) {
        super(page)
    }

    async navigateTo(){
        await this.page.goto("https://www.saucedemo.com/");
    }


    async loginWith(username: string, password: string) {

        await homePageLocators.usernameTextField(this.page).fill(username)
        await homePageLocators.passwordTextField(this.page).fill(password)
        await homePageLocators.loginButton(this.page).click();
        await this.page.waitForTimeout(2000);

    }

}
