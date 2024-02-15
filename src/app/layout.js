import "@/app/styles/globals.css";
import NavBar from "@/app/components/navigation/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Marcoff",
  description: "Martin Marcoff Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
