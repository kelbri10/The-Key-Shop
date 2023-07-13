import { useState, useEffect } from 'react'; 
import axios from "axios";

const ProductGrid = () => { 

    const [products, setProducts] = useState([]); 

    const fetchProducts = async() => { 
        let response = await axios('http://localhost:3080/products'); 
        let products = await response.data; 
        setProducts(products);
        console.log(products) 
    }

    useEffect(() => { 
        fetchProducts(); 
    }, []); 

    const gridItems = products.map(product => (
        <div key={product._id}>
            <img src='https://source.unsplash.com/random/400x400/?keyboard' alt="random unsplash image"/>
            <p>{product.name}</p>
            <p>{product.brand}</p>
            <p>{product.price["$numberDecimal"]}</p>
        </div>
    )); 

    return(
        <>
            {gridItems}
        </>
    )

}

export default ProductGrid; 