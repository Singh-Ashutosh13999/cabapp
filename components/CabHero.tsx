import Image from 'next/image';

interface CabHeroProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function CabHero({ title, description, imageUrl }: CabHeroProps) {
  return (
    <div className="bg-white rounded-t-2xl shadow-sm overflow-hidden border-b border-gray-100">
      {imageUrl && (
        <div className="w-full h-64 md:h-80 relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
            <p className="text-lg text-gray-200">Your premium ride awaits</p>
          </div>
        </div>
      )}
      {!imageUrl && (
        <div className="bg-blue-600 px-8 py-12 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100">Your premium ride awaits</p>
        </div>
      )}
      <div className="p-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          {description || 'Enjoy a comfortable, safe, and professional cab ride with our experienced drivers. We prioritize your comfort and time.'}
        </p>
      </div>
    </div>
  );
}
