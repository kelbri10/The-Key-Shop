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
            <div className="flex flex-col md:flex-row md:justify-center gap-8 p-10">
                <div className="flex flex-col gap-4"> 

                    <label htmlFor="filters" className="font-semibold">Filters</label>
                    <select className="rounded-md px-2 py-4 text-center border focus:ring-cyan-900"
                    name="filters" 
                    value={currentFilter}
                    onChange={(e) => setCurrentFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="keycaps">Keycaps</option>
                    </select>
                   
                </div>

                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {currentFilter === 'all' ? gridItems: products.map(product => product.type === currentFilter ? <ProductCard product={product} key={product._id}/> : null )}
   
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