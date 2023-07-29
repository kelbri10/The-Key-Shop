import NavBar from "../components/NavBar"
import Section from "../components/landing/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import HeroSection from "../components/landing/HeroSection"
import Footer from "../components/footer/Footer"

const Landing = () => { 
    return (
        <div>
            <NavBar />

            <div className="">
                <HeroSection />
                <Section />

                <section className="px-10 py-14">
                    <h2 className="text-4xl mb-4">Featured Collections</h2>
                    
                    <div className="grid grid-cols-3 ">
                        <div>
                            <img className="hover:shadow-lg"src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p className="py-4"><a href='#'>Keyboards </a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>

                        <div>
                            <img src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p className="py-4"><a href='#'>Keycaps </a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>

                        <div>
                            <img src='https://source.unsplash.com/random/500x400/?keyboard' />
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