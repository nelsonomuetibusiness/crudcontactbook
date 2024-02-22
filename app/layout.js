import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crud Contact Book",
  description: "Create Read update and delete contact book functionalities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="wireframe">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
