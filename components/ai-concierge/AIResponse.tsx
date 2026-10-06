"use client";

export default function AIResponse({ data }: { data: any }) {
  if (!data || !data.stops) return null;

  return (
    <div className="bg-zinc-950/50 border border-zinc-800 rounded-3xl p-6 lg:p-8 space-y-8 h-full flex flex-col">
      <div className="border-b border-zinc-800 pb-5">
        <h3 className="text-xl font-bold text-white mb-2">Curated Itinerary</h3>
        <p className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em]">{data.route} &bull; {data.time}</p>
      </div>

      <div className="flex-1">
        <h4 className="text-xs font-bold text-zinc-400 mb-6 flex items-center gap-3 uppercase tracking-[0.15em]">
          <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
          </span>
          Recommended Stops
        </h4>

        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-amber-500/50 before:via-zinc-800 before:to-transparent pl-4">

          {data.stops.map((stop: any, index: number) => (
            <div key={index} className="relative z-10 flex items-start gap-5 group">
              <div className="w-3.5 h-3.5 mt-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)] shrink-0 ring-4 ring-zinc-950 group-hover:scale-125 transition-transform"></div>
              <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800/50 flex-1 group-hover:border-amber-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                  <p className="text-base font-bold text-white">{stop.name}</p>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-md self-start sm:self-auto border border-amber-500/20">
                    {stop.time}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{stop.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800">
        <h4 className="text-xs font-bold text-zinc-400 mb-4 flex items-center gap-3 uppercase tracking-[0.15em]">
          <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Time Distribution
        </h4>
        <div className="flex w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800 mb-3">
          <div className="bg-amber-500" style={{ width: data.timeDistribution.driving + '%' }} title={'Driving (' + data.timeDistribution.driving + '%)'}></div>
          <div className="bg-blue-500" style={{ width: data.timeDistribution.sightseeing + '%' }} title={'Sightseeing (' + data.timeDistribution.sightseeing + '%)'}></div>
          <div className="bg-green-500" style={{ width: data.timeDistribution.rest + '%' }} title={'Rest (' + data.timeDistribution.rest + '%)'}></div>
        </div>
        <div className="flex justify-between text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span> Driving</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span> Sights</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span> Rest</span>
        </div>
      </div>

      {data.tip && (
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex gap-4 items-start mt-auto">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-amber-500 mb-0.5">Pro Tip</p>
            <p className="text-xs text-amber-500/80 leading-relaxed">
              {data.tip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
