import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Kanky Shoe",
  description: "Sepatu lokal asal bandung",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${jakartaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
