import { Page } from "@playwright/test";
import { HomePage } from "./src/pages/HomePage";
import { OrderPage } from "./src/pages/OrderPage";
import { ExcelUtil } from "./src/utils/ExcelUtil";

declare global {
    namespace PlaywrightTest {
        interface TestFixtures {
            homePage: HomePage;
            orderPage: OrderPage;
            excelUtil: ExcelUtil;
        }
    }
}