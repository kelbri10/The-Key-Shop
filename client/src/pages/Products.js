import Button from '../components/Button'; 
import AlertBanner from '../components/AlertBanner'; 
import NavBar  from '../components/NavBar';

const Product = () => { 
    return( 
        <div>
            <AlertBanner alertText={{message: 'this is an alert message for customer'}} />
            <NavBar />
            <h1>Product page</h1>
            
        </div>
    ); 
}

export default Product; 