import CartContext, { CartProvider } from "../CartContext";
import { useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer"; 

const Checkout = () => { 
    const { items } = useContext(CartContext); 

    return(
        <div>
            <NavBar />
            <h1>Checkout</h1>

            <div>
                <p>
                    {items.length === 0 ? 'There are no items to display in your cart': null}

                    {items.length > 0 ? items.map(item => <p>{item.name}</p>): null}
                </p>

            </div>
            <Footer />
        </div>
    )
}
export default Checkout; 