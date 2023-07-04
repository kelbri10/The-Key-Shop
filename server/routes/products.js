import { Router } from 'express';  
import { getAllProducts, getFilteredProducts, getProductByName } from '../controllers/productsController.js';

const productRouter = Router();

productRouter.get(('/'), async (req, res) => { 
    try { 
        let allProducts = await getAllProducts(); 
        res.send(allProducts).status(200); 
    } catch(err) { 
        console.log(err); 
    }

}); 

productRouter.get('/:type', async (req, res) =>{ 
    let productType = req.params.type; 

    try{ 
        let filteredResults = await getFilteredProducts(productType); 
        res.send(filteredResults).status(200);
    } catch(err) { 
        console.log(err); 
    }
}); 

productRouter.get('/:productName', async (req, res) => {
    let productName = req.params.productName; 

    try{ 
        let filteredProduct = await getProductByName(productName);
        res.send(filteredProduct).status(200); 
    } catch(err) { 
        console.log(err); 
    }
}); 


export default productRouter; 