import Button from "../Button";
import sectionFeatures from "./sectionFeature";
const Section = () => { 
    const sectionItems = sectionFeatures.map(feature => 
        <section key={feature.id}>

            <h1 className="text-2xl">{feature.heading}</h1>

            <p>{feature.tagline}</p>

            <Button text={feature.buttonText} />
        </section>
        
    ); 

    return <div className="grid grid-cols-2 gap-4">{sectionItems}</div>
}

export default Section; 