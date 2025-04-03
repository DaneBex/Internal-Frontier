import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lora } from 'next/font/google'
import Nav from "@/components/myui/Nav";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
})

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
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className='font-Playfair transition-colors duration-300'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
