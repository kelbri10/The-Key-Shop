import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import { questions } from "../components/faq/questions";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const Questions = () => { 

    const [show, setShow] = useState(false); 

    const handleShow = (id) => { 
        let found = questions.filter(el => el.id === id);  
        if (found){  
           setShow(prevState => found[0].show = !prevState);
        }
    }
   
    return ( 
        <div className="flex flex-col h-screen">
            <NavBar />
            <h1 className="text-6xl p-8">Frequently Asked Questions</h1>
            
            <div className="mt-20 mb-auto flex flex-col items-center justify-evenly">
                {questions.map(el => (
                    <div className="w-3/5 px-8 py-4"
                    key={el.id}>
                        <div className="flex flex-row justify-between">
                            <p>{el.question}</p>
                            <button onClick={() => handleShow(el.id)}> {el.show ? <FontAwesomeIcon icon={faMinus} />: <FontAwesomeIcon icon={faPlus} />}</button>
                        </div>

                        <div className="py-2">
                            {el.show ? <p>{el.answer}</p>: null}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="h-10">
                <Footer />
            </div>
          
        </div>
    )
}

export default Questions; 