 import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => { 
    const [items, setItems] = useState([]); 

    const addToCart = (name, price, qty) => { 
        console.log(name);
        console.log(qty);  

        // const filteredArray = items.filter(i => i.name === name);
        // console.log(`This is the filtered array: ${JSON.stringify(filteredArray)}`); 
        // if (filteredArray.length > 0){ 
        //     qty = filteredArray.length; 
        //     let updatedItem = updateCartItem(name, qty); 
        //     setItems([...items, updatedItem])
        // } else { 
        //     qty = 1; 
        //     setItems([...items, {name, price, qty}]);
        // }
      
        setItems([...items, {name, price, qty}]);
        
    }

    // const updateCartItem = (name, qty) => { 
    //     const itemToUpdate = items.find(i => i.name === name); 

    //     itemToUpdate.qty = qty; 

    //     return itemToUpdate; 
    // }

    
    return( 
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext; 
