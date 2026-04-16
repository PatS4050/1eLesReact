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
import minus from "./assets/minus.png"
import check from "./assets/check.png"
import showOutcomeInConsole from "./constants/arrayOefening.js"

// import bestBeeldscherm from "https://w7.pngwing.com/pngs/870/575/png-transparent-samsung-ku6000-led-backlit-lcd-ultra-high-definition-television-4k-resolution-smart-tv-samsung-television-media-led.png"//

const eMeest = " Meest verkochte tv's"
const eGoedkoopst = " Goedkoopste eerst"
const eSport = " Meest geschikt voor sport eerst"


function App() {
    function buttonClick(e) {
        console.log(e)
    }
showOutcomeInConsole()

    return (
        <>
            <div className="body">
                <div>
                    <h1>Tech it easy dashboard</h1>
                    <p>Verkoopoverzicht</p>
                    <div className="saleOverview">
                        <section className="greenText">
                            <p>Aantal verkochte TV's</p>
                            <p>{countSoldProducts(inventory)}</p>
                        </section>
                        <section className="blueText">
                            <p>Totaal ingekochte TV's</p>
                            <p> {countBuyProducts(inventory)}</p>
                        </section>
                        <section className="redText">
                            <p>Totaal nog te verkopen TV's</p>
                            <p>{countSellProducts(inventory)}</p>
                        </section>
                    </div>
                </div>
            </div>
            <p>Best verkochte tv</p>
            <div>
                <section className="bestSelling">
                    <img
                        src={bestSellingTv.sourceImg}
                        alt="samsung beeldscherm" className="beeldschermPicture"/>
                    <div>
                        <p className="typeTv">{brandProducts(bestSellingTv)} {typeProducts(bestSellingTv)} - {nameProducts(bestSellingTv)}</p>
                        <h2>€{priceProducts(bestSellingTv)},-</h2>
                        <p>{screenSizesProducts(bestSellingTv)}</p>
                        <p className="icon"><img src={check}/> wifi <img src={minus}/> speech <img src={check}/> hdr <img src={check}/> bluetooth <img src={minus}/> ambilight </p>
                        {/*<p>{screenSizesProductsMm(bestSellingTv)}</p>*/}
                    </div>
                </section>
                <span className="footer">
                    <button type="button" name="meest verkocht" onClick={() => buttonClick(eMeest)}>Meest verkocht eerst</button>
                    <button type="button" name="goedkoopste" onClick={() => buttonClick(eGoedkoopst)}>Goedkoopste eerst</button>
                    <button type="button" name="sport geschikt" onClick={() => buttonClick(eSport)}>Meest geschikt voor sport eerst</button>
                </span>
            </div>
            <div className="listEmployees">
                <ul>
                    <li>lijst {brandProducts(inventory)}</li>
                </ul>
            </div>
        </>
    )
}

export default App
