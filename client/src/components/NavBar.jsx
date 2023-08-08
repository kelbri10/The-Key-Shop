import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { CartProvider } from "../CartContext";

const NavBar = () => { 
    return(
        // <nav>
        //    <ul>
        //         <li><FontAwesomeIcon icon={faBars} /></li>
        //         <li>
        //             <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        //             <div><FontAwesomeIcon icon={faCartShopping} /></div>
        //         </li>
        //    </ul>
        // </nav>
        <CartProvider>
            <nav className="flex flex-row justify-between px-10 py-6">
                <ul className="flex flex-row gap-4 ">
                <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/"}>Home</NavLink></li>
                <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/shop/all"}>Shop</NavLink></li>
                <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
                <div><FontAwesomeIcon icon={faCartShopping} /></div>

                <div className="space-x-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} />

                <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </nav>
        </CartProvider>
    )
}

export default NavBar; 