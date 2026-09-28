import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Premium Cab Services',
  description: 'Learn about Yatra Saathi, our mission, values, and commitment to providing the best premium cab services.',
};

export default function AboutPage() {
  const stats = [
    { label: 'Happy Riders', value: '50K+' },
    { label: 'Premium Vehicles', value: '1,200+' },
    { label: 'Cities Covered', value: '45+' },
    { label: '5-Star Ratings', value: '98%' },
  ];

  const values = [
    {
      title: 'Uncompromising Safety',
      description: 'Your safety is our top priority. Every driver is background-verified, and every ride is tracked in real-time.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      title: 'Premium Comfort',
      description: 'Step into spotless, well-maintained vehicles. We believe the journey should be as luxurious as the destination.',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    },
    {
      title: 'Absolute Reliability',
      description: 'Zero cancellations and strict punctuality. When you book with us, you can count on us to be there on time, every time.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-zinc-900 overflow-hidden border-b border-zinc-800">
        {/* Abstract Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none -mt-32 -mr-32"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
            Redefining <span className="text-amber-500">Mobility</span>
            <br /> One Ride at a Time.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl font-light">
            Founded with a vision to bring trust and luxury to everyday travel, we are more than just a cab service. We are your reliable travel partner.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Mission & Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Mission</h2>
              <div className="h-1 w-16 bg-amber-500 rounded-full"></div>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We started our journey with a simple question: Why should premium travel be a luxury? Our mission is to make safe, comfortable, and reliable transportation accessible to everyone. 
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Whether you're heading to an important corporate meeting, catching a red-eye flight, or exploring a new city, we ensure your journey is as seamless and stress-free as possible.
            </p>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.1)] border border-zinc-800/50 relative group">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Fleet"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-zinc-900/10 transition-colors"></div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-zinc-900 border-t border-b border-zinc-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Core Values</h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">The principles that drive us forward every single day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-amber-500/40 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={val.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Experience the Difference.</h2>
        <p className="text-xl text-zinc-400 mb-10 font-light">Join thousands of happy riders who trust us for their daily commute.</p>
        <Link 
          href="/services"
          className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-zinc-950 font-bold tracking-widest uppercase rounded-lg hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:-translate-y-1"
        >
          Explore Our Services
        </Link>
      </div>

    </div>
  );
}
