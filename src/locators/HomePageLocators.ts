import { Page } from "@playwright/test";


export const homePageLocators =  {

    signInButton: "Sign In",
    // examples of dynamically creating locators 
    dynamicTitleButton: (buttonText: string) => 'text = ${buttonText}',
    elementbyAttribute: (attribute: string, value: string) => '[${attribute}="${value}"]',

    usernameTextField: (page: Page) => page.locator("#user-name"),
    passwordTextField: (page: Page) => page.locator("#password"),
    loginButton: (page: Page) => page.getByRole("button").filter({ hasText: "Login" }),
    
    };
