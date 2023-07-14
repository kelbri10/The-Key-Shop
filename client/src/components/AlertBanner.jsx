import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const AlertBanner = ({alertText}) => { 
    return(
        <div>
            <p>{alertText.message}</p>
            <FontAwesomeIcon icon={faBagShopping} />
        </div>
    )
}

export default AlertBanner; 