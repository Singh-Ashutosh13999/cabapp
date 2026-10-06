"use client";
import { useState } from 'react';
import AIInput from './AIInput';
import AIResponse from './AIResponse';
import VehicleRecommendation from './VehicleRecommendation';

export default function AIConcierge() {
  const [tripData, setTripData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSuggest = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setTripData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10 w-full mt-10">
      <div className="w-full bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/80 rounded-[2rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
          
          {/* Left Column: Intro & Form */}
          {!tripData && (
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                  <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-white leading-tight font-serif">AI Concierge</h2>
                  <p className="text-sm text-amber-500 font-bold tracking-[0.15em] uppercase mt-1">Smart Route Planning</p>
                </div>
              </div>
              
              <p className="text-zinc-400 mb-10 font-light leading-relaxed text-lg">
                Enter your destination and duration. Our AI analyzes the topography to curate the perfect itinerary, suggesting the best rest stops, scenic views, and the ideal vehicle for your journey.
              </p>

              <AIInput onSubmit={handleSuggest} isLoading={isLoading} />
            </div>
          )}

          {/* Right Column: Results */}
          <div className={`w-full ${!tripData ? 'lg:w-[60%]' : ''}`}>
            {!tripData && !isLoading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center py-20 border-2 border-dashed border-zinc-800 rounded-3xl bg-zinc-950/30">
                <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <svg className="w-10 h-10 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-300 mb-2">Awaiting Instructions</h3>
                <p className="text-zinc-500 font-light text-center max-w-sm">Submit your route details to generate a highly personalized travel itinerary.</p>
              </div>
            )}

            {isLoading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center py-20 border-2 border-dashed border-amber-500/30 rounded-3xl bg-amber-500/5">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-4 border-zinc-800 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Analyzing Route Topography...</h3>
                <p className="text-zinc-400 font-light">Discovering the best experiences for your journey</p>
              </div>
            )}

            {tripData && !isLoading && (
              <div className="animate-in fade-in zoom-in-95 duration-700">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                    <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-white leading-tight font-serif">AI Concierge Results</h2>
                    <p className="text-sm text-amber-500 font-bold tracking-[0.15em] uppercase mt-1">Smart Route Planning</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                  <AIResponse data={tripData} />
                  <VehicleRecommendation data={tripData} />
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => setTripData(null)}
                    className="px-8 py-3 bg-transparent border border-zinc-700 hover:border-amber-500 hover:text-amber-500 text-zinc-400 rounded-xl transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                  >
                    Reset & Plan New Route
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
