import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CabBookingCardProps {
  price: number;
  routeSlug: string;
}

export default function CabBookingCard({ price, routeSlug }: CabBookingCardProps) {
  return (
    <div className="p-8 bg-white rounded-b-2xl shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-8">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="block text-sm text-blue-600 font-semibold tracking-wider uppercase mb-1">Estimated Fare</span>
          <span className="block text-4xl font-extrabold text-gray-900">${price}</span>
        </div>
        
        <Link 
          href={`/book?route=${routeSlug}`} 
          className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
        >
          <span>Proceed to Book</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      
      <div className="text-center flex justify-between items-center text-sm font-medium">
        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors inline-flex items-center">
          &larr; Back to routes
        </Link>
        <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
          Need help? Contact us &rarr;
        </Link>
      </div>
    </div>
  );
}
