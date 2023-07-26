import FooterForm from "./FooterForm"; 

const Footer = () => { 
    return(
        <div className=" bg-cyan-100 bottom-0 w-full mt-8">
            <div className="bg-cyan-200 py-4 flex flex-row justify-around items-center">
                <p className="font-bold text-cyan-700">Stay updated with our newsletter</p>
                <FooterForm /> 
            </div>

            <div className="flex flex-row justify-start text-left gap-8 text-cyan-700">
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