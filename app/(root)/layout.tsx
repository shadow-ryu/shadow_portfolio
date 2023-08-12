import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadow Portfolio",
  description: "Portfolio Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} flex justify-center my-4 bg-shadow-black shadow-text`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
