import FooterForm from "./FooterForm"; 

const Footer = () => { 
    return(
        <div className="w-full bg-slate-400 m-0">
            <div className="bg-slate-600 mt-8 flex flex-row justify-around align-center">
                <p>Stay updated with our newsletter</p>
                <FooterForm /> 
            </div>

            <div>
                <p>logo here</p>
            </div>

            <div className="flex flex-row justify-start text-left">
                <ul>
                    <li>Shop</li>
                    <li>My account</li>
                    <li>Contact</li>
                    <li>Frequently Asked Questions</li>
                </ul>
            </div>
        </div>
            
    )
}

export default Footer; 