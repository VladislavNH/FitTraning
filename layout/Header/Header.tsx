import Logo from "../../../shared/Logo/Logo";
import ThemeSwitch from "../../../shared/ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Logo />
      </div>

      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/about">О тренере</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/exercises">Упражнения</Link>
        <Link to="/nutrition">Питание</Link>
      </nav>

      <div className="header-right">
        <ThemeSwitch />
      </div>
    </header>
  );
}
