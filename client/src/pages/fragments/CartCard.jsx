import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../CartContext";
import { useContext } from "react";

const CartCard = ({item}) => { 
    const { deleteFromCart } = useContext(CartContext)
    return( 
        <div className="mb-6 flex justify-between">
            <div>
            <img className="rounded-md"
            src='https://source.unsplash.com/random/100x100/?keyboard' alt="random unsplash image"/>
            </div>

            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>QTY: {item.qty}</p>
                <button type="button" onClick={() => deleteFromCart(item.id)}
            className=" mr-2 bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-6 py-2 rounded-md">
                <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button type="button" onClick={() => deleteFromCart(item.id)}
            className="bg-cyan-700 hover:bg-cyan-500 active:bg-cyan-900 text-stone-100 px-6 py-2 rounded-md">
                <FontAwesomeIcon icon={faTrash} />
            </button>
            </div>
               
        </div>
    )
}

export default CartCard; 