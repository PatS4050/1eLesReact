//.helpers
function countSoldProducts(inventoryTV) {
    let totalSoldProducts = 0
    for (let i = 0; i < inventoryTV.length; i++) {
        totalSoldProducts+= inventoryTV[i].sold;
    }
return totalSoldProducts
}
export default countSoldProducts;
