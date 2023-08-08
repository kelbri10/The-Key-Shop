import FooterForm from "./FooterForm"; 
import { Link } from "react-router-dom"; 
const Footer = () => { 
    return(
        <div className=" bg-cyan-600 bottom-0 w-full">
            <div className="bg-cyan-200 text-cyan-700 py-4 flex flex-row justify-around items-center">
                <p className="font-bold">Stay updated with our newsletter</p>
                <FooterForm /> 
            </div>

            <div className="flex flex-row justify-start text-left px-4 py-8 text-cyan-50">
                <ul>
                    <li><Link to={"/shop/all"}>Shop</Link></li>
                    <li>My account</li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/faq"}>Frequently Asked Questions</Link></li>
                </ul>
            </div>

            <div className="p-4 text-center text-cyan-50">
                copyright 2023 keyboard lovers, llc
            </div>
        </div>
            
    )
}

export default Footer; 