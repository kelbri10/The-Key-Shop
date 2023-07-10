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

             {/* feature a new keyboard with description, shop button to see more about specific linked project*/}
            
            {/* <section>
                <h1>subheading 1</h1>
                <p>quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse</p>
                <Button text={'shop now'} />
            </section>

            <section>
                <h2>subheading 2</h2>
                <p>quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse</p>
                <Button text={'learn more'}/>
            </section> */}
             {/* mission statement of the fake company, learn more button links to about */}

            {/* <section>
                <h2>Product 1 </h2>
                <p>quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse</p>
                <Button text={'see details'}/> 
            </section>

            <section>
                <h2>Product 2 </h2>
                <p>quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse</p>
                <Button text={'see details'}/> 
            </section> */}

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