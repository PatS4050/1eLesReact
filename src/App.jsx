import './App.css';
import countSoldProducts from "./helpers/countSoldProducts.js";
import {inventory} from "./constants/inventory.js";
import {countBuyProducts} from "./helpers/countBuyProducts.js"
import {countSellProducts} from "./helpers/countSellProducts.js";

function App() {
// let countSellProducts = countBuyProducts(inventory) - countSoldProducts(inventory)
// console.log(countSoldProducts(inventory))

return (
    <>
        <h1>Begin hier met met maken van de applicatie!</h1>
        <p>Totaal verkochte TV's <span className="greenText">{countSoldProducts(inventory)}</span></p>
        <p>Totaal ingekochte TV's <span className="blueText">{countBuyProducts(inventory)}</span></p>
        <p>Totaal nog te verkopen TV's <span className="redText"> {countSellProducts(inventory)}</span>

        </p>
    </>

)
}

export default App
