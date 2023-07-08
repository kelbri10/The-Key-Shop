import { useState } from "react";

const ContactForm = () => { 
    const [email, setEmail] = useState(''); 
    return (
        <form>
              <input type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <button type='submit'>Contact</button>
        </form>
    ); 
}

export default ContactForm; 