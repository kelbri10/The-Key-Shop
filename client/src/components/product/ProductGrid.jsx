import { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom"; 
import axios from "axios";

const ProductGrid = () => { 

    const [products, setProducts] = useState([]);  
    const [isChecked, setIsChecked] = useState(true); 
    const [filteredProducts, setFilteredProdcuts]= useState([]);  

    const handleChange = (e) => {
      //check whether a tag or multiple tags are checked 
       //if a tag is checked, display filtered results 
       //if no tag is checked, return all products
       let filter = e.target.value; 
       setIsChecked(e.target.checked); 
       let filteredArr = products.filter(product => product.type === filter); 
       console.log(filteredArr); 
       setFilteredProducts(filteredArr);  
    }

    const fetchProducts = async() => { 
        let response = await axios('http://localhost:3080/products'); 
        let products = await response.data; 
        setProducts(products);
    }

    useEffect(() => { 
        fetchProducts(); 
    }, []); 

    let gridItems = products.map(product => (
        <div key={product._id}>
            <img className="rounded-md"
            src='https://source.unsplash.com/random/400x400/?keyboard' alt="random unsplash image"/>
            <p><Link to={`/shop/${product._id}`}>{product.name}</Link></p>
            <p>{product.brand}</p>
            <p className="font-bold">${product.price["$numberDecimal"]}</p>
        </div>
    )); 

    let productTypes = products.map(product => product.type); 
    let uniqueProductTypes = [...new Set(productTypes)]; 
    let checkboxes = uniqueProductTypes.map((productType, index) => (
        <div>
            <label>
            <input type="radio" name="filter" value={productType} onChange={handleChange}/> 
            {productType}
            </label>
        </div>
    ))

    // add a sidebar that has the buttons to help filter the products and sets the data-attibute-type to keyboards, switches, etc 
    //if the user clicks one of the buttons it causes a filter array method to act on the products and renders the inside to show the correct type 
    //ex. products.filter(product => return product.type === filterParam); 
    //all will reset the search back to the full array 
    //if i do this then i don't need the axios request to return something by the filtered of type, only need it to return by the filtered idea that way the correct product detail is pulled

    // let filteredProductsGridItems = products.filter(product => product.type === )
    return(
        <div>
            <h1 className="text-6xl p-8"> Collections </h1>
            <div className="flex flex-row justify-center gap-8 p-10">
                <div>
                    <p>filters</p>
                    {checkboxes}
                </div>

                <div className="w-fit grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {gridItems}
                </div>
            </div>
        </div>
        
    )

}

export default ProductGrid; 