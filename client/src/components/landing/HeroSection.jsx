import Button from "../Button"; 
import keycapImg from "../../pages/images/jay-zhang-ZRoC_96HPnw-unsplash.jpg"
import { Link } from "react-router-dom";
const HeroSection = () => { 
    return(
        <div className="grid lg:grid-cols-2 place-items-center lg:h-2/5 border-b border-solid border-cyan-900  ">
            <div className="flex flex-col m-10 lg:m-10">
                <h1 className="text-6xl">Keycap Set 2</h1>
                <p className="py-4">Shop the brand new keycap set 2 for back to school!</p>
                <Link to={"/shop/649cb61a4e5ae2798e415a5f"} ><Button text='Shop the Sale'/></Link>
            </div>

            <div className="bg-cyan-800 w-full mt-10 lg:mt-0">
                <img className="object-cover" src={keycapImg} />
            </div>
            
        </div> 
    )
}

export default HeroSection;