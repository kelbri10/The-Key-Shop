import express, { json, urlencoded } from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import productRouter from './routes/products.js'; 
const app = express(); 
const port = 3080; 


app.use(cors());

app.use(json()); 
app.use(urlencoded({ extended: true })); 

app.use(morgan('dev')); 

app.use('/products', productRouter); 

app.listen(port, () => { 
    console.log(`app listening on port ${port}`); 
}); 