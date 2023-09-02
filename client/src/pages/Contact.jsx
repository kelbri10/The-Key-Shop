import { useState } from "react";
import Button from "../components/Button";
import Footer from '../components/footer/Footer'; 
import NavBar from "../components/NavBar";
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
        <div className="h-full">
            <NavBar />

            <h1 className="text-2xl text-center py-4">Contact Us 👋 </h1>

            <p className="text-center px-4">Check out our FAQ to find our customers' most common questions. If you need further assistance, complete the form below. Responses take anywhere between 2-5 days</p>

            <form className="flex flex-col items-center gap-8 mt-8 mb-8 "
            onSubmit={handleSubmit} >
            
                <input className="border-2 border-stone-500 rounded-md w-4/5 md:w-3/5 lg:w-2/5 p-2"
                type='text'
                name='firstName'
                placeholder='First Name'
                value={customerInformation.firstName}
                onChange={e => setCustomerInformation({...customerInformation, firstName: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md w-4/5 md:w-3/5 lg:w-2/5 p-2"
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={customerInformation.lastName}
                onChange={e => setCustomerInformation({...customerInformation, lastName: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md w-4/5 md:w-3/5 lg:w-2/5 p-2" 
                type='text'
                name='email'
                placeholder='E-mail Address'
                value={customerInformation.email}
                onChange={e => setCustomerInformation({...customerInformation, email: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md w-4/5 md:w-3/5 lg:w-2/5 p-2"
                type='text'
                name='orderNumber'
                placeholder='Order Number'
                value={customerInformation.orderNumber}
                onChange={e => setCustomerInformation({...customerInformation, orderNumber: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md w-4/5 md:w-3/5 lg:w-2/5 p-2"
                type='text'
                name='subject'
                placeholder='Subject'
                value={customerInformation.subject}
                onChange={e => setCustomerInformation({...customerInformation, subject: e.target.value})}
                />
                <input className="border-2 border-stone-500 rounded-md w-4/5 md:w-3/5 lg:w-2/5 p-2"
                type='text'
                name='message'
                placeholder='Message'
                value={customerInformation.message}
                onChange={e => setCustomerInformation({...customerInformation, message: e.target.value})}
                />

                <Button text={'submit'} type='submit' />
            </form>

            <Footer/>
        </div>
    )
}

export default ContactForm; 