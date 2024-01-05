"use client";
import { LoggedUser } from "@/components/LoggedUser";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <LoggedUser />
    </main>
  );
}
