import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface PricingItem {
  car: string;
  rate: string;
  details: string;
}

interface ServiceData {
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  offer: string;
  image: string;
  features: Feature[];
  pricing: PricingItem[];
}

const serviceData: Record<string, ServiceData> = {
  city: {
    title: "City Rides",
    heroTitle: "Premium City Cab Services Starting at Just ₹12/km",
    heroSubtitle: "Skip the traffic and travel in comfort. From daily office commutes to shopping sprees, our top-rated local cabs are always at your service.",
    offer: "🎉 Special Offer: Use Code CITY250 to get ₹250 OFF your first ride!",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Quick Pickups", desc: "Cabs available in under 10 minutes across the city.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
      { title: "Verified Drivers", desc: "Highly professional and background-verified chauffeurs.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
      { title: "Clean Cars", desc: "Top hygiene standards maintained in every single ride.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
    ],
    pricing: [
      { car: "Hatchback (Swift, Celerio)", rate: "₹12 / km", details: "Ideal for 4 passengers, economic daily commute." },
      { car: "Sedan (Dzire, Etios)", rate: "₹15 / km", details: "Spacious trunk, great for airport runs or family." },
      { car: "SUV (Innova, Ertiga)", rate: "₹20 / km", details: "Ultimate comfort for up to 6 passengers." }
    ]
  },
  airport: {
    title: "Airport Transfer",
    heroTitle: "Hassle-Free Airport Taxi Services from ₹500 Flat",
    heroSubtitle: "Never miss a flight or wait endlessly after landing. Dedicated airport transfer service with ample luggage space and zero wait time.",
    offer: "✈️ Free Upgrade: Book a Sedan at Hatchback price on prepaid bookings!",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Zero Wait Time", desc: "Your cab will be waiting at the arrival gate.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { title: "Flight Tracking", desc: "We track your flight to adjust pickup times.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
      { title: "Extra Luggage", desc: "Spacious trunks for international travel bags.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
    ],
    pricing: [
      { car: "Hatchback (Swift, Celerio)", rate: "₹500 Flat Rate", details: "City Center to Airport. Up to 2 check-in bags." },
      { car: "Sedan (Dzire, Etios)", rate: "₹700 Flat Rate", details: "Premium comfort. Up to 3 check-in bags." },
      { car: "SUV (Innova, Ertiga)", rate: "₹1000 Flat Rate", details: "Group travel. Up to 5 large bags easily." }
    ]
  },
  outstation: {
    title: "Outstation Trips",
    heroTitle: "Reliable Outstation Cabs starting at ₹10/km",
    heroSubtitle: "Planning a weekend getaway or intercity travel? Enjoy comfortable, long-distance journeys with experienced highway drivers at highly affordable rates.",
    offer: "⛰️ Flat 10% OFF on Return Trips exceeding 500 kms!",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Expert Drivers", desc: "Chauffeurs specifically trained for long highway drives.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
      { title: "No Hidden Costs", desc: "Transparent billing with state tax and toll guidelines.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      { title: "24/7 Support", desc: "Dedicated trip managers to ensure a smooth journey.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
    ],
    pricing: [
      { car: "Hatchback (Swift, Celerio)", rate: "₹10 / km", details: "Minimum 250km/day billing applies." },
      { car: "Sedan (Dzire, Etios)", rate: "₹12 / km", details: "Minimum 250km/day billing applies." },
      { car: "SUV (Innova, Ertiga)", rate: "₹16 / km", details: "Minimum 250km/day billing applies." }
    ]
  },
  corporate: {
    title: "Corporate Booking",
    heroTitle: "Premium Corporate Cab Services & Rentals",
    heroSubtitle: "Elevate your business transportation. We offer reliable fleets for employee commutes, VIP transfers, and corporate events with consolidated GST billing.",
    offer: "💼 Get 1 Month FREE on signing a 12-month Annual Contract!",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    features: [
      { title: "Priority Booking", desc: "Dedicated lines and guaranteed cab availability.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
      { title: "Monthly Invoicing", desc: "Streamlined corporate GST billing and MIS reports.", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
      { title: "VIP Fleet", desc: "Top-end luxury vehicles available for executive travel.", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
    ],
    pricing: [
      { car: "Sedan - Monthly Retainer", rate: "Custom Quote", details: "Dedicated driver, fixed limits, zero surge." },
      { car: "SUV - Event Hire (8 hrs)", rate: "₹2500 / day", details: "Perfect for delegations and company events." },
      { car: "Luxury (Camry, Benz)", rate: "On Request", details: "Ultimate luxury for top executives and VIPs." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ serviceType: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = serviceData[resolvedParams.serviceType];
  if (!data) return { title: 'Service Not Found' };
  return { title: `${data.title} | Premium Cab Services`, description: data.heroSubtitle };
}

export default async function ServicePage({ params }: { params: Promise<{ serviceType: string }> }) {
  const resolvedParams = await params;
  const data = serviceData[resolvedParams.serviceType];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">

      {/* Hero Section with Split Layout & Image */}
      <div className="relative pt-20 pb-16 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 border-b border-zinc-800 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
                {data.title}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                {data.heroTitle.split(' ').map((word: string, i: number) =>
                  word.includes('₹') || word.includes('Code') || word.includes('FREE') || word.includes('Premium') || word.includes('Hassle-Free') || word.includes('Reliable')
                    ? <span key={i} className="text-amber-500">{word} </span>
                    : <span key={i}>{word} </span>
                )}
              </h1>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
                {data.heroSubtitle}
              </p>

              <div className="inline-block bg-gradient-to-r from-amber-500/20 to-amber-500/5 border border-amber-500/30 rounded-lg py-3 px-6 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <p className="text-amber-400 font-bold text-sm md:text-base flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {data.offer}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-md lg:max-w-none relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.15)] border border-zinc-800/50">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Features Section (Smaller Icons, Side-by-side layout) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Why Choose Our {data.title}?</h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features.map((feat: Feature, idx: number) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-6 hover:bg-zinc-900 transition-colors flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feat.icon}></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{feat.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section (Compact & Refined) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">Transparent Pricing</h2>
            <p className="text-zinc-400 text-sm">No hidden fees, no surge charges. What you see is exactly what you pay.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-950/80 border-b border-zinc-800">
                    <th className="py-4 px-6 font-bold text-zinc-300 uppercase tracking-wider text-xs">Vehicle Category</th>
                    <th className="py-4 px-6 font-bold text-zinc-300 uppercase tracking-wider text-xs">Rate / Package</th>
                    <th className="py-4 px-6 font-bold text-zinc-300 uppercase tracking-wider text-xs">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  {data.pricing.map((item: PricingItem, idx: number) => (
                    <tr key={idx} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-5 px-6 font-medium text-white">
                        {item.car}
                      </td>
                      <td className="py-5 px-6 text-amber-500 font-bold">
                        {item.rate}
                      </td>
                      <td className="py-5 px-6 text-zinc-400 text-sm">
                        {item.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>

          <div className="flex-1 text-center md:text-left pl-4">
            <h2 className="text-2xl font-serif font-bold text-white mb-2">Ready to Book Your Ride?</h2>
            <p className="text-zinc-400 text-sm">
              Our support team is available 24/7. Get instant confirmation via WhatsApp or Call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/7839656268"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 text-sm font-bold tracking-wider uppercase rounded-md hover:bg-amber-400 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              WhatsApp
            </a>
            <a
              href="tel:+917839656268"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-white text-sm font-bold tracking-wider uppercase rounded-md hover:bg-zinc-800 hover:border-amber-500 hover:text-amber-500 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Call Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
