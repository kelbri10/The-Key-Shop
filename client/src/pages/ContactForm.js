import { useState } from "react";

const ContactForm = () => { 
    const [customerName, setCustomerName] = useState({firstName: '', lastName: ''}); 
    const [email, setEmail] = useState(''); 
    const [orderNumber, setOrderNumber] = useState(''); 
    const [subject, setSubject] = useState(''); 

    return (
        <>
            {/* TODO: add form with the following input fields 
            - attach files option 
            reference for input related documentation: 
            https://react.dev/reference/react-dom/components/input
            */}

            <input type='text'
            name='firstName'
            placeholder='First Name'
            value={customerName.firstName}
            onChange={e => setCustomerName({firstName: e.target.value, lastName: e.lastName})}
            />
             <input type='text'
            name='lastName'
            placeholder='Last Name'
            value={customerName.lastName}
            onChange={e => setCustomerName({firstName: e.firstName, lastName: e.target.value})}
            />
             <input type='text'
            name='email'
            placeholder='E-mail Address'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
             <input type='text'
            name='orderNumber'
            placeholder='Order Number'
            value={orderNumber}
            onChange={e => setOrderNumber(e.target.value)}
            />
             <input type='text'
            name='subject'
            placeholder='Subject'
            value={subject}
            onChange={e => setSubject(e.target.value)}
            />

            {/* <button type='submit'>Submit</button> */}

            { customerName !== '' &&
            <div>
                <p>Your first name is {customerName.firstName} </p>
                <p>Your last name is {customerName.lastName}</p>
                <p>Your email is {email}</p>
                <p>Your order number is {orderNumber}</p>
                <p>The subject of your issue is {subject}</p>
            </div>
            }
        </>
    )
}

export default ContactForm; 