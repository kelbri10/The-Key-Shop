import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../CartContext";
import { useContext } from "react";

const CartCard = ({item}) => { 
    const { deleteFromCart, editFromCart } = useContext(CartContext)
    return( 
        <div className="mb-6 flex justify-between">
            <div>
            <img className="rounded-md"
            src='https://source.unsplash.com/random/100x100/?keyboard' alt="random unsplash image"/>
            </div>

            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                {/* qty needs to be an input box because you need to be able to call the 
                editCart here to handle any changes and update the total for the specific item */}
                <label htmlFor={item.qty}>QTY:
                    <input 
                        id={item.qty} 
                        name="qty" 
                        type="number" 
                        defaultValue={item.qty}
                        onChange={e => editFromCart(e.target.value, item.id)}/>
                </label>
                <button type="button" onClick={() => deleteFromCart(item.id)}
            className="bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-6 py-2 rounded-md">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            </div>
               
        </div>
    )
}

export default CartCard; 