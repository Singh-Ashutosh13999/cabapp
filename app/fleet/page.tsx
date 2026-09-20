import Link from 'next/link';

export const metadata = {
  title: 'Our Fleet | Premium Cab Booking',
};

export default function FleetPage() {
  const fleet = [
    {
      id: 1,
      name: 'Economy Hatchback',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      engine: 'Petrol / CNG',
      driverCharge: '₹300 / Day',
      price: 'From ₹12 / Km',
      seating: '4 Passengers',
      description: 'Perfect for quick city rides and navigating through traffic with ease. Highly fuel-efficient and budget-friendly without compromising on basic comfort.',
      features: ['AC', 'Compact', 'Budget Friendly']
    },
    {
      id: 2,
      name: 'Prime Sedan',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      engine: 'Diesel',
      driverCharge: '₹350 / Day',
      price: 'From ₹15 / Km',
      seating: '4 Passengers',
      description: 'Experience a smooth and comfortable ride with spacious legroom and advanced suspension. Ideal for airport transfers and outstation business trips.',
      features: ['Premium AC', 'Extra Boot Space', 'Spacious Legroom']
    },
    {
      id: 3,
      name: 'Premium SUV',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      engine: 'Diesel',
      driverCharge: '₹400 / Day',
      price: 'From ₹20 / Km',
      seating: '6 Passengers',
      description: 'Commanding road presence and robust power. The ultimate choice for family getaways and hilly terrains, ensuring safety and comfort for everyone.',
      features: ['Dual AC', 'High Ground Clearance', 'Large Boot']
    },
    {
      id: 4,
      name: 'Luxury Class',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
      engine: 'Petrol Hybrid',
      driverCharge: '₹600 / Day',
      price: 'From ₹45 / Km',
      seating: '4 Passengers',
      description: 'Arrive in style with our VIP luxury fleet. Featuring top-tier aesthetics, ultra-plush interiors, and whisper-quiet cabins for high-end corporate requirements.',
      features: ['Leather Seats', 'Surround Sound', 'VIP Amenities']
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-wider">Our Premium Fleet</h1>
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto font-light">
          Explore our diverse collection of meticulously maintained vehicles. From economical hatchbacks to VIP luxury sedans, we have the perfect car for every journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {fleet.map((car) => (
            <div key={car.id} className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden hover:border-amber-500 transition-colors group flex flex-col">
              <div className="relative h-64 w-full overflow-hidden bg-zinc-800">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-sm text-amber-500 px-4 py-2 text-sm font-bold border border-amber-500/30 tracking-wider">
                  {car.price}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{car.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {car.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-zinc-800/50">
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Engine Type</p>
                    <p className="text-zinc-300 text-sm font-medium">{car.engine}</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Driver Allowance</p>
                    <p className="text-zinc-300 text-sm font-medium">{car.driverCharge}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Seating Capacity</p>
                    <p className="text-zinc-300 text-sm font-medium">{car.seating}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {car.features.map((feature, idx) => (
                    <span key={idx} className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="mt-auto block text-center bg-amber-500 text-zinc-950 font-bold uppercase tracking-wider py-4 hover:bg-amber-400 transition-colors">
                  Book This Vehicle
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
