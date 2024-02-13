import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeButton } from "./ThemeButton";
import { Container } from "./Container";
import { ThemeSwitch } from "./ThemeSwitch";

export const ThemeHeader = () => {
  return (
    <ThemeProvider>
      <Container>
        <div>
          <ThemeSwitch />
        </div>
      </Container>
    </ThemeProvider>
  );
};
