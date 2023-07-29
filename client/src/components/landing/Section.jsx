import Button from "../Button";
import sectionFeatures from "./sectionFeature";
const Section = () => { 
    const sectionItems = sectionFeatures.map(feature => 
        <div className="grid grid-cols-2 gap-4 px-10 py-14 place-items-center">

            <section key={feature.id}
            className="">
                <h1 className="text-2xl">{feature.heading}</h1>

                <p className="pb-4">{feature.tagline}</p>

                <Button text={feature.buttonText} />
            </section>

            <img className="rounded-md"
            src={feature.imgLink} height="500px" width="400px"alt="placeholder img 400x600"/>

        </div>
        
    ); 

    return <div className="bg-cyan-600 text-cyan-50 py-8 grid grid-cols-2 gap-8 content-center">{sectionItems}</div>
}

export default Section; 