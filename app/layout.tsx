import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConstructEquip - Construction Equipment Store",
  description: "Your one-stop shop for construction equipment and tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <head>
        <link
          href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
          rel='stylesheet'
        />
      </head>
      <body className={`${inter.className} h-full bg-gray-50`}>
        <CartProvider>
          <div className='min-h-screen flex flex-col'>
            <main className='flex-1 w-full pb-32 overflow-y-auto'>
              {children}
            </main>
            <div className='fixed bottom-0 left-0 w-full z-40'>
              <Footer />
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
