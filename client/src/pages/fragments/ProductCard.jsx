import { Link } from "react-router-dom";
import placeholderImg from "../../pages/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.jpg"
import { useContext } from "react";
import CartContext from "../../CartContext";

const ProductCard = ({product}) =>{ 
    const {addToCart} = useContext(CartContext);  
    return(
         <div className="my-6">
            <img className="rounded-md"
            src={placeholderImg} alt="random unsplash image"/>
            <p><Link to={`/shop/${product._id}`}>{product.name}</Link></p>
            <p>{product.brand}</p>
            <p className="font-bold">${product.price["$numberDecimal"]}</p>
            <button onClick={()=> addToCart(product._id, product.name, product.price["$numberDecimal"])}
            className="bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-6 py-2 rounded-md">
                Add to Cart
            </button>
            
        </div>
    )
}

export default ProductCard; 