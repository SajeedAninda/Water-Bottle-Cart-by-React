import { useEffect, useState } from "react"
import Bottle from "./bottle";
import "./Bottles.css"

export default function Bottles() {
    let [bottles, setBottles] = useState([])
    let [cart, setCart] = useState([]);

    let cartHandler = (bottleObj) => {
        let newCart = [...cart, bottleObj];
        setCart(newCart);
    }

    useEffect(() => {
        let url = "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);


    return (
        <div>
            <h1>Total Available Bottles: {bottles.length}</h1>
            <h2>Cart:</h2>
            {cart.map(cart => <li>{cart.name}, Price: {cart.price}$</li>)}
            <div className="bottle-container">
                {
                    bottles.map(bottles => <Bottle key={bottles.id} bottles={bottles} cartHandler={cartHandler}></Bottle>)
                }
            </div>
        </div>
    )
}