import { useTheme } from "@/contexts/ThemeContext";

export const ThemeSwitch = () => {
  const themeCtx = useTheme();

  const handleThemeToggle = () => {
    if (themeCtx) {
      // themeCtx.setTheme(themeCtx.theme === "dark" ? " light" : " dark");

      const newTheme = themeCtx.theme === "light" ? "dark" : "light";
      themeCtx.setTheme(newTheme);
      // localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      console.log(themeCtx.theme);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 p-3 text-center cursor-pointer"
      onClick={handleThemeToggle}
    >
      {/* {themeCtx?.theme === "dark" && "Mudar para Light"} */}
      {themeCtx?.theme === "dark" ? "Mudar para Light" : "Mudar para Dark"}
    </div>
  );
};
