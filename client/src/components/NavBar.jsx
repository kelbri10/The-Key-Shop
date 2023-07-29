import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AlertBanner from "./AlertBanner";
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
        <nav className="flex flex-row justify-between p-8">
            <ul className="flex flex-row gap-4 ">
                <li className="hover:underline hover:text-cyan-600"> <Link to={"/home"}>Home</Link></li>
                <li className="hover:underline hover:text-cyan-600"> <Link to={"/shop"}>Shop</Link></li>
                <li className="hover:underline hover:text-cyan-600"> <Link to={"/contact"}>Contact</Link></li>
            </ul>

            <div className="space-x-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </nav>
    )
}

export default NavBar; 