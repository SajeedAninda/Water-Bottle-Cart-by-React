import './Bottle.css'
export default function Bottle({ bottles, cartHandler }) {
    let { name, seller, price, stock, ratings, img } = bottles;
    return (
        <div className="singleBottle">
            <img src={img} alt="" />
            <h2>Model: {name}</h2>
            <h3>Brand: {seller}</h3>
            <h3>Price: ${price}</h3>
            <h3>In Stock: {stock} bottles</h3>
            <h3>Rating: {ratings}stars</h3>
            <button onClick={()=>{cartHandler(bottles)}}>Add To Cart</button>
        </div>
    )
}