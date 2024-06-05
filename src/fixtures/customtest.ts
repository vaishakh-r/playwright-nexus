import {test as base} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { OrderPage } from "../pages/OrderPage";

// Decalre Pages here for common reference across tests
const test = base.extend<PlaywrightTest.TestFixtures>({

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }, 
    orderPage: async({page}, use) => {
        const orderPage = new OrderPage(page);
        await use(orderPage);
    }
});

export default test;