import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes } from '@/data/cabsData';
import BookingForm from './BookingForm';

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
    </div>
  );
}