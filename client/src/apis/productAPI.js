import axios from "axios";

const fetchProducts = async() => { 
    let response = await axios('http://localhost:3080/products'); 
    let products = await response.data; 

    return products; 
}

export { fetchProducts }; 