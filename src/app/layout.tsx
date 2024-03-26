import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

// Importing the Inter font with the "latin" subset
const inter = Inter({subsets: ["latin"]});

// Metadata object containing title and description
export const metadata: Metadata = {
    title: "Sonny Taylor",
    description: "My portfolio and blog",
};

// RootLayout component that wraps the children in an HTML body tag
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        {/* Applying the Inter font to the body */}
        <body className={inter.className}>{children}</body>
        </html>
    );
}
