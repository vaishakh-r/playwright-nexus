import {test as base} from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { OrderPage } from "../pages/OrderPage";
import { ExcelUtil } from "../utils/ExcelUtil";

// Decalre Pages here for common reference across tests
const test = base.extend<PlaywrightTest.TestFixtures>({

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }, 
    orderPage: async({page}, use) => {
        const orderPage = new OrderPage(page);
        await use(orderPage);
    }, 
    excelUtil : async ({}, use) => {
        const excelUtil = new ExcelUtil("./data/userlogin.xlsx");
        await use(excelUtil);
    }
});

export default test;