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

const getProductByName = async (productName) => { 
     let filteredProduct = await productCollection.findOne({ 
        name: productName
    }).toArray(); 

    return filteredProduct; 
}

export { getAllProducts, getFilteredProducts, getProductByName}; 