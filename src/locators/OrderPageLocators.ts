import { Page } from "@playwright/test";


export const orderPageLocators =  {

    // examples of dynamically creating locators 
    dynamicTitleButton: (buttonText: string) => `text = ${buttonText}`,
    elementbyAttribute: (attribute: string, value: string) => `[${attribute}="${value}"]`,
    productAddToCartButton: (titleText: string) => `.inventory_item_description:has-text("${titleText}") >> button#add-to-cart-sauce-labs-backpack`,
    productRemoveFromCartButton: (titleText: string) => `.inventory_item_description:has-text("${titleText}") >> button#remove-sauce-labs-backpack`,

};
