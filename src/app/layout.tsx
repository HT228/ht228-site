import "./globals.css";
import Topbar from "../components/Header/Topbar";
import Navbar from "../components/Header/Navbar";
import ZaloFloatingIcon from "../components/ZaloFloatingIcon";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-white font-sans">
        <Topbar />
        <Navbar />
        <ZaloFloatingIcon />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

