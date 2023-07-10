import Button from "../Button";
import sectionFeatures from "./sectionFeature";
const Section = () => { 
    const sectionItems = sectionFeatures.map(feature => 
        <section key={feature.id}>

            <h1>{feature.heading}</h1>

            <p>{feature.tagline}</p>

            <Button text={feature.buttonText} />
        </section>
        
    ); 

    return <>{sectionItems}</>
}

export default Section; 