import CartContext, { CartProvider } from "../CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer"; 
import CheckoutCard from "./fragments/CheckoutCard"; 
import Button from "../components/Button";
import OrderDetails from "./fragments/OrderDetails";

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
        <div className="">
            <NavBar />
            <h1 className="text-6xl p-8">Checkout</h1>

            <div className="p-8 mb-10">
                
                {items.length === 0 ? 
                    <div className="text-center">
                        <p className="mb-10">There are no items to display in your cart</p>
                        <Link to="/shop/all"><Button text='continue shopping'/></Link>
                    </div>
                : null}
            
                
            
                {items.length > 0 ? 
                    <div className="flex justify-evenly"> 
                        <div>
                            {items.map(item => <CheckoutCard item={item} /> )}
                        </div>
                        
                        <OrderDetails />
                    </div>
                    
                : null}
              
                
                
                
            </div>
            <Footer />
        </div>
    )
}
export default Checkout; 