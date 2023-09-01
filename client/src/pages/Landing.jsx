import NavBar from "../components/NavBar"
import Section from "../components/landing/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import keyboardImage from "../pages/images/mozano-MzxT0vUMylE-unsplash.jpg"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import HeroSection from "../components/landing/HeroSection"
import Footer from "../components/footer/Footer"
import AlertBanner from "../components/AlertBanner"


// TODO: 
// -- Mobile responsiveness for all pages
// -- Featured Collections link to individual products
// -- Add About the Company Section 

const Landing = () => { 
    return (
        <div className="">
            <AlertBanner alertText={{message: "Free shipping for orders over $100"}}/>
            <NavBar />

            <div className="">
                <HeroSection />

                <section className="m-10 grid place-items-center">
                    <h2 className="text-4xl font-bold">Featured Collections</h2>
                    
                    
                    <div className="m-8 place-self-center lg:place-self-start lg:flex lg:flex-row gap-8">
                        <img className="rounded-md hover:shadow-lg"src={keyboardImage} width={500} height={400}/>
                        <div className="">
                            <p className=" py-2 font-semibold">Keyboard 1</p>
                            <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Facilisis gravida neque convallis a cras semper. In metus vulputate eu scelerisque felis imperdiet proin fermentum.</p>
                            <Link to={"/shop/649caf124e5ae2798e415a5b"} ><Button text='Shop Now'/></Link>
                        </div>
                    </div>

                    <div className="m-8 place-self-center lg:place-self-end lg:flex lg:flex-row gap-8">
                        <div className="py-4">
                            <p className="font-semibold">Keyboard 2</p>
                            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Facilisis gravida neque convallis a cras semper. In metus vulputate eu scelerisque felis imperdiet proin fermentum.</p>
                            <Link to={"/shop/649cb3e64e5ae2798e415a5d"} ><Button text='Shop Now'/></Link>
                        </div>
                        <img className="rounded-md hover:shadow-lg" src={keyboardImage} width={500}/>
                    </div>

                    
                </section>

                <section className="m-10 grid place-items-center">
                    <h2 className="text-4xl mb-4 font-bold">
                        About Us
                    </h2>

                    
                    <p className="w-4/5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat. Facilisis gravida neque convallis a cras semper. In metus vulputate eu scelerisque felis imperdiet proin fermentum. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Quis lectus nulla at volutpat diam ut venenatis tellus in. 
                    </p>
                    
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Landing; 