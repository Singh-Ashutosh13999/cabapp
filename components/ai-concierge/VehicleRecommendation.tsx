"use client";

export default function VehicleRecommendation({ data }: { data: any }) {
  if (!data || !data.vehicle) return null;
  const { vehicle } = data;

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 lg:p-8 relative overflow-hidden group h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="border-b border-zinc-800 pb-5 mb-6 relative z-10">
        <h4 className="text-xs font-bold text-zinc-400 flex items-center gap-3 uppercase tracking-[0.15em]">
          <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </span>
          Suggested Vehicle
        </h4>
      </div>
      
      <div className="flex-1 flex flex-col relative z-10">
        <div className="w-full h-48 sm:h-56 bg-zinc-900 rounded-2xl overflow-hidden relative shadow-2xl border border-zinc-800 mb-6 group-hover:border-amber-500/30 transition-colors">
          <img 
            src={vehicle.image} 
            alt={vehicle.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/90 text-zinc-950 text-[10px] font-bold tracking-wider uppercase shadow-lg mb-2">
              Best Match
            </span>
            <h3 className="text-2xl font-bold text-white drop-shadow-md">{vehicle.name}</h3>
          </div>
        </div>
        
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
          {vehicle.desc}
        </p>
        
        {data.tripDetails && (
          <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-4 mb-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Est. Distance</span>
              <span className="text-zinc-300 font-medium">{data.tripDetails.distance} km</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Est. Time</span>
              <span className="text-zinc-300 font-medium">{data.tripDetails.estimatedTime}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-zinc-800/50">
              <span className="text-amber-500/80 text-xs uppercase tracking-widest font-bold">Estimated Price</span>
              <div className="text-right">
                <span className="text-white font-bold text-lg">₹{data.tripDetails.price}</span>
                <span className="block text-zinc-500 text-[10px] mt-0.5">Based on ₹{data.tripDetails.ratePerKm}/km</span>
              </div>
            </div>
          </div>
        )}

        <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2">
          <span>Book This Vehicle</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
