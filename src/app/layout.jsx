import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Daily Dashboard",
  description:
    "Daily Dashboard est une application web conçue pour centraliser et visualiser les informations importantes de la journée. Elle permet à l'utilisateur de suivre ses tâches, événements, statistiques et autres données essentielles dans une interface claire et personnalisable. Ce projet vise à améliorer la productivité et l'organisation quotidienne grâce à une expérience utilisateur moderne et intuitive.",
  icons: {
    icon: "/dashboard_icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
