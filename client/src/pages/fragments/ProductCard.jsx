import { Link } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../../CartContext";

const ProductCard = ({product}) =>{ 
    const {addToCart} = useContext(CartContext);  
    return(
         <div key={product._id}>
            <img className="rounded-md"
            src='https://source.unsplash.com/random/400x400/?keyboard' alt="random unsplash image"/>
            <p><Link to={`/shop/${product._id}`}>{product.name}</Link></p>
            <p>{product.brand}</p>
            <p className="font-bold">${product.price["$numberDecimal"]}</p>
            <button onClick={()=> addToCart(product.name, product.price["$numberDecimal"])}
            className="bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-6 py-2 rounded-md">
                Add to Cart
            </button>
            
        </div>
    )
}

export default ProductCard; 