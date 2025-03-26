"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>();

  const getMessage = async (): Promise<string> => {
    const res = await fetch("http://localhost:3000/api/hello", {
      cache: "no-store",
    });
    const data= await res.json();
    return data.message;
  }

  useEffect(() => {
    getMessage().then(message => setMessage(message));
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {message ? message : "no message found"}
    </div>
  );
}
