import axios from "axios";
import { useState, useEffect } from "react";
const ProductDetail = (id) => { 
    const [product, setProduct] = useState({}); 

    const fetchProductById = async(id) => { 
        let response = await axios(`http://localhost:3080/products/${id}`); 
        let product = await response.data; 
        setProduct(product); 
        console.log(product); 
    }
 
    useEffect(() => { 
        fetchProductById(id); 
    }, []); 

    return (
        <div>
            <h1>Welcome to the product details</h1>
            {/* <h1>{product[0].name}</h1>
            <h1>{product[0].brand}</h1>
            <h1>{product[0].type}</h1> */}
       
        </div>
    )
}

export default ProductDetail; 