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
    screenSizesProducts,
} from "./helpers/informationProducts.js";
import minus from "./assets/minus.png"
import check from "./assets/check.png"
import showOutcomeInConsole from "./constants/arrayOefening.js"

// import bestBeeldscherm from "https://w7.pngwing.com/pngs/870/575/png-transparent-samsung-ku6000-led-backlit-lcd-ultra-high-definition-television-4k-resolution-smart-tv-samsung-television-media-led.png"//



// function eMeest  countSoldProducts.sort((a,b) => {
//     if (a > b) {return 1;}
//     if (a < b) {return -1;}
//     return 0;
// })

// numbers.sort((a, b) => {
//     // als a groter is dan b, geef een positief getal terug
//     if (a > b) {
//         return 1;
//     }
//     // als a kleiner is dan b, geef een negatief getal terug
//     if (a < b) {
//         return -1;
//     }
//
//     // als bovenstaande condities allebei niet waar zijn,
//     // zijn de waardes even groot
//     return 0;
// })
// console.log(numbers);

const eMeest = "Meest verkochte eerst"
const eGoedkoopst = " Goedkoopste eerst"
const eSport = " Meest geschikt voor sport eerst"


function App() {
    function buttonClick(e) {
        console.log(e)
    }
    function sortBestSold(bestSold) {
        bestSold.sort((a, b) => {
            if (a.sold > b.sold) {return 1;}
            if (a.sold < b.sold) {return -1;}
            return 0
        })
        console.log(bestSold)
    }

    showOutcomeInConsole()
    // const listBrands = inventory.map ((listBrand) => {return <li>listBrand.brand</li> })



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
                        <p className="icon"><img src={check}/> wifi <img src={minus}/> speech <img
                            src={check}/> hdr <img src={check}/> bluetooth <img src={minus}/> ambilight </p>
                        {/*<p>{screenSizesProductsMm(bestSellingTv)}</p>*/}
                    </div>
                </section>
                <span className="footer">

                    <button type="button" name="meest verkocht"
                            onClick={() => sortBestSold(inventory) } >Meest verkocht eerst {sortBestSold(inventory)}</button>
                    <button type="button" name="goedkoopste"
                            onClick={() => buttonClick(eGoedkoopst)}>Goedkoopste eerst</button>
                    <button type="button" name="sport geschikt" onClick={() => buttonClick(eSport)}>Meest geschikt voor sport eerst</button>
                </span>
            </div>
            <div className="listEmployees">
                <h2>All brands for selling</h2>
                <ul>
                    {inventory.map((brandList) => {
                        return <li>{brandList.brand}</li>
                    })}
                </ul>
            </div>
            {inventory.map((inventoryTV) => {
                return <section className="bestSelling">
                    <img
                        src={bestSellingTv.sourceImg}
                        alt="samsung beeldscherm" className="beeldschermPicture"/>
                    <div>
                        <p className="typeTv">{brandProducts(inventoryTV)} {typeProducts(inventoryTV)} - {nameProducts(inventoryTV)}</p>
                        <h2>€{priceProducts(inventoryTV)},-</h2>
                        <p>{screenSizesProducts(inventoryTV)}</p>
                        <ul className={"icon"}>
                            {inventoryTV.options.map((optionsList) => {
                                if (optionsList.applicable === true){
                                    // return <li key={inventoryTV.type + optionsList.options}> <img src={check}/> {optionsList.name}</li>
                                    return <li> <img src={check}/> {optionsList.name}</li>
                                } else {
                                    // return <li key={inventoryTV.type + optionsList.options}><img src={minus}/> {optionsList.name}</li>
                                    return <li><img src={minus}/> {optionsList.name}</li>
                                        }
                                        })}
                        </ul>
                        {/*<p className="icon"><img src={check}/> wifi <img src={minus}/> speech <img*/}
                        {/*    src={check}/> hdr <img src={check}/> bluetooth <img src={minus}/> ambilight </p>*/}
                    </div>
                </section>
            })}
        </>
    )
}
// let optionsApplicable
// if {options.applicable = true
//  <img src={check}/> }
// return <li>{optionsList.name}</li>

export default App
