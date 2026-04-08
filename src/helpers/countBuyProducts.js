//.helpers
export function countBuyProducts(inventory) {
    let totalBuyProducts = 0
    for (let i = 0; i < inventory.length; i++) {
        totalBuyProducts+= inventory[i].originalStock;
    }
return totalBuyProducts
}