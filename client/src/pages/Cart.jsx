import CartContext from "../CartContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer"; 
import CartCard from "./fragments/CartCard"; 
import Button from "../components/Button";
import OrderDetails from "./fragments/OrderDetails";

const Cart = () => { 
    const {items} = useContext(CartContext);
    const [total, setTotal] = useState(0); 

    useEffect(() => { 
        const calculateTotalPrice = () => { 
            let temp = 0; 
            if(items.length > 0 ){ 
                items.forEach(item => {
                    let result = (Math.floor(item.price * 100) / 100) * item.qty; 
                    temp = temp + result
                })
                setTotal(temp.toFixed(2))
                return total; 
            }

            return total; 
        }

        calculateTotalPrice(); 
    },[items])

    return(
        <div className="flex flex-col h-screen">
            <NavBar />
            <h1 className="text-6xl p-8">Your Cart</h1>

            <div className="p-8 mb-auto">
                
                {items.length === 0 ? 
                    <div className="text-center">
                        <p className="mb-10">There are no items to display in your cart</p>
                        <Link to="/shop/all"><Button text='continue shopping'/></Link>
                    </div>
                : null}
            
                
            
                {items.length > 0 ? 
                    <div className=""> 
                        
                        <div className="">
                            {items.map(item => 
                                <div>
                                    <CartCard key={item.id} item={item} />
                                </div>
                            )}
                        </div>
                        
                        <OrderDetails total={total}/>

                        <button 
                        className="mt-10 bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-6 py-2 rounded-md">
                            Proceed to Checkout
                        </button>
                    </div>
                : null}

                
                
                
                
            </div>
            <div className="h-10">
                <Footer />
            </div>
           
        </div>
    )
}
export default Cart; 