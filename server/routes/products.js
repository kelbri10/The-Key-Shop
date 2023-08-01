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

// productRouter.get('/:type', async (req, res) =>{ 
//     let productType = req.params.type; 

//     try{ 
//         let filteredResults = await getFilteredProducts(productType); 
//         res.send(filteredResults).status(200);
//     } catch(err) { 
//         console.log(err); 
//     }
// }); 

// productRouter.get('/:brand', async (req, res) => {
//     let brand = req.params.brand; 

//     try{ 
//         let filteredProducts = await getProductsByBrand(brand);
//         res.send(filteredProducts).status(200); 
//     } catch(err) { 
//         console.log(err); 
//     }
// }); 

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