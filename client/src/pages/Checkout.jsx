import CartContext, { CartProvider } from "../CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer"; 
import CheckoutCard from "./fragments/CheckoutCard"; 
import Button from "../components/Button";

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
                
                {items.length === 0 ? (
                    <div className="text-center">
                        <p className="mb-10">There are no items to display in your cart</p>
                        <Link to="/shop/all"><Button text='continue shopping'/></Link>
                    </div>): null}
            
                
                {items.length > 0 ? items.map(item => <CheckoutCard item={item} />) : null}
              
                {items.length > 0 ? (
                    <div className="mt-10 w-1/5">
                        <h2 className="text-2xl">Order Details</h2>
                        <div className="">
                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>${total}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Taxes</p>
                                <p>To be calculated</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Estimated shipping</p>
                                <p>To be calculated</p>
                            </div>
                           
                            <div className="flex justify-between">
                                <p>Total</p>
                                <p>${total} USD</p>
                            </div>
                        </div>
                    </div>
                ): null}
                
                
            </div>
            <Footer />
        </div>
    )
}
export default Checkout; 