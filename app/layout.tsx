import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ellty Design System",
    description: "First Test Assignment for Ellty",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
