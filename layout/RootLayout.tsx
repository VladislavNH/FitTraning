import { Link, Outlet } from "react-router-dom"
import ThemeToggle from "../../shared/ui/ThemeToggle"
import FirstVisitNotice from "../../shared/Notice/FirstVisitNotice"

export default function RootLayout() {
  return (
    <>
      <nav className="nav">
        <ThemeToggle />
        <Link to="/">Главная</Link>
        <Link to="/about">О тренере</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/exercises">Упражнения</Link>
        <Link to="/nutrition">Питание</Link>
        <FirstVisitNotice />
      </nav>
      <main className="app-container">
        <Outlet />
      </main>
    </>
  )
}
