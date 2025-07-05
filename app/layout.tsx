import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import FlyonuiScript from "@/components/FlyonuiScript";
import { AuthContextProvider } from "@/components/context/AuthContext";

const noto = Fira_Sans({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eagis.ai"),
  title: "Eagis - AI-Powered Personal Health Companion",
  description: "Eagis: Your AI-driven healthcare platform to track symptoms, consult doctors, book appointments, and access personalized health tips, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={`${noto.variable} antialiased`}>
        <Toaster position="top-center" />
        <NextTopLoader />
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        <FlyonuiScript />
      </body>
    </html>
  );
}