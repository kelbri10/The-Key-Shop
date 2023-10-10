import AlertBanner from '../components/AlertBanner'; 
import NavBar  from '../components/NavBar';
import Footer from "../components/footer/Footer"; 
import { Outlet } from 'react-router-dom';
const Shop = () => { 
    return( 
        <div className="flex flex-col justify-between">
            <AlertBanner alertText={{message: 'Free shipping for orders over $100'}} />
           
            <NavBar />

            
            <Outlet/>
            
            
            <Footer />
        </div>
    ); 
}

export default Shop; 