import CartContext, { CartProvider } from "../CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer"; 
import CheckoutCard from "./fragments/CheckoutCard"; 
import Button from "../components/Button";
import OrderDetails from "./fragments/OrderDetails";

const Checkout = () => { 
    const {items} = useContext(CartContext); 
    let total = 0; 

    const calculateTotalPrice = () => { 

        if(items.length > 0 ){ 
            items.forEach(item => {
                let result = (Math.floor(item.price * 100) / 100) * item.qty; 
                total = total + result
            })
            return total = total.toFixed(2); 
        }

        return total; 
    }

    calculateTotalPrice(); 

    return(
        <div className="flex flex-col h-screen">
            <NavBar />
            <h1 className="text-6xl p-8">Checkout</h1>

            <div className="p-8 m-auto">
                
                {items.length === 0 ? 
                    <div className="text-center">
                        <p className="mb-10">There are no items to display in your cart</p>
                        <Link to="/shop/all"><Button text='continue shopping'/></Link>
                    </div>
                : null}
            
                
            
                {items.length > 0 ? 
                    <div className="flex justify-evenly"> 
                        <div>
                            {items.map(item => 
                                <div>
                                    <CheckoutCard key={item.id} item={item} />
                                </div>
                            )}
                        </div>
                        
                        <OrderDetails total={total}/>
                    </div>
                : null}
              
                
                
                
            </div>
            <div className="h-10">
                <Footer />
            </div>
           
        </div>
    )
}
export default Checkout; 