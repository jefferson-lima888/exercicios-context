import { LoggedUserProvider } from "@/contexts/LoggedUserCtx";
import { Header } from "./Header";

export const LoggedUser = () => {
  return (
    <div className="container mx-auto flex max-w-4xl my-8">
      <LoggedUserProvider>
        <Header />
      </LoggedUserProvider>
    </div>
  );
};
