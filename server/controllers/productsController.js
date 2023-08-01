import { ObjectId } from 'mongodb';
import db from '../db/connectToDb.js'; 

let productCollection = db.collection('products'); 

const getAllProducts = async () => { 
    let products = await productCollection.find({}).toArray(); 

    return products; 
}

const getFilteredProducts = async (productType) => { 
    let filteredResults = await productCollection.find({
        type: productType
    }).toArray(); 

    return filteredResults; 
}

const getProductsByBrand = async (brand) => { 
     let filteredProduct = await productCollection.find({ 
        brand: brand
    }).toArray(); 

    return filteredProduct; 
}

const getProductById = async (id) => {  
    let searchId = new ObjectId(id); 
    let filteredProduct = await productCollection.find({ 
        _id: searchId
    }).toArray(); 
    
    return filteredProduct; 
}

export { getAllProducts, getFilteredProducts, getProductsByBrand, getProductById}; 