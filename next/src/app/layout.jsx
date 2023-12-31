import Navbar from "@/componentts/Navbar/Navbar";
import "./globals.css";
import { Inter, Lalezar } from "next/font/google";
import Footer from "@/componentts/Footer/Footer";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            <div className="FullHeight"></div>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
