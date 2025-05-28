import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/componentes/header";
import Footer from "@/componentes/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El Meu Projecte",
  description: "Examen amb Next.js i Shadcn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body className={`${inter.className} bg-black text-gray-900`}>
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
