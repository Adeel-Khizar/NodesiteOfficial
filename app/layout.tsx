import { ReactNode } from "react";
import type { Metadata } from "next";


import "./globals.css";
import Preloader from "@/components/ui/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Node",
  description: "Software Agency",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      
        <body className={``}>
        <Preloader />
        <Header/>
          {children}
<Footer/>
        </body>
 
    </html>
  );
}