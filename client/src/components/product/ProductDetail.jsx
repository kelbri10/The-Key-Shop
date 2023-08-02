import axios from "axios";
import { useState, useEffect } from "react";
const ProductDetail = () => { 
    const [product, setProduct] = useState({}); 

    let id = "649caf124e5ae2798e415a5b"; 
    

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
            <h1>{product[0].name}</h1>
            <h1>{product[0].brand}</h1>
            <h1>{product[0].type}</h1>
       
        </div>
    )
}

export default ProductDetail; 