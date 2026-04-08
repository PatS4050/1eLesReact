import './App.css';
import countSoldProducts from "./helpers/countSoldProducts.js";
import {inventory} from "./constants/inventory.js";

function App() {

console.log(countSoldProducts(inventory))

return (
    <>
        <h1>Begin hier met met maken van de applicatie!</h1>
        <p>Totaal verkochte TV's {countSoldProducts(inventory)}</p>
    </>

)
}

export default App
