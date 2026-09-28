import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes } from '@/data/cabsData';
import BookingForm from './BookingForm';

const landmarkImages = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585135402096-7c0506eb3a77?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1564507592224-2fc8c614b433?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506461883276-594c397e4114?auto=format&fit=crop&w=800&q=80"
];

const foodImages = [
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1625398407796-a29b05786ed8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1589301760014-d929f39ce9de?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
];

function getImageForRoute(slug: string, images: string[]) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % images.length;
  return images[index];
}
export function generateStaticParams() {
  return routes.map((route) => ({
    routeSlug: route.slug,
  }));
}

interface RoutePageProps {
  params: Promise<{
    routeSlug: string;
  }>;
}

export default async function RoutePage({ params }: RoutePageProps) {
  const resolvedParams = await params;
  const route = routes.find(r => r.slug === resolvedParams.routeSlug);

  if (!route) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${route.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold tracking-widest uppercase">
              Premium Route
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            {route.from} <span className="text-amber-500 mx-2">&rarr;</span> {route.to}
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl font-light">Experience luxury travel between {route.from} and {route.to}.</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-8 md:p-12">
          <div className="mb-8">
            <Link href={`/${route.from.toLowerCase()}`} className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center">
              &larr; Back to {route.from} routes
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-zinc-900 mb-6">Trip Overview</h2>
              <p className="text-zinc-600 leading-relaxed font-light mb-8">
                Enjoy a comfortable, safe, and luxurious journey from {route.from} to {route.to} with our professional chauffeurs.
                Our premium fleet ensures that you arrive at your destination refreshed and relaxed.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Distance</p>
                    <p className="text-xl font-semibold text-zinc-900">{route.distance}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Estimated Time</p>
                    <p className="text-xl font-semibold text-zinc-900">{route.duration}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Starting Price</p>
                    <p className="text-xl font-semibold text-zinc-900">₹{route.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Book this Route</h3>

                <BookingForm route={route} />
            </div>
          </div>
        </div>
      </section>

      {/* Added Content Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-serif text-zinc-900 mb-6">About the Journey from {route.from} to {route.to}</h2>
          <p className="text-zinc-600 leading-relaxed font-light mb-6">
            Traveling from {route.from} to {route.to} is more than just a commute; it is an experience of comfort and scenic beauty. 
            Whether you are traveling for business or leisure, our premium cab service ensures a smooth, uninterrupted ride.
            Enjoy the changing landscapes as you recline in our well-maintained, air-conditioned vehicles, driven by professional chauffeurs.
          </p>

          <h3 className="text-2xl font-serif text-zinc-900 mb-4 mt-10">Famous Landmarks Along the Way</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm border border-zinc-100">
              <img src={getImageForRoute(route.slug, landmarkImages)} alt={`Landmarks near ${route.to}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-zinc-900">Historical Monuments in {route.to}</h4>
                <p className="text-zinc-600 text-sm mt-2">Discover ancient structures and beautiful architecture during your trip.</p>
              </div>
            </div>
            <div className="bg-zinc-50 rounded-xl overflow-hidden shadow-sm border border-zinc-100">
              <img src={getImageForRoute(route.slug, foodImages)} alt="Local Cuisine" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-zinc-900">Highway Dhabas & Local Cuisine</h4>
                <p className="text-zinc-600 text-sm mt-2">Stop by famous local eateries to experience authentic regional cuisine on the way to {route.to}.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif text-zinc-900 mb-4 mt-10">Fare Breakdown & Route Details</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-zinc-200 border border-zinc-200 rounded-lg overflow-hidden">
              <thead className="bg-zinc-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Vehicle Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Passengers</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Estimated Fare</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Features</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-zinc-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">Sedan</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Up to 4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">₹{route.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">AC, Free Wi-Fi, Water</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">SUV</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Up to 6</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">₹{route.price + 1500}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Extra Luggage, AC, Premium Seats</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900">Luxury</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Up to 4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">₹{route.price * 2}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">Leather Seats, Refreshments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}