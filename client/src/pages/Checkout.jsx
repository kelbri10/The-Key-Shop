import { useContext } from "react";
import CartContext from "../CartContext";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";

const Checkout = () => { 
    const { items } = useContext(CartContext); 
    
    return ( 
        <div>
            <NavBar />
            <h1>Checkout</h1>
            <Footer />
        </div>
    )
}

export default Checkout; 