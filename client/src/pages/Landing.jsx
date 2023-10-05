import NavBar from "../components/NavBar"
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
                    <h2 className="text-4xl font-bold text-stone-900">Featured Collections</h2>
                    
                    
                    <div className="m-8 place-self-center lg:place-self-start lg:flex lg:flex-row gap-8">
                        <img className="rounded-md hover:shadow-lg"src={keyboardImage} width={500} height={400}/>
                        <div className="">
                            <h3 className="text-2xl py-2 font-semibold text-stone-900">Summer Fun Keyboard Series</h3>
                            <p className="pb-2 text-stone-700">Kick off the school year right with this school year with our Summer Fun Keyboard series! Paired with blue and orange keycaps, this keyboard merges nostalgia with convenience. Grab yours today!</p>
                            <Link to={"/shop/649caf124e5ae2798e415a5b"} ><Button text='Shop Now'/></Link>
                        </div>
                    </div>

                    <div className="m-8 place-self-center lg:place-self-end lg:flex lg:flex-row gap-8">
                        <div className="py-4">
                            <h3 className="text-2xl font-semibold text-stone-900">Funky Town Keyboard Series</h3>
                            <p className="py-2 text-stone-700">Funky colors + New Keyboard equals? A Funky Time! We love a unique color scheme. Handpicked by some of our very own, we hope you enjoy this series as much as we do! </p>
                            <Link to={"/shop/649cb3e64e5ae2798e415a5d"} ><Button text='Shop Now'/></Link>
                        </div>
                        <img className="rounded-md hover:shadow-lg" src={keyboardImage} width={500}/>
                    </div>

                    
                </section>

                <section className="m-10">
                    <div className="flex flex-col w-full md:justify-center md:items-center">
                        <h2 className="text-4xl mb-4 font-bold text-stone-900">
                            Hey there! Welcome to the the Key Shop!
                        </h2>
                        <p className="text-stone-700 w-4/5">
                            We're a small company on the East Coast with big dreams! Started from the passion of our co-founder in 2023, we believe entry-level keyboards should be colorful, economically accessible, and sustainable. Our founder's love for keyboards began in 2022 when she was introduced to the hobby by a close friend. Enamored with the wide range of keyboard, keycap, and switch options, she built her first keyboard and the rest was history.
                        </p>

                        <ol className="md:w-3/5">
                            <li className="py-5">
                                <h3 className="text-2xl uppercase font-semibold text-stone-900">We are colorful</h3>
                                <p className="text-stone-700">We're a diverse community with a wide range of experience. We seek to imbue our "color" into every product we produce.</p>
                            </li>

                            <li className="py-5">
                                <h3 className="text-2xl uppercase font-semibold text-stone-900">We are sustainable</h3>
                                <p className="text-stone-700">At The Key Shop we are committed to not adding to the waste in our enviornment. All of our packaging is recyclable.</p>
                            </li>

                            <li className="py-5">
                                <h3 className="text-2xl uppercase font-semibold text-stone-900">We are affordable</h3>
                                <p className="text-stone-700">Getting into the hobby shouldn't break the bank! By sourcing our products intentionally, we provide our customers with competitive pricing and deals to make getting into the hobby financially accessible.</p>
                            </li>
                        </ol>
                    </div>

                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Landing; 