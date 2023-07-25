import { useState } from "react";
import Button from "../components/Button";
import Footer from '../components/footer/Footer'; 
import '../index.css'; 

const ContactForm = () => { 
    const [customerInformation, setCustomerInformation] = useState({
        firstName: '', 
        lastName:'', 
        email: '', 
        orderNumber: '', 
        subject: '', 
        message:''
    }); 

    const handleSubmit = () => { 
        console.log(customerInformation); 
        //need conditional that  checks to make sure none of the values are empty
    }
    return (
        <>
            {/* TODO: add form with the following input fields 
            - attach files option 
            - add interactivity for submit button

            reference for input related documentation: 
            https://react.dev/reference/react-dom/components/input
            */}

            <h1 className="text-2xl py-4">Contact Us</h1>

            <form className="flex flex-col items-center gap-8"
            onSubmit={handleSubmit} >
            
                <input className="border-2 border-stone-500 rounded-md w-1/3 p-2"
                type='text'
                name='firstName'
                placeholder='First Name'
                value={customerInformation.firstName}
                onChange={e => setCustomerInformation({...customerInformation, firstName: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md w-1/3 p-2"
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={customerInformation.lastName}
                onChange={e => setCustomerInformation({...customerInformation, lastName: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md  w-1/3 p-2" 
                type='text'
                name='email'
                placeholder='E-mail Address'
                value={customerInformation.email}
                onChange={e => setCustomerInformation({...customerInformation, email: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md  w-1/3 p-2"
                type='text'
                name='orderNumber'
                placeholder='Order Number'
                value={customerInformation.orderNumber}
                onChange={e => setCustomerInformation({...customerInformation, orderNumber: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md  w-1/3 p-2"
                type='text'
                name='subject'
                placeholder='Subject'
                value={customerInformation.subject}
                onChange={e => setCustomerInformation({...customerInformation, subject: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md  w-1/3 p-2"
                type='text'
                name='message'
                placeholder='Message'
                value={customerInformation.message}
                onChange={e => setCustomerInformation({...customerInformation, message: e.target.value})}
                />

                <Button text={'submit'} type='submit' />
            </form>
        </>
    )
}

export default ContactForm; 