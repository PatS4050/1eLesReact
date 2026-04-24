//.helpers
export function priceProducts(inventoryTV) {
    let priceProducts = 0
    for (let i = 0; i < inventoryTV.length; i++) {
        priceProducts+= inventoryTV[i].price;
    }
return priceProducts
}