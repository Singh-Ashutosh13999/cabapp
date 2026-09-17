import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/mongodb';
import CabRoute from '@/models/CabRoute';
import CabHero from '@/components/CabHero';
import CabFeatures from '@/components/CabFeatures';
import CabBookingCard from '@/components/CabBookingCard';
import ImageSection from '@/components/ImageSection';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate dynamic metadata for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  await dbConnect();

  const route = await CabRoute.findOne({ slug }).lean() as any;

  if (!route) {
    return {
      title: 'Route Not Found | Premium Cab Booking',
    };
  }

  return {
    title: `${route.title} | Premium Cab Booking`,
    description: route.description || `Book a cab for ${route.title} starting at $${route.price}. Safe and comfortable rides.`,
    openGraph: {
      title: route.title,
      description: route.description || `Book a cab for ${route.title} starting at $${route.price}.`,
      type: 'website',
      images: route.imageUrl ? [{ url: route.imageUrl }] : [],
    },
  };
}

export default async function CabRoutePage({ params }: Props) {
  const { slug } = await params;
  await dbConnect();

  const route = await CabRoute.findOne({ slug }).lean() as any;

  if (!route) {
    notFound();
  }

  // Schema Markup (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: route.title,
    description: route.description || `Cab route for ${route.title}`,
    image: route.imageUrl,
    offers: {
      '@type': 'Offer',
      price: route.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Inject Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col">
        <CabHero
          title={route.title}
          description={route.description}
          imageUrl={route.imageUrl}
        />
        <CabFeatures features={route.features || []} />
        <CabBookingCard price={route.price} routeSlug={route.slug} />
        <ImageSection images={route.galleryImages} />
      </div>
    </div>
  );
}
