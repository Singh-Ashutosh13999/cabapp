import Link from 'next/link';

export const metadata = {
  title: 'Services | Premium Cab Booking',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'City Taxi',
      description: 'Reliable and comfortable city rides for your daily commutes and errands.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H12c-.6 0-1.2.3-1.6.8L8.5 10c0 0-2.7.6-4.5 1.1-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2m13 0a2 2 0 11-4 0 2 2 0 014 0zm-11 0a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: '/city-taxi',
    },
    {
      title: 'Airport Transfer',
      description: 'Punctual and hassle-free transfers to and from the airport.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/airport-transfer',
    },
    {
      title: 'Outstation Cabs',
      description: 'Safe and spacious outstation cabs for your weekend getaways.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      link: '/outstation',
    },
    {
      title: 'Corporate Rentals',
      description: 'Premium transportation solutions tailored for corporate clients.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/corporate',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-16 mt-[-100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-wider">Services</h1>
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto font-light">
          Experience uncompromising quality with our professional chauffeur services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-amber-500 transition-all duration-300 group rounded-sm hover:-translate-y-1 block">
              <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Detailed Pricing Sections */}
        <div className="mt-32 max-w-5xl mx-auto space-y-24 text-left">

          {/* City Taxi */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-4 uppercase tracking-wider border-b border-zinc-800 pb-2">City Taxi Rates</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Navigate the urban landscape with our premium city taxi service. Whether it's daily office commutes, shopping trips, or visiting friends, our local cab booking options offer unmatched comfort and punctuality. Choose from our economical hatchbacks to luxury sedans.
            </p>
            <div className="overflow-x-auto shadow-2xl rounded-sm border border-zinc-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800">
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Vehicle Category</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Base Fare</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Rate / Km</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Seating</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Mini (Hatchback)</td>
                    <td className="p-4 text-amber-500 font-medium">₹100</td>
                    <td className="p-4">₹12 / Km</td>
                    <td className="p-4">4 Seats</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Prime Sedan</td>
                    <td className="p-4 text-amber-500 font-medium">₹150</td>
                    <td className="p-4">₹15 / Km</td>
                    <td className="p-4">4 Seats</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Prime SUV</td>
                    <td className="p-4 text-amber-500 font-medium">₹250</td>
                    <td className="p-4">₹20 / Km</td>
                    <td className="p-4">6 Seats</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Airport Transfer */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-4 uppercase tracking-wider border-b border-zinc-800 pb-2">Airport Transfers</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Never miss a flight with our dedicated airport taxi service. We offer reliable, fixed-price airport drop and pickup services with ample luggage space. Enjoy a stress-free journey in our top-tier vehicles, tracked in real-time for ultimate peace of mind.
            </p>
            <div className="overflow-x-auto shadow-2xl rounded-sm border border-zinc-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800">
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Vehicle Category</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Fixed Rate (City Center)</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Wait Time Charge</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Luggage Space</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Prime Sedan</td>
                    <td className="p-4 text-amber-500 font-medium">₹800</td>
                    <td className="p-4">First 30 mins free</td>
                    <td className="p-4">2 Large Bags</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Premium SUV</td>
                    <td className="p-4 text-amber-500 font-medium">₹1,200</td>
                    <td className="p-4">First 30 mins free</td>
                    <td className="p-4">4 Large Bags</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Luxury Class</td>
                    <td className="p-4 text-amber-500 font-medium">₹2,500</td>
                    <td className="p-4">First 45 mins free</td>
                    <td className="p-4">3 Large Bags</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Outstation Cabs */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-4 uppercase tracking-wider border-b border-zinc-800 pb-2">Outstation Cabs</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Planning a weekend getaway or a long intercity road trip? Our outstation taxi booking guarantees well-maintained, comfortable cars with highly experienced drivers. We provide transparent billing for round trips and one-way drops alike.
            </p>
            <div className="overflow-x-auto shadow-2xl rounded-sm border border-zinc-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800">
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Vehicle Category</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Rate / Km</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Driver Allowance (Per Day)</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Min. Billable Kms / Day</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Prime Sedan</td>
                    <td className="p-4 text-amber-500 font-medium">₹11 / Km</td>
                    <td className="p-4">₹300</td>
                    <td className="p-4">250 Kms</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Spacious SUV</td>
                    <td className="p-4 text-amber-500 font-medium">₹15 / Km</td>
                    <td className="p-4">₹400</td>
                    <td className="p-4">250 Kms</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Tempo Traveller</td>
                    <td className="p-4 text-amber-500 font-medium">₹22 / Km</td>
                    <td className="p-4">₹500</td>
                    <td className="p-4">300 Kms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Corporate Rentals */}
          <div>
            <h2 className="text-3xl font-serif text-white mb-4 uppercase tracking-wider border-b border-zinc-800 pb-2">Corporate Rentals</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Elevate your business transportation with our tailored corporate car rental services. We offer monthly billing, VIP luxury fleets for executives, and dedicated account managers to ensure a seamless mobility experience for your workforce.
            </p>
            <div className="overflow-x-auto shadow-2xl rounded-sm border border-zinc-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800">
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Package Type</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Included Time / Kms</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Price (Sedan)</th>
                    <th className="p-4 text-zinc-300 font-semibold uppercase tracking-wider text-sm">Price (SUV)</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Half Day</td>
                    <td className="p-4">4 Hours / 40 Kms</td>
                    <td className="p-4 text-amber-500 font-medium">₹800</td>
                    <td className="p-4 text-amber-500 font-medium">₹1,200</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Full Day</td>
                    <td className="p-4">8 Hours / 80 Kms</td>
                    <td className="p-4 text-amber-500 font-medium">₹1,500</td>
                    <td className="p-4 text-amber-500 font-medium">₹2,200</td>
                  </tr>
                  <tr className="hover:bg-zinc-900/80 transition-colors">
                    <td className="p-4 font-medium text-white">Monthly Retainer</td>
                    <td className="p-4">Custom Limits</td>
                    <td className="p-4 text-amber-500 font-medium">From ₹40,000</td>
                    <td className="p-4 text-amber-500 font-medium">From ₹60,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
