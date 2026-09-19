"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-zinc-950 border-b border-zinc-800 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight flex-shrink-0">
          Cab<span className="text-amber-500">Connect</span>
        </Link>
        
        {/* Middle: Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          <Link href="/" className="text-zinc-300 hover:text-amber-500 text-sm font-medium tracking-wide uppercase transition-colors">Home</Link>
          <Link href="#fleet" className="text-zinc-300 hover:text-amber-500 text-sm font-medium tracking-wide uppercase transition-colors">Our Fleet</Link>
          <Link href="#services" className="text-zinc-300 hover:text-amber-500 text-sm font-medium tracking-wide uppercase transition-colors">Services</Link>
          <Link href="#contact" className="text-zinc-300 hover:text-amber-500 text-sm font-medium tracking-wide uppercase transition-colors">Contact</Link>
        </div>

        {/* Right: Buttons */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <a href="tel:+1234567890" className="px-4 py-2 border border-zinc-700 text-white text-sm font-bold tracking-wide uppercase hover:bg-zinc-800 transition-colors">
            Call Us
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-500 text-zinc-950 text-sm font-bold tracking-wide uppercase hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <a href="https://wa.me/1234567890" className="text-amber-500 p-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </a>
          <button 
            className="text-zinc-300 hover:text-amber-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-amber-500 hover:bg-zinc-900 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#fleet" 
              className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-amber-500 hover:bg-zinc-900 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Fleet
            </Link>
            <Link 
              href="#services" 
              className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-amber-500 hover:bg-zinc-900 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-amber-500 hover:bg-zinc-900 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3">
               <a href="tel:+1234567890" className="w-full text-center px-4 py-3 border border-zinc-700 text-white text-sm font-bold tracking-wide uppercase hover:bg-zinc-800 transition-colors">
                 Call Us
               </a>
               <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-full text-center px-4 py-3 bg-amber-500 text-zinc-950 text-sm font-bold tracking-wide uppercase hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                 WhatsApp
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
