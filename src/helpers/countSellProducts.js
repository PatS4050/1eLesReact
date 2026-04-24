//.helpers
import {countBuyProducts} from "./countBuyProducts.js";
import countSoldProducts from "./countSoldProducts.js";

export function countSellProducts(inventoryTV) {
    let totalSellProducts = countBuyProducts(inventoryTV) - countSoldProducts(inventoryTV);
    // const countSellProducts = 4
return totalSellProducts
}