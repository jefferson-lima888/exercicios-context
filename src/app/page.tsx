"use client";
import { LoggedUser } from "@/components/LoggedUser";
import { Posts } from "@/components/Posts";
import { ThemeLayout } from "@/components/ThemeLayout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <LoggedUser />
      <Posts />
      <ThemeLayout />
    </main>
  );
}
