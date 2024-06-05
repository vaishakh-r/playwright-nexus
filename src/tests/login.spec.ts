
// import { HomePage } from "../pages/HomePage";
// import { OrderPage } from "../pages/OrderPage";

import test from '../fixtures/customtest';

test("Login to Sauce Demo and add item to cart", async ( {page, homePage, orderPage} ) => {
    //let homePage = new HomePage(page); -> Earlier Implementation
    //let orderPage = new OrderPage(page);
    let itemName = "Sauce Labs Backpack";
    await homePage.navigateTo();
    await homePage.loginWith("standard_user", "secret_sauce");
    await orderPage.addProductToCart(itemName);
    await orderPage.verifyRemoveToCartButtonDisplayed(itemName);

});