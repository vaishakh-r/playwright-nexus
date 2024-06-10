
// import { HomePage } from "../pages/HomePage";
// import { OrderPage } from "../pages/OrderPage";

import test from '../fixtures/customtest';

test("Login to Sauce Demo and add item to cart", async ( {page, homePage, orderPage, excelUtil} ) => {
    
    // This was the earlier implementation using page object created each time 
    // whenever being referenced in test file

    // ###
    //let homePage = new HomePage(page); -> Earlier Implementation
    //let orderPage = new OrderPage(page);
    // ####

    let itemName = "Sauce Labs Backpack";
    let username = excelUtil.getValue("userlist",0,"username");

    await homePage.navigateTo();
    await homePage.loginWith("standard_user", "secret_sauce");
    await orderPage.addProductToCart(itemName);
    await orderPage.verifyRemoveToCartButtonDisplayed(itemName);

});