//.helpers
export function priceProducts(inventory) {
    let priceProducts = 0
    for (let i = 0; i < inventory.length; i++) {
        priceProducts+= inventory[i].price;
    }
return priceProducts
}