import { NavLink } from "./components/navLink";

export default function Home() {
  return (
   <div style={{display: "flex", gap: "12px", flexDirection: 'column', padding: '32px 48px 0px', alignSelf: 'center', width: '800px'}}>
    <h1 style={{fontSize: '56px', fontWeight: '600', lineHeight: '120%'}}>Добро пожаловать!</h1>
    <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
      <p style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%', textWrap: 'pretty'}}>BlogNest - мой небольшой фулл-стек проект, на котором тестирую работу NestJs и пробую синхронизировать его между двумя приложениями</p>
      <span style={{fontSize: '14px', fontWeight: '400', lineHeight: '120%'}}>Стек по зоне отвественности. Frontend - Typescript React NextJs Css. Backend - Typescript NestJs TypeORM</span>
    </div>
    <p style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%'}}>Возможно в будующем добавлю немного красоты и стилей, а пока сайт представляет собой набор ссылок и демонстрацию функционала</p>
    <NavLink href={"/profile"} style={{fontSize: '20px', fontWeight: '400', lineHeight: '120%'}}>Профиль</NavLink>
   </div>
  );
}
