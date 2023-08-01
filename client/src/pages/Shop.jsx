import Button from '../components/Button'; 
import AlertBanner from '../components/AlertBanner'; 
import NavBar  from '../components/NavBar';
import ProductGrid from '../components/product/ProductGrid';
import Footer from "../components/footer/Footer"; 
const ProductCollections = () => { 
    return( 
        <div>
            <AlertBanner alertText={{message: 'this is an alert message for customer'}} />
           
            <NavBar />
            <h1 className="text-6xl p-8"> Collections </h1>
            
            {/* TODO: 
            -drop down menu to sort the products
            -sidebar to filter what products looking at 
            -product link to product details page */}
            
            <ProductGrid />
            
            <Footer />
        </div>
    ); 
}

export default ProductCollections; 