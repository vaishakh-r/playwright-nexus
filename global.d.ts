import { Page } from "@playwright/test";
import { HomePage } from "./src/pages/HomePage";
import { OrderPage } from "./src/pages/OrderPage";

declare global {
    namespace PlaywrightTest {
        interface TestFixtures {
            homePage: HomePage;
            orderPage: OrderPage;
        }
    }
}