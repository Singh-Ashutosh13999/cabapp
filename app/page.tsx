import Link from 'next/link';
import PopularDestinations from '@/components/PopularDestinations';
import { cities } from '@/data/cabsData';

export const revalidate = 3600;

export const metadata = {
  title: 'Home | Premium Cab Booking',
  description: 'Find the best cab routes and book your ride today.',
};

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30">
      {/* Hero Section */}
      <section className="relative bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="text-center lg:text-left lg:w-3/5">
            <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              Luxury Chauffeur Service
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Arrive in</span>
              <span className="block text-amber-500 italic font-serif mt-2">Absolute Style.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300 sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Elevate your journey with our exclusive fleet of premium vehicles. Experience unparalleled comfort, privacy, and professional service tailored for the discerning traveler.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#routes" className="group inline-flex justify-center items-center px-8 py-4 text-lg font-medium rounded-none text-zinc-950 bg-amber-500 hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                Reserve Your Ride
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href="#fleet" className="inline-flex justify-center items-center px-8 py-4 border border-zinc-700 text-lg font-medium rounded-none text-white hover:bg-zinc-800 transition-all duration-300 backdrop-blur-sm">
                Explore Fleet
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">The Gold Standard</h3>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light">We don't just provide rides; we deliver an experience characterized by excellence and meticulous attention to detail.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="p-10 bg-white shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-amber-500/10 border-t-2 border-transparent hover:border-amber-500 transition-all duration-500 group transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto bg-zinc-50 flex items-center justify-center mb-8 rounded-full group-hover:bg-amber-500 transition-colors duration-500">
                <svg className="w-10 h-10 text-zinc-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Impeccable Punctuality</h3>
              <p className="text-zinc-600 leading-relaxed font-light">Your time is invaluable. Our chauffeurs arrive early, ensuring you reach your destination with time to spare.</p>
            </div>
            <div className="p-10 bg-white shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-amber-500/10 border-t-2 border-transparent hover:border-amber-500 transition-all duration-500 group transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto bg-zinc-50 flex items-center justify-center mb-8 rounded-full group-hover:bg-amber-500 transition-colors duration-500">
                <svg className="w-10 h-10 text-zinc-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Elite Chauffeurs</h3>
              <p className="text-zinc-600 leading-relaxed font-light">Professionally trained, discreet, and deeply knowledgeable of the city's best routes and exclusive venues.</p>
            </div>
            <div className="p-10 bg-white shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-amber-500/10 border-t-2 border-transparent hover:border-amber-500 transition-all duration-500 group transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto bg-zinc-50 flex items-center justify-center mb-8 rounded-full group-hover:bg-amber-500 transition-colors duration-500">
                <svg className="w-10 h-10 text-zinc-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Transparent Luxury</h3>
              <p className="text-zinc-600 leading-relaxed font-light">Experience uncompromising luxury with straightforward, upfront pricing and absolutely no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-zinc-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-3">Our Vehicles</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">The Premium Fleet</h3>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light">Choose from our meticulously maintained collection of world-class vehicles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Executive Sedan */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group">
              <div className="h-64 bg-zinc-800 relative flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop" alt="Executive Sedan" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70" />
                <div className="relative z-20 self-end w-full">
                  <h4 className="text-2xl font-bold text-white mb-1">Executive Sedan</h4>
                  <p className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Mercedes E-Class / BMW 5</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 mb-6 font-light leading-relaxed">The perfect synthesis of comfort and elegance for business travel and airport transfers.</p>
                <ul className="text-sm text-zinc-300 space-y-3 mb-8 font-light">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> Climate Control</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> Up to 3 Passengers</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> 2 Standard Luggage</li>
                </ul>
              </div>
            </div>

            {/* Premium SUV */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group">
              <div className="h-64 bg-zinc-800 relative flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop" alt="Premium SUV" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70" />
                <div className="relative z-20 self-end w-full">
                  <h4 className="text-2xl font-bold text-white mb-1">Premium SUV</h4>
                  <p className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Range Rover / Escalade</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 mb-6 font-light leading-relaxed">Commanding presence and exceptional space. Ideal for groups or extensive luggage.</p>
                <ul className="text-sm text-zinc-300 space-y-3 mb-8 font-light">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> Panoramic Roof & AC</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> Up to 6 Passengers</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> 4-5 Standard Luggage</li>
                </ul>
              </div>
            </div>

            {/* First Class */}
            <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 group">
              <div className="h-64 bg-zinc-800 relative flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop" alt="First Class" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70" />
                <div className="relative z-20 self-end w-full">
                  <h4 className="text-2xl font-bold text-white mb-1">First Class</h4>
                  <p className="text-amber-500 text-sm font-semibold tracking-wider uppercase">Mercedes S-Class</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 mb-6 font-light leading-relaxed">The pinnacle of automotive luxury. For those who accept nothing but the absolute best.</p>
                <ul className="text-sm text-zinc-300 space-y-3 mb-8 font-light">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> Reclining Seats & Massage</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> Up to 2 Passengers</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span> Complimentary Wi-Fi & Bar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-16 bg-zinc-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-3">Journeys</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-6">Popular Destinations</h3>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light">Discover our most requested routes, curated for exceptional travel experiences.</p>
          </div>

          <PopularDestinations />

          <div className="mt-24 mb-12 flex items-center justify-center">
            <div className="h-px bg-zinc-200 flex-1 max-w-xs"></div>
            <h3 className="text-2xl font-serif text-zinc-900 px-6">Featured Routes</h3>
            <div className="h-px bg-zinc-200 flex-1 max-w-xs"></div>
          </div>

          {cities.length === 0 ? (
            <div className="bg-white p-16 text-center border border-zinc-100 shadow-xl shadow-zinc-200/40">
              <p className="text-zinc-500 text-xl font-light">Our exclusive cities are currently being curated. Please check back shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cities.map((city) => (
                <Link href={`/${city.cityName.toLowerCase()}`} key={city.cityName} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="h-48 relative overflow-hidden shrink-0">
                    <img src={city.image} alt={city.cityName} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-5 w-full">
                      <h3 className="text-2xl font-bold text-white drop-shadow-md mb-1">{city.cityName}</h3>
                      <p className="text-gray-200 text-sm">{city.description}</p>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between mt-auto bg-gray-50">
                     <span className="text-blue-600 font-semibold text-sm group-hover:text-amber-500 transition-colors">Explore Routes &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Experience True Luxury</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">Book your next journey with us and discover the difference of uncompromising quality and service.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-amber-500 text-zinc-950 font-bold tracking-wide uppercase text-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:bg-amber-400 transition-all duration-300">
              WhatsApp Now
            </button>
            <button className="px-10 py-4 bg-transparent border border-zinc-600 text-white font-bold tracking-wide uppercase text-sm hover:border-white hover:bg-white/5 transition-all duration-300">
              Call Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
