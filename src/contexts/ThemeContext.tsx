import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "themeContextKey";

type ThemeContext = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  const [theme, setTheme] = useState(
    (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) ||
      "light"
  );

  useEffect(() => {
    setIsMounted(true);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
