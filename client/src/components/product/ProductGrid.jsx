import { useState, useEffect } from 'react'; 
import axios from "axios";


const ProductGrid = () => { 

    const [products, setProducts] = useState([]); 
    // const [isChecked, setIsChecked] = useState(!isChecked); 

    const fetchProducts = async() => { 
        let response = await axios('http://localhost:3080/products'); 
        let products = await response.data; 
        setProducts(products);
    }

    useEffect(() => { 
        fetchProducts(); 
    }, []); 

    let gridItems = products.map(product => (
        <div key={product._id} data-filter-type={product.type}>
            <img src='https://source.unsplash.com/random/400x400/?keyboard' alt="random unsplash image"/>
            <p>{product.name}</p>
            <p>{product.brand}</p>
            <p>{product.price["$numberDecimal"]}</p>
        </div>
    )); 

    let productTypes = products.map(product => product.type); 
    let uniqueProductTypes = [...new Set(productTypes)]; 
    let checkboxes = uniqueProductTypes.map(productType => (
        <div>
            <input type="checkbox" 
                id={productType}
                name={productType}
                value={productType} />
            {productType}
        </div>

    ))
    // add a sidebar that has the buttons to help filter the products and sets the data-attibute-type to keyboards, switches, etc 
    //if the user clicks one of the buttons it causes a filter array method to act on the products and renders the inside to show the correct type 
    //ex. products.filter(product => return product.type === filterParam); 
    //all will reset the search back to the full array 
    //if i do this then i don't need the axios request to return something by the filtered of type, only need it to return by the filtered idea that way the correct product detail is pulled

    return(
        <>
            <div className="checkbox-grid">
                {checkboxes}
            </div>

            <div className="product-grid">
                {gridItems}
            </div>
        </>
    )

}

export default ProductGrid; 