import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, routes } from '@/data/cabsData';

// Generate static params for SSG
export function generateStaticParams() {
  return cities.map((city) => ({
    cityName: city.cityName.toLowerCase(),
  }));
}

// Next.js 15+ ke liye params ko Promise type banaya hai
interface CityPageProps {
  params: Promise<{
    cityName: string;
  }>;
}

export default async function CityPage({ params }: CityPageProps) {
  // Await params (Next.js 15+ compatibility)
  const resolvedParams = await params;
  const currentCity = resolvedParams.cityName.toLowerCase();

  // Find city info safely
  const cityInfo = cities.find(
    (c) => c.cityName.toLowerCase() === currentCity
  );

  if (!cityInfo) {
    notFound();
  }

  // Filter routes where 'from' matches current city
  const cityRoutes = routes.filter(
    (r) => r.from.toLowerCase() === currentCity
  );

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans selection:bg-amber-500/30">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cityInfo.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Cabs from {cityInfo.cityName}
          </h1>
          <p className="text-zinc-300 text-lg">{cityInfo.description}</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center">
            &larr; Back to all cities
          </Link>
        </div>

        <h2 className="text-3xl font-serif text-zinc-900 mb-8">Available Routes</h2>

        {cityRoutes.length === 0 ? (
          <div className="bg-white p-16 text-center border border-zinc-100 shadow-sm rounded-xl">
            <p className="text-zinc-500 text-lg">No routes available from {cityInfo.cityName} currently.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityRoutes.map((route) => (
              <Link
                href={`/${currentCity}/${route.slug}`}
                key={route.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 relative overflow-hidden shrink-0">
                  <img src={route.image} alt={route.slug} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white drop-shadow-md mb-1">{route.from} to {route.to}</h3>
                      <p className="text-amber-400 font-bold">₹{route.price}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between text-sm text-gray-600 mb-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex flex-col items-center w-1/2">
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Distance</span>
                      <span className="font-semibold text-gray-800">{route.distance}</span>
                    </div>
                    <div className="w-px bg-gray-200"></div>
                    <div className="flex flex-col items-center w-1/2">
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Duration</span>
                      <span className="font-semibold text-gray-800">{route.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-auto">
                    <span className="text-blue-600 font-semibold text-sm group-hover:text-amber-500 transition-colors">View Details &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}