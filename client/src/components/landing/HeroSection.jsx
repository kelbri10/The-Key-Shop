import Button from "../Button"; 
import keycapImg from "../../pages/images/jay-zhang-ZRoC_96HPnw-unsplash.jpg"
import { Link } from "react-router-dom";
const HeroSection = () => { 
    return(
        <div className="grid lg:grid-cols-2 place-items-center lg:h-2/5 border-b border-solid border-cyan-900  ">
            <div className="flex flex-col justify-center items-center m-10 lg:m-10">
                <h1 className="text-6xl font-semibold text-stone-900">Back to School Sale</h1>
                <p className="py-4 text-stone-700">What better way to kick off the school season than with the Neon Keycap Set!</p>
                <Link to={"/shop/649cb61a4e5ae2798e415a5f"}><Button text='Shop the Sale'/></Link>
            </div>

            <div className="bg-cyan-800 w-full mt-10 lg:mt-0">
                <img className="object-cover" src={keycapImg} alt="silver keyboard wtih bright yellow and off white keycaps sitting on a mat with different video game controllers and the words High level and Score! written on it" />
            </div>
            
        </div> 
    )
}

export default HeroSection;