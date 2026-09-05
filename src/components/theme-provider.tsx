import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type State = { theme: Theme; toggle: () => void };

const Ctx = createContext<State>({ theme: "dark", toggle: () => null });

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-theme"
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  return (
    <Ctx.Provider value={{ theme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
