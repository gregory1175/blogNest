import { NavLink } from "./components/navLink";

export default function Home() {
  return (
   <div>
    <h1>Hello</h1>
    <NavLink href={"/profile"}>Профиль</NavLink>
   </div>
  );
}
