import './App.css';
import countSoldProducts from "./helpers/countSoldProducts.js";
//deze is een default waarde//
import {inventory, bestSellingTv} from "./constants/inventory.js";
import {countBuyProducts} from "./helpers/countBuyProducts.js"
import {countSellProducts} from "./helpers/countSellProducts.js";
// deze zijn variabelen met export als pre//
import {
    brandProducts,
    typeProducts,
    nameProducts,
    priceProducts,
    screenSizesProducts
} from "./helpers/informationProducts.js";


function App() {


    return (
        <>
            <body>
                <h1>Begin hier met met maken van de applicatie!</h1>
                <p className="greenText">Totaal verkochte TV's {countSoldProducts(inventory)}</p>
                <p className="blueText">Totaal ingekochte TV's {countBuyProducts(inventory)}</p>
                <p className="redText">Totaal nog te verkopen TV's {countSellProducts(inventory)}</p>
                <section className="bestSelling">
                    <p className="typeTv">{brandProducts(bestSellingTv)} {typeProducts(bestSellingTv)} - {nameProducts(bestSellingTv)}</p>
                    <h2>€{priceProducts(bestSellingTv)},-</h2>
                    <p>{screenSizesProducts(bestSellingTv)}</p>
                    {/*<p>{screenSizesProductsMm(bestSellingTv)}</p>*/}
                </section>
            </body>
        </>
    )
}

export default App
