export type Theme = "light" | "dark";

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
}

export function getTheme(): Theme {
  const theme: Theme =
    (document.documentElement.getAttribute("data-theme") as Theme) || "light";
  return theme;
}
