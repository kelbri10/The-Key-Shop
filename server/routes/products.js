import { Router } from 'express';  
import { getAllProducts, getFilteredProducts, getProductsByBrand, getProductById } from '../controllers/productsController.js';

const productRouter = Router();

productRouter.get(('/'), async (req, res) => { 
    try { 
        let allProducts = await getAllProducts(); 
        res.send(allProducts).status(200); 
    } catch(err) { 
        console.log(err); 
    }

}); 

productRouter.get('/:id', async (req, res) => { 
    let id = req.params.id; 

    try { 
        let filteredProduct = await getProductById(id); 
        res.send(filteredProduct);
    } catch(err) { 
        console.log(err); 
    }
})


export default productRouter; 