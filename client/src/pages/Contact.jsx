import { useState } from "react";
import Button from "../components/Button";
import Footer from '../components/footer/Footer'; 
import '../index.css'; 

const ContactForm = () => { 
    const [customerInformation, setCustomerInformation] = useState({
        name: '', 
        email: '', 
        orderNumber: '', 
        subject: ''
    }); 
    // const [customerName, setCustomerName] = useState({firstName: '', lastName: ''}); 
    // const [email, setEmail] = useState(''); 
    // const [orderNumber, setOrderNumber] = useState(''); 
    // const [subject, setSubject] = useState(''); 

    const handleSubmit = (e) => { 
        console.log(customerInformation); 
    }
    return (
        <>
            {/* TODO: add form with the following input fields 
            - attach files option 
            - add interactivity for submit button

            reference for input related documentation: 
            https://react.dev/reference/react-dom/components/input
            */}

            <form className="flex flex-col items-center gap-2"
            onSubmit={handleSubmit} >

                <input className="border-2 border-black"
                type='text'
                name='name'
                placeholder='Please enter first and last name on the order.'
                value={customerInformation.name}
                onChange={e => setCustomerInformation({...customerInformation, name: e.target.value})}
                />
                
                <input className="border-2 border-black" 
                type='text'
                name='email'
                placeholder='E-mail Address'
                value={customerInformation.email}
                onChange={e => setCustomerInformation({...customerInformation, email: e.target.value})}
                />
                <input className="border-2 border-black"
                type='text'
                name='orderNumber'
                placeholder='Order Number'
                value={customerInformation.orderNumber}
                onChange={e => setCustomerInformation({...customerInformation, orderNumber: e.target.value})}
                />
                <input className="border-2 border-black"
                type='text'
                name='subject'
                placeholder='Subject'
                value={customerInformation.subject}
                onChange={e => setCustomerInformation({...customerInformation, subject: e.target.value})}
                />

                <Button text={'submit'} type='submit' />
            </form>

            
            <Footer />
        </>
    )
}

export default ContactForm; 