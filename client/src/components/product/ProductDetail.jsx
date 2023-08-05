import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

const ProductDetail = () => { 
    const { id } = useParams(); 

    const fetchProductById = async(id) => { 
        console.log(id); 
        let response = await axios(`http://localhost:3080/products/${id}`); 
        let product = await response.data; 
        setProduct(product);  
        console.log(product[0].name); 
    }

    const [product, setProduct] = useState([]); 
 
    useEffect(() => { 
        fetchProductById(id); 
    }, []); 

    return (
        <div>
            {product.map(el => (
                <div>
                    <h1>{el.name}</h1>
                    <h1>{el.brand}</h1>
                </div>
                ))}
        </div>
    )
}

export default ProductDetail; 