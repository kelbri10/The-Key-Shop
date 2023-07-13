import { useState, useEffect } from 'react'; 
import axios from "axios";

const ProductGrid = () => { 

    const [products, setProducts] = useState([]); 

    const fetchProducts = async() => { 
        let response = await axios('http://localhost:3080/products'); 
        let products = await response.data; 
        setProducts(products); 
    }

    useEffect(() => { 
        fetchProducts(); 
    }, []); 

    const gridItems = products.map(product => 
        <h1>{product.name}</h1>
    ); 

    return(
        <>
            {gridItems}
        </>
    )

}

export default ProductGrid; 