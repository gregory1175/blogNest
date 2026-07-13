"use client"	

import { NavLink } from "../components/navLink";

export default function Profile() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px 48px 0px', alignSelf: 'center', width: '800px'}}>
        <div style={{display: "flex", gap: "12px", flexDirection: 'column'}}>
            <h1 style={{fontSize: '56px', fontWeight: '600', lineHeight: '120%'}}>Profile</h1>
            <NavLink href={"/"} style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%'}}>Home</NavLink> 
        </div>
        </div>
    )
}