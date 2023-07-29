import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const AlertBanner = ({alertText}) => { 
    return(
        <div className="flex flex-row gap-3 justify-center items-center py-2 bg-cyan-200 text-cyan-900">
            <p>{alertText.message}</p>
            <FontAwesomeIcon icon={faBagShopping} />
        </div>
    )
}

export default AlertBanner; 