import {test} from "@playwright/test"
import { HomePage } from "../pages/HomePage";
import { OrderPage } from "../pages/OrderPage";


test("Login to Sauce Demo and add item to cart", async ( { page } ) => {
 //   let homePage: HomePage = new HomePage(page);

      let itemName = "Sauce Labs Backpack";
      let homePage = new HomePage(page);
      let orderPage = new OrderPage(page);

      await homePage.navigateTo();
      await homePage.loginWith("standard_user","secret_sauce");
      await orderPage.addProductToCart(itemName);
      await orderPage.verifyRemoveToCartButtonDisplayed(itemName);

});