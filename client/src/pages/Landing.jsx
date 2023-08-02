import NavBar from "../components/NavBar"
import Section from "../components/landing/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import HeroSection from "../components/landing/HeroSection"
import Footer from "../components/footer/Footer"
import AlertBanner from "../components/AlertBanner"

const Landing = () => { 
    return (
        <div>
            <AlertBanner alertText={{message: "Free shipping for orders over $100"}}/>
            <NavBar />

            <div className="">
                <HeroSection />
                <Section />

                <section className="px-10 py-14">
                    <h2 className="text-4xl mb-4">Featured Collections</h2>
                    
                    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
                        <div>
                            <img className="rounded-md hover:shadow-lg"src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p className="py-4"><a href='#'>Keyboards </a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>

                        <div>
                            <img className="rounded-md hover:shadow-lg" src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p className="py-4"><a href='#'>Keycaps </a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>

                        <div>
                            <img className="rounded-md hover:shadow-lg" src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p className="py-4"><a href='#'>Switches </a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Landing; 