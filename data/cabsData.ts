export interface Route {
  id: string;
  slug: string;
  from: string;
  to: string;
  distance: string;
  price: number;
  duration: string;
  image: string;
}

export interface CityData {
  cityName: string;
  image: string;
  description: string;
}

export const cities: CityData[] = [
  { cityName: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop", description: "The capital city of India" },
  { cityName: "Mumbai", image: "https://images.unsplash.com/photo-1522222948339-38e4a9e55353?q=80&w=2070&auto=format&fit=crop", description: "The city of dreams" },
  { cityName: "Pune", image: "https://images.unsplash.com/photo-1596700755745-0d2e82f5043a?q=80&w=2072&auto=format&fit=crop", description: "Oxford of the East" },
  { cityName: "Chandigarh", image: "https://images.unsplash.com/photo-1549424840-7e50073010b9?q=80&w=2070&auto=format&fit=crop", description: "The beautiful city" }
];

export const routes: Route[] = [
  { id: "1", slug: "delhi-to-chandigarh", from: "Delhi", to: "Chandigarh", distance: "250 km", price: 3500, duration: "4.5 hrs", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop" },
  { id: "2", slug: "delhi-to-agra", from: "Delhi", to: "Agra", distance: "230 km", price: 3000, duration: "4 hrs", image: "https://images.unsplash.com/photo-1564507592224-2fc8c614b433?q=80&w=2071&auto=format&fit=crop" },
  {
    id: "1",
    slug: "delhi-to-chandigarh",
    from: "Delhi",
    to: "Chandigarh",
    distance: "250 km",
    price: 3500,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    slug: "delhi-to-jaipur",
    from: "Delhi",
    to: "Jaipur",
    distance: "280 km",
    price: 3800,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    slug: "delhi-to-agra",
    from: "Delhi",
    to: "Agra",
    distance: "240 km",
    price: 3200,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    slug: "delhi-to-dehradun",
    from: "Delhi",
    to: "Dehradun",
    distance: "250 km",
    price: 3600,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "5",
    slug: "delhi-to-amritsar",
    from: "Delhi",
    to: "Amritsar",
    distance: "450 km",
    price: 5500,
    duration: "8 hrs",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=2070&auto=format&fit=crop"
  },
  { id: "3", slug: "mumbai-to-pune", from: "Mumbai", to: "Pune", distance: "150 km", price: 2000, duration: "3 hrs", image: "https://images.unsplash.com/photo-1605206411516-7f893e4e9766?q=80&w=2070&auto=format&fit=crop" },
 {
    id: "1",
    slug: "mumbai-to-pune",
    from: "Mumbai",
    to: "Pune",
    distance: "150 km",
    price: 2500,
    duration: "3.5 hrs",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    slug: "mumbai-to-nashik",
    from: "Mumbai",
    to: "Nashik",
    distance: "165 km",
    price: 2800,
    duration: "3.5 hrs",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    slug: "mumbai-to-lonavala",
    from: "Mumbai",
    to: "Lonavala",
    distance: "85 km",
    price: 1800,
    duration: "2 hrs",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    slug: "mumbai-to-mahabaleshwar",
    from: "Mumbai",
    to: "Mahabaleshwar",
    distance: "265 km",
    price: 4200,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "5",
    slug: "mumbai-to-aurangabad",
    from: "Mumbai",
    to: "Aurangabad",
    distance: "335 km",
    price: 4800,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop"
  }
,

  { id: "4", slug: "pune-to-mahableshwar", from: "Pune", to: "Mahableshwar", distance: "120 km", price: 2500, duration: "3 hrs", image: "https://images.unsplash.com/photo-1542385262-cdf06b2db715?q=80&w=2071&auto=format&fit=crop" },
  { id: "5", slug: "chandigarh-to-shimla", from: "Chandigarh", to: "Shimla", distance: "115 km", price: 2800, duration: "3.5 hrs", image: "https://images.unsplash.com/photo-1626244498305-b0409a63273e?q=80&w=2070&auto=format&fit=crop" }
];
