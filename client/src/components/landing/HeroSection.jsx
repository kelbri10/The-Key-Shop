import Button from "../Button"; 

const HeroSection = () => { 
    return(
        <div className="grid grid-cols-2 place-items-center h-screen">
            <div className="flex flex-col">
                <h1 className="text-6xl">i luv keebs</h1>
                <p className="py-4">Shop our favorite keycap collections now</p>
                <Button text='shop now'/>
            </div>

            <div className="bg-cyan-800 w-full h-screen">
            </div>
            
        </div>
    )
}

export default HeroSection;