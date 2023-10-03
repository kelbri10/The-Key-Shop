import { Link } from "react-router-dom";
import placeholderImg from "../../pages/images/krishdiphong-prayoonwongkasem-oxRLqxQ9v8o-unsplash.jpg"
import { useContext } from "react";
import CartContext from "../../CartContext";

const ProductCard = ({product}) =>{ 
    const {addToCart} = useContext(CartContext);  
    return(
        <div>
            <Link to={`/shop/${product._id}`}>
                <div className="my-8">
                    <img className="rounded-md"
                    src={placeholderImg} alt="random unsplash image"/>
                    <p className="mt-2">{product.name}</p>
                    <p className="">{product.brand}</p>
                    <p className="font-bold">${product.price["$numberDecimal"]}</p>
                </div>
            </Link>
            {
                !product.inStock ? <div className="mt-4">
                <button
                className="bg-gray-400 text-stone-100 hover:cursor-not-allowed px-4 py-2 rounded-md">
                    Out of Stock
                </button>
                </div>: <div className="mt-4">
                    <button onClick={()=> addToCart(product._id, product.name, product.price["$numberDecimal"])}
                    className="bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-4 py-2 rounded-md">
                        Add to Cart
                    </button>
                </div>
            }
            
            
        </div>
    )
}

export default ProductCard; 