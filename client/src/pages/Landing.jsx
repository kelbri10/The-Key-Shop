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

            <div className="m-8">
                <HeroSection />
                <Section />

                <section className="mt-10">
                    <h2 className="text-4xl mb-4">Featured Collections</h2>
                    
                    <div className="grid grid-cols-3">
                        <div>
                            <img className="hover:shadow-lg"src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p><a href='#'>category 1</a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>

                        <div>
                            <img src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p><a href='#'>category 2</a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>

                        <div>
                            <img src='https://source.unsplash.com/random/500x400/?keyboard' />
                            <p><a href='#'>category 3 </a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Landing; 