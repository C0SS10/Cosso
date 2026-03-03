import { useState } from "react";
import { setTheme, type Theme } from "@utils/dark-mode";
import Moon from "@assets/icons/Moon";
import Sun from "@assets/icons/Sun";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>("dark");

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setThemeState(newTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      className="absolute top-8 right-16 hover:scale-105 transition-transform duration-300"
      onClick={toggleTheme}
    >
      <div
        className={`rounded-2xl p-2 transition-all duration-300 shadow-neumorph-inset ${isDark ? "-translate-x-2" : "translate-x-0"}`}
      >
        {isDark ? (
          <Sun />
        ) : (
          <Moon />
        )}
      </div>
    </button>
  )
}
