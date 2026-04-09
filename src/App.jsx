import './App.css';
import countSoldProducts from "./helpers/countSoldProducts.js";
//deze is een default waarde//
import {inventory, bestSellingTv} from "./constants/inventory.js";
import {countBuyProducts} from "./helpers/countBuyProducts.js"
import {countSellProducts} from "./helpers/countSellProducts.js";
// deze zijn variabelen met export als pre//
import {typeProducts} from "./helpers/informationProducts.js";


function App() {






    return (
        <>
            <h1>Begin hier met met maken van de applicatie!</h1>
            <p className="greenText">Totaal verkochte TV's {countSoldProducts(inventory)}</p>
            <p className="blueText">Totaal ingekochte TV's {countBuyProducts(inventory)}</p>
            <p className="redText">Totaal nog te verkopen TV's {countSellProducts(inventory)}</p>
            <section>
                <h2>Type TV</h2>
                <p>{typeProducts(bestSellingTv.type)}</p>
                {/*// Hoe declareer ik hier een object ipv array //*/}
                <p>{typeProducts(inventory)}</p>
            </section>
        </>
    )
}

export default App
