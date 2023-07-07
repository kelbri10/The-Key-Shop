import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => { 
    return(
        <nav>
           <ul>
                <li><FontAwesomeIcon icon={faBars} /></li>
                <li>
                    <div><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <div><FontAwesomeIcon icon={faCartShopping} /></div>
                </li>
           </ul>
        </nav>
    )
}

export default NavBar; 