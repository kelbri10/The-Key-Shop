import NavBar from "../components/NavBar";
import Footer from "../components/footer/Footer";
import { questions } from "../components/faq/questions";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Questions = () => { 

    const [show, setShow] = useState(false); 

    const handleShow = (id) => { 
        let found = questions.filter(el => el.id === id); 
        console.log(found); 
        if (found){ 
            console.log(found[0].show); 
           setShow(prevState => found[0].show = !prevState);
        }
    }
   
    return ( 
        <div className="">
            <NavBar />
            <h1 className="text-6xl p-8">Frequently Asked Questions</h1>
            
            {questions.map(el => (
                <div key={el.id}>
                    <div className="flex flex-row">
                        <p>{el.question}</p>
                        <button onClick={() => handleShow(el.id)}> <FontAwesomeIcon icon={faPlus} /></button>
                    </div>

                    <div>
                        {el.show ? <p>{el.answer}</p>: null}
                    </div>
                </div>
            ))}

            {/* {show ? <p>this is the answer</p>: null} */}

            <Footer />
        </div>
    )
}

export default Questions; 