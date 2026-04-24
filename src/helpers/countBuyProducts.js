//.helpers
export function countBuyProducts(inventoryTV) {
    let totalBuyProducts = 0
    for (let i = 0; i < inventoryTV.length; i++) {
        totalBuyProducts+= inventoryTV[i].originalStock;
    }
return totalBuyProducts
}