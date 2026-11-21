import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Centre Dentaire Zola Smile | Dentiste à Mohammedia",
  description:
    "Zola Smile Dental Center à Mohammedia : soins dentaires, esthétique, implants et orthodontie avec une technologie moderne.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
