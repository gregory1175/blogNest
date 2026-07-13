'use client'

import { useState } from "react";
import { useAuthStore } from "../store/store";
import { useRouter } from "next/navigation"; 

export default function RegistrationPage() {
    const routeToPage = useRouter();
    const [haveAcc, setHaveAcc] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { getUserInfo, sendInfoForCreateUser } = useAuthStore();

    const handleChangeName = (eventName: React.ChangeEvent<HTMLInputElement>) => {
    setName(eventName.target.value);
    };

    const handleChangeEmail = (eventName: React.ChangeEvent<HTMLInputElement>)=> {
    setEmail(eventName.target.value);
    };

    const handleChangePassword = (eventName: React.ChangeEvent<HTMLInputElement>)=> {
    setPassword(eventName.target.value) 
    };

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        getUserInfo(name, email, password);
        
        try {
            await sendInfoForCreateUser(name, email, password);
            setName('')
            setEmail('')
            setPassword('')
            routeToPage.push('/profile')
        } catch (error) {
            console.error(error);
        }
    };
    return (
    <div>
        {haveAcc === false ? (
        <>
        <form style={{display: 'flex', gap: '8px'}} onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>Name</label>
                <input value={name} onChange={handleChangeName} style={{width: "140px", height: "38px", border: '1px solid black'}} type="text" id="name" name="name" required/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>Email</label>
                <input value={email} onChange={handleChangeEmail} style={{width: "140px", height: "38px", border: '1px solid black'}} type="email" id="email" name="email" required/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>Password</label>
                <input value={password} onChange={handleChangePassword} style={{width: "140px", height: "38px", border: '1px solid black'}} type="password" id="password" name="password" required/>
            </div>
           
            <button type="submit">Send</button>
            </form> 
            <button onClick={() => {setHaveAcc(!haveAcc)}}>Alredy have an account? - sing in</button>
        </>
         ) :
         (

        <button onClick={() => {setHaveAcc(!haveAcc)}}>Don&apos;t have an account? - sing up</button>
         )
        }
    </div>
    )
}

