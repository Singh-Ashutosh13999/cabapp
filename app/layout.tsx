import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Cab Booking",
  description: "Book your comfortable and safe cab rides with us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-zinc-950 text-zinc-300 py-12 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-white tracking-tight">Cab<span className="text-amber-500">Connect</span></h3>
                <p className="text-sm">
                  Premium cab booking services for safe, reliable, and comfortable journeys across the city.
                </p>
              </div>
              <div>
                <h4 className="text-white text-md font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-amber-500 transition-colors">Services</Link></li>
                  <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-md font-semibold mb-4 uppercase tracking-wide">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/city-taxi" className="hover:text-amber-500 transition-colors">City Taxi</Link></li>
                  <li><Link href="/airport-transfer" className="hover:text-amber-500 transition-colors">Airport Transfer</Link></li>
                  <li><Link href="/outstation" className="hover:text-amber-500 transition-colors">Outstation Cabs</Link></li>
                  <li><Link href="/corporate" className="hover:text-amber-500 transition-colors">Corporate Rentals</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-md font-semibold mb-4 uppercase tracking-wide">Contact Us</h4>
                <ul className="space-y-2 text-sm">
                  <li>Email: support@cabconnect.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Transport Ave, City Center</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-zinc-800 text-sm text-center flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} CabConnect. All rights reserved.</p>
              <div className="space-x-4 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
