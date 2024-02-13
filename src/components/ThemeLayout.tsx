import { ThemeProvider } from "@/contexts/ThemeContext";
import { Container } from "./Container";
import { ThemeHeader } from "./ThemeHeader";
import { ThemeSwitch } from "./ThemeSwitch";

export const ThemeLayout = () => {
  return (
    <ThemeHeader />
    // <ThemeProvider>
    //   <Container>
    //     <ThemeSwitch />
    //   </Container>
    // </ThemeProvider>
  );
};
