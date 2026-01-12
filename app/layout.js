import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar"; // এই লাইন যোগ করুন
import Footer from "./components/Footer"; // এই লাইন যোগ করুন

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "MyStore - Best Gadgets Shop",
  description: "A simple e-commerce application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <Toaster position="bottom-right" reverseOrder={false} />
        
        {/* Navbar সবার উপরে থাকবে */}
        <Navbar />
        
        {/* মূল পেজ কন্টেন্ট */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer সবার নিচে থাকবে */}
        <Footer />
        
      </body>
    </html>
  );
}