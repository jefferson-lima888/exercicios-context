"use client";
import { LoggedUser } from "@/components/LoggedUser";
import { Posts } from "@/components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <LoggedUser />
      <Posts />
    </main>
  );
}
