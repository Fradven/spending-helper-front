"use client"
import { HeroUIProvider } from "@heroui/react";
import HomePage from "@/app/index";

export default function Home() {
  return (
    <HeroUIProvider>
      <HomePage/>
    </HeroUIProvider>
  );
}
