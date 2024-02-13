import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";
import { ThemeHeader } from "./ThemeHeader";
import { ThemeButton } from "./ThemeButton";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  const themeCtx = useTheme();

  return (
    <div
      className={`w-full h-screen ${
        themeCtx?.theme === "light"
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
    >
      <div className="container mx-auto">
        TEMA: {themeCtx?.theme} {children}
      </div>
      <header className="py-5">
        <h1 className=" text-3xl">Título da página</h1>
      </header>
      <section>
        <p className=" my-5">Conteúdo da página</p>
        <ThemeButton label="Clique aqui" onClick={() => {}} />
      </section>
      {children}
    </div>
  );
};
