import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <div className="absolute inset-0 -z-10 sm:z-0 sm:bg-[url('./shopping-bg.png')] sm:opacity-50"></div>
            <body className={`${inter.className} z-10 relative`}>
                {children}
            </body>
        </html>
    );
}
