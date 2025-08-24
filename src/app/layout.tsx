import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Trust Algérie",
    description: "Trust Assurances et Réassurances Algérie",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${montserrat.variable} antialiased`}>
        <body>
        {children}
        </body>
        </html>
    );
}
