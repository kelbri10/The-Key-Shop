import { useState, useEffect } from 'react'; 
import axios from "axios";
import Footer from "../footer/Footer"; 

const ProductGrid = () => { 

    const [products, setProducts] = useState([]);  
    const [isChecked, setIsChecked] = useState(false); 
    const [filterTags, setFilterTags]= useState([]);  

    const handleChange = (e) => {
        e.preventDefault(); 
        setIsChecked(!isChecked);   

        if(isChecked === true){ 
            setProducts(products.filter(product => product.type === e.target.value))
        }
    }

    // const handleChange = (e) => { 
    //     if(e.target.checked){ 
    //         setFilterTags([...filterTags, e.target.value])
    //         console.log(filterTags)
    //     } else { 
    //         setFilterTags(
    //             filterTags.filter(filterTag => filterTag !== e.target.value)
    //         )
    //         console.log(filterTags)
    //     }
    // }

    //when a filter is checked, the gridItems are filtered in order to reflect the true/false value of the filter clicked
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
            <img className="rounded-md"
            src='https://source.unsplash.com/random/400x400/?keyboard' alt="random unsplash image"/>
            <p>{product.name}</p>
            <p>{product.brand}</p>
            <p className="font-bold">${product.price["$numberDecimal"]}</p>
        </div>
    )); 

    let productTypes = products.map(product => product.type); 
    let uniqueProductTypes = [...new Set(productTypes)]; 
    let checkboxes = uniqueProductTypes.map(productType => (
        <div>
            <input
                key={productType} type="checkbox" 
                id={productType}
                name={productType}
                value={productType} 
                onChange={handleChange}
                checked={isChecked}
               />
            <label htmlFor={productType}> {productType}</label>
        </div>

    ))

    // add a sidebar that has the buttons to help filter the products and sets the data-attibute-type to keyboards, switches, etc 
    //if the user clicks one of the buttons it causes a filter array method to act on the products and renders the inside to show the correct type 
    //ex. products.filter(product => return product.type === filterParam); 
    //all will reset the search back to the full array 
    //if i do this then i don't need the axios request to return something by the filtered of type, only need it to return by the filtered idea that way the correct product detail is pulled

    // let filteredProductsGridItems = products.filter(product => product.type === )
    return(
        <>
            <div className="flex flex-row gap-4 px-10">
                {checkboxes}
            </div>

            <div className="grid grid-cols-3 gap-6 p-4 place-items-center">
                {gridItems}
            </div>

            <Footer />
        </>
    )

}

export default ProductGrid; 