import { Link, useLoaderData } from "react-router-dom"; 
import axios from "axios";
import Button from '../../components/Button';

const ProductGrid = () => { 
    const products = useLoaderData(); 

    let gridItems = products.map(product => (
        <div key={product._id}>
            <img className="rounded-md"
            src='https://source.unsplash.com/random/400x400/?keyboard' alt="random unsplash image"/>
            <p><Link to={`/shop/${product._id}`}>{product.name}</Link></p>
            <p>{product.brand}</p>
            <p className="font-bold">${product.price["$numberDecimal"]}</p>
            <Button text='Add to Cart'/>
        </div>
    )); 

    return(
        <div>
            <h1 className="text-6xl p-8"> Collections </h1>
            <div className="flex flex-row justify-center gap-8 p-10">
                <div>
                    <p>filters</p>
                    {/* {checkboxes} */}
                </div>

                <div className="w-fit grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {gridItems}
                </div>
            </div>
        </div>
        
    )

}

//loader function 
export const productsLoader = async () => { 
    let response = await axios('http://localhost:3080/products'); 
    return response.data;
}

export default ProductGrid; 