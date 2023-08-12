import CartContext, { CartProvider } from "../CartContext";
import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer"; 
import CheckoutCard from "./fragments/CheckoutCard"; 

const Checkout = () => { 
    const { items } = useContext(CartContext); 
    let total = 0; 

    const calculateTotalPrice = () => { 
        if(items.length > 0 ){ 
            let prices = items.map(item => Math.floor(item.price * 100) / 100);  
            let sum = prices.reduce((total, p) => total + p); 
            return total = sum.toFixed(2); 
        }

        return total; 
    }

    calculateTotalPrice(); 

    return(
        <div>
            <NavBar />
            <h1 className="text-6xl p-8">Checkout</h1>

            <div className="p-8">
                <p className="text-center">
                    {items.length === 0 ? 'There are no items to display in your cart': null}
                </p>

            
                {items.length > 0 ? items.map(item => <CheckoutCard item={item} />) : null}
                
                <p>Total Price: {total}</p>
            </div>
            <Footer />
        </div>
    )
}
export default Checkout; 