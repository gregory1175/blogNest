"use client"	

import { useState } from "react";
import { NavLink } from "../components/navLink";
import { useAuthStore } from "../store/store";

export default function Profile() {
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
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px 48px 0px', alignSelf: 'center', width: '800px'}}>
        <div style={{display: "flex", gap: "12px", flexDirection: 'column'}}>
            <h1 style={{fontSize: '56px', fontWeight: '600', lineHeight: '120%'}}>Профиль</h1>
            <NavLink href={"/"} style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%'}}>Главная</NavLink> 
        </div>
        <div>
        <form style={{display: 'flex', gap: '8px'}} onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>Имя</label>
                <input value={name} onChange={handleChangeName} style={{width: "140px", height: "38px", border: '1px solid black'}} type="text" id="name" name="name" required/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>Почта</label>
                <input value={email} onChange={handleChangeEmail} style={{width: "140px", height: "38px", border: '1px solid black'}} type="email" id="email" name="email" required/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label>Пароль</label>
                <input value={password} onChange={handleChangePassword} style={{width: "140px", height: "38px", border: '1px solid black'}} type="password" id="password" name="password" required/>
            </div>
           
            <button type="submit">Отправить</button>
            </form> 
        </div>
        </div>
    )
}