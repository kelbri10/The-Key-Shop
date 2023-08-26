import Button from "../Button"; 
import { Link } from "react-router-dom";
const HeroSection = () => { 
    return(
        <div className="grid grid-cols-2 place-items-center h-1/5">
            <div className="flex flex-col">
                <h1 className="text-6xl">The Key Shop</h1>
                <p className="py-4">Shop our favorite collections now</p>
                <Link to={"/shop/all"} ><Button text='shop now'/></Link>
            </div>

            <div className="bg-cyan-800 w-full">
                <img className="object-cover" src="https://source.unsplash.com/random/?keyboard" />
            </div>
            
        </div>
    )
}

export default HeroSection;