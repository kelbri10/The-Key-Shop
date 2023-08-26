import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import CartContext from "../CartContext";
import { useContext } from "react";

const NavBar = () => { 
    const { items } = useContext(CartContext);  
    
    return(
            <nav className="flex flex-row justify-between items-center px-10 py-4">
                <ul className="flex flex-row gap-4 ">
                <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/"}>Home</NavLink></li>
                <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/shop/all"}>Shop</NavLink></li>
                <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>

                <div className="flex flex-row items-center space-x-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    
                    <NavLink to={"/checkout"}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    <p>{items.length}</p>
                </div>
            </nav>
    )
}

export default NavBar; 