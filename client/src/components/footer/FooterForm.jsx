import { useState } from "react";
import Button from "../Button";
const FooterForm = () => { 
    const [email, setEmail] = useState(''); 
    return (
        <form className="flex flex-row gap-2">

            <input 
            className="rounded-md"
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <Button text={'Contact'} type='submit' />

        </form>
    ); 
}

export default FooterForm; 