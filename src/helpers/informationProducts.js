//.helpers
import {bestSellingTv} from "../constants/inventory.js";

export function typeProducts(tomato) {
    const typeProduct = tomato.type
return typeProduct
}
export function brandProducts(tomato) {
    const brandProduct = tomato.brand
    return brandProduct.map
    // return brandProduct.map (() => (<li>{tomato}</li>))
}
export function nameProducts(tomato) {
    const nameProduct = tomato.name
    return nameProduct
}
export function priceProducts(tomato) {
    const priceProduct = tomato.price
    return priceProduct
}
// export function screenSizesProducts(tomato) {
//     let screenSizeProduct = 0
//     for (let i = 0; i < tomato.availableSizes.length; i++) {
//         screenSizeProduct= tomato.availableSizes[i];
//     }
//     return screenSizeProduct
// }

export function screenSizesProducts(tomato){
    let screenSizeProduct = []
    for (let i = 0; i < tomato.availableSizes.length; i++) {
        let arraySizes = tomato.availableSizes[i] +" inch (";
        let arraySizesMm = Math.round(tomato.availableSizes[i] * 2.54) +" cm) | ";
        screenSizeProduct.push(arraySizes + arraySizesMm);
    }
    return screenSizeProduct
}

export function optionsProduct(tomato) {
    let optionProduct = []
    for(let i = 0; i < tomato.options.length; i++) {
        let optionProduct =  tomato.options.name[i]
        if { tomato.options.applicable = true
            <img src={check}/>
        } else {
            <img src={minus}/>
        }
    }
    return optionsProduct

}



// export function screenSizesProductsMm(tomato) {
//     let screenSizeProductMm = 0
//     for (let i = 0; i < tomato.availableSizes.length; i++) {
//         screenSizeProductMm = tomato.availableSizes[i];
//     }
//     return screenSizeProductMm * 25.4
// }