import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shopping List",
    description: "Shopping List Next.js App | Arturo Quiroz | Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* <div className="absolute inset-0 -z-10 sm:z-0 sm:bg-[url('./shopping-bg.png')] sm:opacity-50"></div> */}
            <body className={`${inter.className} bg-slate-100`}>
                {children}
            </body>
        </html>
    );
}
