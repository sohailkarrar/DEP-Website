import Navbar from './component/navbar';
import './component/navbar.module.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './component/footer';
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Digital Empowerment Pakistan',
  description: 'Digital Empowerment Pakistan',
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
