import NavBar from "../components/NavBar"
import Section from "../components/landing/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/footer/Footer"

const Landing = () => { 
    return (
        <div>
            <NavBar />

            <Section />

            <section className='featureCollections'>
                <h2>Featured Collections</h2>
                <img src='https://source.unsplash.com/random/500x400/?keyboard' />
                <p><a href='#'>category 1</a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                <img src='https://source.unsplash.com/random/500x400/?keyboard' />
                <p><a href='#'>category 2</a><FontAwesomeIcon icon={faArrowRightLong} /></p>
                <img src='https://source.unsplash.com/random/500x400/?keyboard' />
                <p><a href='#'>category 3 </a><FontAwesomeIcon icon={faArrowRightLong} /></p>
            </section>

            <Footer />
        </div>
    )
}

export default Landing; 