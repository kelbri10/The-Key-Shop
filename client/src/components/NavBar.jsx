import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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

        <nav>
            <ul className="flex flex-row gap-4">
                <li className="hover:underline hover:text-cyan-600"> <Link to={"/home"}>Home</Link></li>
                <li className="hover:underline hover:text-cyan-600"> <Link to={"/shop"}>Shop</Link></li>
                <li className="hover:underline hover:text-cyan-600"> <Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar; 