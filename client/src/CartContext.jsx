import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => { 
    const [items, setItems] = useState([]); 


    const addToCart = (id, name, price) => { 


        setItems(prevState => { 
            console.log(id); 
            let found = prevState.find(el => el.id === id); 
            console.log(JSON.stringify(found)); 
            if (found){ 
                return prevState.map(el => el.id === id ? {...el, qty: el.qty++} : el); 
            } 
            return prevState.concat({id, name, price, qty:1}); 
        })
    
        
    }
    
    const deleteFromCart = (id) => { 
        setItems(prevState => { 
            return prevState.filter(el => el.id !== id); 
        })
    }

    return( 
        <CartContext.Provider value={{items, addToCart, deleteFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext; 
