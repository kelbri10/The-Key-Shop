import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import CartContext from "../CartContext";
import { useContext, useEffect, useState } from "react";

const NavBar = () => { 
    const { items } = useContext(CartContext);  
    const [isOpen, setIsOpen] = useState(false); 
    const [numOfItems, setNumOfItems] = useState(0); 

    const handleNav = () => { 
        setIsOpen(!isOpen); 
    }

    //need to update the items based off the quantity not the items length 
    useEffect(() => { 
        const calculateNumOfItems = () => { 
            let temp = [...items]; 
            let tempQty = temp.map(el => el.qty)
            let sum = tempQty.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0)
    
            setNumOfItems(sum); 
            return numOfItems; 
        }

        calculateNumOfItems(); 
    }, [items])

    return(
            <nav className="border-solid border-b border-cyan-900 flex flex-row justify-between items-center px-10 py-4">
                <h1 className="font-bold text-2xl">The Key Shop</h1>

                <div className="MOBILE relative md:hidden">
                    <button className="" onClick={handleNav}>
                        <span className="mb-1 block bg-stone-900 h-1 w-6"></span>
                        <span className="mb-1 block bg-stone-900 h-1 w-6"></span>
                        <span className="block bg-stone-900 h-1 w-6"></span>
                    </button>
                    {isOpen ? <ul className="p-20 absolute right-0 bg-stone-800 text-white flex flex-col justify-items-start gap-4">
                        <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/"}>Home</NavLink></li>
                        <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/shop/all"}>Shop</NavLink></li>
                        <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/contact"}>Contact</NavLink></li>
                        <li className="flex flex-row gap-2">
                            <NavLink to={"/cart"}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                            <p className="bg-slate-100 rounded-full text-center text-stone-900 px-4">{numOfItems}</p>
                        </li>
                    </ul>: null }
                    
                </div>
                <ul className="DESKTOP hidden md:flex md:flex-row md:gap-4 ">
                    <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/"}>Home</NavLink></li>
                    <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/shop/all"}>Shop</NavLink></li>
                    <li className="hover:underline hover:text-cyan-600"> <NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>

                <div className="hidden md:flex md:flex-row md:items-center md:space-x-4">
                    <NavLink to={"/cart"}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    <p>{numOfItems}</p>
                </div>
            </nav>
    )
}

export default NavBar; 