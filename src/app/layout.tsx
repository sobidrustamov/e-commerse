import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/header";
import { ThemeProvider } from "@/providers/dark-mode-provider";
import { ReduxProvider } from "@/providers/redux-provider";
import { Footer } from "./components/footer/footer";
import NextAuthProvider from "@/providers/next-auth-provider";

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
    <html lang="en" >
      <body className={inter.className} id='body'>
        <NextAuthProvider>
        <ReduxProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        </ReduxProvider>
      </NextAuthProvider>
      </body>
    </html>
  );
}
