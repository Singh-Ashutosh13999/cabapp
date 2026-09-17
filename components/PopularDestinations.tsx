import React from 'react';

// You can easily add more cities to this list without changing the main page
const POPULAR_CITIES = [
  {
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1522244451342-a41bf8a13d73?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Pune',
    image: 'https://images.unsplash.com/photo-1580974582391-a6649c82a85f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2070&auto=format&fit=crop',
  }
];

export default function PopularDestinations() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
      {POPULAR_CITIES.map((city) => (
        <div 
          key={city.name} 
          className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          <div className="h-40 w-full relative">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-300"></div>
            {/* Using img tag for simplicity, can be changed to next/image later if needed */}
            <img 
              src={city.image} 
              alt={city.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg tracking-wider">{city.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
