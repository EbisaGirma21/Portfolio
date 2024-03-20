import "./globals.css";
import { Inter, Poppins, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "300" });
const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Ebisa Girma",
  description: "ebisa girma portifolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/my-logo.png" sizes="48x48 96x96" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
