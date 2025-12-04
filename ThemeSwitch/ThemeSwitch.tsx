import { useEffect, useState } from "react";
import "./ThemeSwitch.css";

export default function ThemeSwitch() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      // setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !dark;
    setDark(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`theme-switch ${dark ? "dark-mode" : ""}`}
      onClick={toggleTheme}
    >
      <div className="switch-icon">
        {dark ? "🌙" : "☀️"}
      </div>

      <span className="switch-text-day">DAY</span>
      <span className="switch-text-night">NIGHT</span>
    </div>
  );
}
