import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Nordic Medical Centre | 24/7 Healthcare in Bole, Addis Ababa',
  description: 'Nordic Medical Centre (ኖርዲክ ሜዲካል ሴንተር) is a leading 24-hour medical center in Bole, Addis Ababa, Ethiopia. Expert doctors, modern facilities, and patient-centered care.',
  keywords: 'medical center Addis Ababa, Bole clinic, 24-hour medical center Ethiopia, Nordic Medical Centre, healthcare Addis Ababa, emergency care Ethiopia',
  openGraph: {
    title: 'Nordic Medical Centre | Advanced Healthcare You Can Trust – 24/7',
    description: 'Leading medical center in Bole, Addis Ababa providing high-quality, patient-focused healthcare services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Nordic Medical Centre',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


