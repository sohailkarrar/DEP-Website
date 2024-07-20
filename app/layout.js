import Navbar from './component/navbar';
import './component/navbar.module.css';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import Footer from './component/footer';
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Digital Empowerment Pakistan',
  description: 'Digital Empowerment Pakistan',
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
        <ToastContainer/>
      </body>
    </html>
  );
}
