import { useTheme } from "@/contexts/ThemeContext";

type Props = {
  label: string;
  onClick: () => void;
};

export const ThemeButton = ({ label, onClick }: Props) => {
  const themeCtx = useTheme();

  return (
    <button
      // className={`border px-4 py-3 rounded-md ${
      //   themeCtx?.theme === "dark"
      //     ? "bg-white text-black"
      //     : "bg-black text-white"
      // }`}

      className="border px-4 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
