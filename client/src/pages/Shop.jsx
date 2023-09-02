import Button from '../components/Button'; 
import AlertBanner from '../components/AlertBanner'; 
import NavBar  from '../components/NavBar';
import ProductGrid from './fragments/ProductGrid';
import Footer from "../components/footer/Footer"; 
import { Outlet } from 'react-router-dom';
const Shop = () => { 
    return( 
        <div>
            <AlertBanner alertText={{message: 'Free shipping for orders over $100'}} />
           
            <NavBar />
            
            <Outlet/>
            
            <Footer />
        </div>
    ); 
}

export default Shop; 