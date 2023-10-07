import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => { 
    const [items, setItems] = useState([]); 


    const addToCart = (id, name, price) => { 


        setItems(prevState => { 
            
            let found = prevState.find(el => el.id === id); 
         
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

    const editFromCart = (newQty, id) => { 
        //find the item in the array
        //once found 
        //if the value set to 0, 
        //remove from cart

        //if the value is set to any other number
        //update the item.qty and return new items array
        
        setItems(prevState => { 

            if(newQty > 0){ 
                return prevState.map(el => el.id === id ? {...el, qty: newQty} : el)
            } else { 
                return prevState.filter(el => el.id !== id)
            }
        })
    }

    return( 
        <CartContext.Provider value={{items, addToCart, deleteFromCart, editFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext; 
