import { NavLink } from "./components/navLink";

export default function Home() {
  return (
   <div style={{display: "flex", gap: "12px", flexDirection: 'column', padding: '32px 48px 0px', alignSelf: 'center', width: '800px'}}>
    <h1 style={{fontSize: '56px', fontWeight: '600', lineHeight: '120%'}}>You are welcome!</h1>
    <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <p style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%', textWrap: 'pretty'}}>BlogNest is my small full-stack project where I experiment with NestJS and build synchronization between a web app and a mobile app.</p>
      <span style={{fontSize: '14px', fontWeight: '400', lineHeight: '120%'}}>Area of responsibility and tech stack. Frontend - Typescript React NextJs Css. Backend - Typescript NestJs TypeORM</span>
    </div>
    <p style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%'}}>Maybe, in the future, I&apos;ll add more styling and polish, but for now the site is just a simple prototype with links that demonstrates the functionality.</p>
    <NavLink href={"/profile"} style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%'}}>Profile</NavLink>
   </div>
  );
}
