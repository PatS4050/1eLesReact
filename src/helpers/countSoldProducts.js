//.helpers
function countSoldProducts(inventory) {
    let totalSoldProducts = 0
    for (let i = 0; i < inventory.length; i++) {
        totalSoldProducts+= inventory[i].sold;
    }
return totalSoldProducts
}
export default countSoldProducts;
