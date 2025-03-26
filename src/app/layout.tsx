import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Trustup spending helper"
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1280px] mx-auto`}
        >
        <header className={"h-[64px] p-[20px] border-b-[1px] border-[#DFDFDF]"}>
            <h1 className={""}>
                <Link href={"/"}>
                    <Image
                        src={"/images/logo/trustup_logo.svg"}
                        alt={"trustup logo"}
                        width={148.43}
                        height={26}
                    />
                </Link>
            </h1>
        </header>
        {children}
        </body>
        </html>
    );
}
