'use client'

import { NavLink } from "../components/navLink";

export default function Profile() {
    return (
        <div>
            <NavLink href={"/"} activeClassName={"active"}>Главная</NavLink>
            <h2>Profile</h2>
        </div>
    )
}