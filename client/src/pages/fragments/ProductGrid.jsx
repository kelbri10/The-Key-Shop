import { useLoaderData } from "react-router-dom"; 
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductGrid = () => { 
    const products = useLoaderData(); 

    let gridItems = products.map(product => (
        <ProductCard product={product} key={product._id}/>
    )); 

    const [currentFilter, setCurrentFilter] = useState('all'); 
    

    return(
        <div>
            <h1 className="text-6xl p-8"> Collections </h1>
            <div className="flex flex-row justify-center gap-8 p-10">
                <div className="flex flex-col gap-4"> 
                <label>
                <input
                    onClick={(e) => setCurrentFilter(e.target.value)}
                    type="radio"
                    name="filter"
                    value="all"
                    defaultChecked={true} 
                />
                All
                </label>
                <label>
                <input
                    onClick={(e) => setCurrentFilter(e.target.value)}
                    type="radio"
                    name="filter"
                    value="keycaps"
                />
                Keycaps
                </label>
                <label>
                <input
                    onClick={(e) => setCurrentFilter(e.target.value)}
                    type="radio"
                    name="filter"
                    value="keyboard"
                />
                Keyboard
                </label>
                    {/* <button onClick={handleClick} className="border-2 border-solid px-4 py-2 rounded-md">keyboard</button>
                    <button className="border-2 border-solid px-4 py-2 rounded-md">keycaps</button>
                    <button className="border-2 border-solid px-4 py-2 rounded-md">all</button> */}
                </div>

                <div className="w-fit grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {currentFilter === 'all' ? gridItems: products.map(product => product.type === currentFilter ? <ProductCard product={product} key={product._id}/> :null )}

                    
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