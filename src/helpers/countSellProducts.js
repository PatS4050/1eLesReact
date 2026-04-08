//.helpers
import {countBuyProducts} from "./countBuyProducts.js";
import countSoldProducts from "./countSoldProducts.js";

export function countSellProducts(inventory) {
    let totalSellProducts = countBuyProducts(inventory) - countSoldProducts(inventory);
    // const countSellProducts = 4
return totalSellProducts
}