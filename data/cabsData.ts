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
  {
    cityName: "Delhi",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
    description: "The capital city of India"
  },
  {
    cityName: "Mumbai",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80",
    description: "The city of dreams"
  },
  {
    cityName: "Pune",
    image: "https://images.unsplash.com/photo-1596700755745-0d2e82f5043a?auto=format&fit=crop&w=1200&q=80",
    description: "Oxford of the East"
  },
  {
    cityName: "Chandigarh",
    image: "https://images.unsplash.com/photo-1549424840-7e50073010b9?auto=format&fit=crop&w=1200&q=80",
    description: "The beautiful city"
  },
  {
    cityName: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop",
    description: "The spiritual capital of India"
  },
  {
    cityName: "Jaipur",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=2070&auto=format&fit=crop",
    description: "The Pink City of India"
  },
  {
    cityName: "Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070&auto=format&fit=crop",
    description: "Home of the magnificent Taj Mahal"
  },
  {
    cityName: "Lucknow",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070&auto=format&fit=crop",
    description: "The city of Nawabs"
  },
  {
    cityName: "Bengaluru",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2070&auto=format&fit=crop",
    description: "The Silicon Valley of India"
  },
  {
    cityName: "Hyderabad",
    image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?q=80&w=2070&auto=format&fit=crop",
    description: "The city of pearls"
  },
  {
    cityName: "Kolkata",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070&auto=format&fit=crop",
    description: "The cultural capital of India"
  },
  {
    cityName: "Amritsar",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=2070&auto=format&fit=crop",
    description: "Home of the Golden Temple"
  }
];

export const routes: Route[] = [

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
  { id: "6", slug: "mumbai-to-pune", from: "Mumbai", to: "Pune", distance: "150 km", price: 2000, duration: "3 hrs", image: "https://images.unsplash.com/photo-1605206411516-7f893e4e9766?q=80&w=2070&auto=format&fit=crop" },
  {
    id: "7",
    slug: "mumbai-to-pune",
    from: "Mumbai",
    to: "Pune",
    distance: "150 km",
    price: 2500,
    duration: "3.5 hrs",
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "8",
    slug: "mumbai-to-nashik",
    from: "Mumbai",
    to: "Nashik",
    distance: "165 km",
    price: 2800,
    duration: "3.5 hrs",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "9",
    slug: "mumbai-to-lonavala",
    from: "Mumbai",
    to: "Lonavala",
    distance: "85 km",
    price: 1800,
    duration: "2 hrs",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "10",
    slug: "mumbai-to-mahabaleshwar",
    from: "Mumbai",
    to: "Mahabaleshwar",
    distance: "265 km",
    price: 4200,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "11",
    slug: "mumbai-to-aurangabad",
    from: "Mumbai",
    to: "Aurangabad",
    distance: "335 km",
    price: 4800,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop"
  }
  ,

  { id: "12", slug: "pune-to-mahableshwar", from: "Pune", to: "Mahableshwar", distance: "120 km", price: 2500, duration: "3 hrs", image: "https://images.unsplash.com/photo-1542385262-cdf06b2db715?q=80&w=2071&auto=format&fit=crop" },
  { id: "13", slug: "chandigarh-to-shimla", from: "Chandigarh", to: "Shimla", distance: "115 km", price: 2800, duration: "3.5 hrs", image: "https://images.unsplash.com/photo-1626244498305-b0409a63273e?q=80&w=2070&auto=format&fit=crop" },
  {
    id: "14",
    slug: "varanasi-to-prayagraj",
    from: "Varanasi",
    to: "Prayagraj",
    distance: "125 km",
    price: 2500,
    duration: "3 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "15",
    slug: "varanasi-to-lucknow",
    from: "Varanasi",
    to: "Lucknow",
    distance: "320 km",
    price: 5500,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "16",
    slug: "varanasi-to-ayodhya",
    from: "Varanasi",
    to: "Ayodhya",
    distance: "220 km",
    price: 4000,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "17",
    slug: "varanasi-to-gorakhpur",
    from: "Varanasi",
    to: "Gorakhpur",
    distance: "220 km",
    price: 4000,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "18",
    slug: "varanasi-to-bodh-gaya",
    from: "Varanasi",
    to: "Bodh Gaya",
    distance: "260 km",
    price: 4500,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "19",
    slug: "varanasi-to-patna",
    from: "Varanasi",
    to: "Patna",
    distance: "250 km",
    price: 4500,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "20",
    slug: "varanasi-to-ranchi",
    from: "Varanasi",
    to: "Ranchi",
    distance: "420 km",
    price: 7000,
    duration: "8 hrs",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "21",
    slug: "varanasi-to-kanpur",
    from: "Varanasi",
    to: "Kanpur",
    distance: "330 km",
    price: 5500,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "22",
    slug: "varanasi-to-mirzapur",
    from: "Varanasi",
    to: "Mirzapur",
    distance: "65 km",
    price: 1500,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "23",
    slug: "varanasi-to-robertsganj",
    from: "Varanasi",
    to: "Robertsganj",
    distance: "100 km",
    price: 2000,
    duration: "2.5 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "24",
    slug: "varanasi-to-chitrakoot",
    from: "Varanasi",
    to: "Chitrakoot",
    distance: "270 km",
    price: 4800,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "25",
    slug: "varanasi-to-delhi",
    from: "Varanasi",
    to: "Delhi",
    distance: "820 km",
    price: 12000,
    duration: "12.5 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "26",
    slug: "jaipur-to-delhi",
    from: "Jaipur",
    to: "Delhi",
    distance: "280 km",
    price: 4000,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "27",
    slug: "jaipur-to-agra",
    from: "Jaipur",
    to: "Agra",
    distance: "240 km",
    price: 3800,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "28",
    slug: "jaipur-to-jodhpur",
    from: "Jaipur",
    to: "Jodhpur",
    distance: "335 km",
    price: 5000,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "29",
    slug: "jaipur-to-udaipur",
    from: "Jaipur",
    to: "Udaipur",
    distance: "395 km",
    price: 6000,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "30",
    slug: "jaipur-to-ajmer",
    from: "Jaipur",
    to: "Ajmer",
    distance: "135 km",
    price: 2200,
    duration: "2.5 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "31",
    slug: "jaipur-to-pushkar",
    from: "Jaipur",
    to: "Pushkar",
    distance: "150 km",
    price: 2500,
    duration: "3 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "32",
    slug: "jaipur-to-kota",
    from: "Jaipur",
    to: "Kota",
    distance: "250 km",
    price: 4000,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "33",
    slug: "jaipur-to-bikaner",
    from: "Jaipur",
    to: "Bikaner",
    distance: "335 km",
    price: 5000,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "34",
    slug: "jaipur-to-jaisalmer",
    from: "Jaipur",
    to: "Jaisalmer",
    distance: "560 km",
    price: 8500,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "35",
    slug: "jaipur-to-ranthambore",
    from: "Jaipur",
    to: "Ranthambore",
    distance: "180 km",
    price: 3000,
    duration: "3.5 hrs",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "36",
    slug: "jaipur-to-mathura",
    from: "Jaipur",
    to: "Mathura",
    distance: "220 km",
    price: 3500,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "37",
    slug: "jaipur-to-chandigarh",
    from: "Jaipur",
    to: "Chandigarh",
    distance: "510 km",
    price: 7500,
    duration: "8.5 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "38",
    slug: "agra-to-delhi",
    from: "Agra",
    to: "Delhi",
    distance: "230 km",
    price: 3500,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "39",
    slug: "agra-to-jaipur",
    from: "Agra",
    to: "Jaipur",
    distance: "240 km",
    price: 3800,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "40",
    slug: "agra-to-lucknow",
    from: "Agra",
    to: "Lucknow",
    distance: "335 km",
    price: 5500,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "41",
    slug: "agra-to-mathura",
    from: "Agra",
    to: "Mathura",
    distance: "60 km",
    price: 1500,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "42",
    slug: "agra-to-vrindavan",
    from: "Agra",
    to: "Vrindavan",
    distance: "70 km",
    price: 1600,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "43",
    slug: "agra-to-varanasi",
    from: "Agra",
    to: "Varanasi",
    distance: "600 km",
    price: 9000,
    duration: "10 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "44",
    slug: "agra-to-prayagraj",
    from: "Agra",
    to: "Prayagraj",
    distance: "450 km",
    price: 7000,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "45",
    slug: "agra-to-kanpur",
    from: "Agra",
    to: "Kanpur",
    distance: "275 km",
    price: 4500,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "46",
    slug: "agra-to-gwalior",
    from: "Agra",
    to: "Gwalior",
    distance: "120 km",
    price: 2200,
    duration: "2.5 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "47",
    slug: "agra-to-chandigarh",
    from: "Agra",
    to: "Chandigarh",
    distance: "450 km",
    price: 7000,
    duration: "7.5 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "48",
    slug: "agra-to-haridwar",
    from: "Agra",
    to: "Haridwar",
    distance: "400 km",
    price: 6500,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "49",
    slug: "agra-to-dehradun",
    from: "Agra",
    to: "Dehradun",
    distance: "420 km",
    price: 6800,
    duration: "7.5 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  }
  ,
  {
    id: "50",
    slug: "agra-to-delhi",
    from: "Agra",
    to: "Delhi",
    distance: "230 km",
    price: 3500,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "51",
    slug: "agra-to-jaipur",
    from: "Agra",
    to: "Jaipur",
    distance: "240 km",
    price: 3800,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "52",
    slug: "agra-to-lucknow",
    from: "Agra",
    to: "Lucknow",
    distance: "335 km",
    price: 5500,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "53",
    slug: "agra-to-mathura",
    from: "Agra",
    to: "Mathura",
    distance: "60 km",
    price: 1500,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "54",
    slug: "agra-to-vrindavan",
    from: "Agra",
    to: "Vrindavan",
    distance: "70 km",
    price: 1600,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "55",
    slug: "agra-to-varanasi",
    from: "Agra",
    to: "Varanasi",
    distance: "600 km",
    price: 9000,
    duration: "10 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "56",
    slug: "agra-to-prayagraj",
    from: "Agra",
    to: "Prayagraj",
    distance: "450 km",
    price: 7000,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "57",
    slug: "agra-to-kanpur",
    from: "Agra",
    to: "Kanpur",
    distance: "275 km",
    price: 4500,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "58",
    slug: "agra-to-gwalior",
    from: "Agra",
    to: "Gwalior",
    distance: "120 km",
    price: 2200,
    duration: "2.5 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "59",
    slug: "agra-to-chandigarh",
    from: "Agra",
    to: "Chandigarh",
    distance: "450 km",
    price: 7000,
    duration: "7.5 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "60",
    slug: "agra-to-haridwar",
    from: "Agra",
    to: "Haridwar",
    distance: "400 km",
    price: 6500,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "61",
    slug: "agra-to-dehradun",
    from: "Agra",
    to: "Dehradun",
    distance: "420 km",
    price: 6800,
    duration: "7.5 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "62",
    slug: "lucknow-to-varanasi",
    from: "Lucknow",
    to: "Varanasi",
    distance: "320 km",
    price: 5500,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "63",
    slug: "lucknow-to-prayagraj",
    from: "Lucknow",
    to: "Prayagraj",
    distance: "200 km",
    price: 3500,
    duration: "3.5 hrs",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "64",
    slug: "lucknow-to-ayodhya",
    from: "Lucknow",
    to: "Ayodhya",
    distance: "135 km",
    price: 2500,
    duration: "2.5 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "65",
    slug: "lucknow-to-kanpur",
    from: "Lucknow",
    to: "Kanpur",
    distance: "90 km",
    price: 1600,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "66",
    slug: "lucknow-to-delhi",
    from: "Lucknow",
    to: "Delhi",
    distance: "550 km",
    price: 8500,
    duration: "8.5 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "67",
    slug: "lucknow-to-agra",
    from: "Lucknow",
    to: "Agra",
    distance: "335 km",
    price: 5500,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "68",
    slug: "lucknow-to-gorakhpur",
    from: "Lucknow",
    to: "Gorakhpur",
    distance: "275 km",
    price: 4500,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "69",
    slug: "lucknow-to-mathura",
    from: "Lucknow",
    to: "Mathura",
    distance: "390 km",
    price: 6200,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "70",
    slug: "lucknow-to-chitrakoot",
    from: "Lucknow",
    to: "Chitrakoot",
    distance: "230 km",
    price: 4000,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "71",
    slug: "lucknow-to-bareilly",
    from: "Lucknow",
    to: "Bareilly",
    distance: "250 km",
    price: 4200,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "72",
    slug: "lucknow-to-ranthambore",
    from: "Lucknow",
    to: "Ranthambore",
    distance: "520 km",
    price: 8000,
    duration: "8.5 hrs",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "73",
    slug: "lucknow-to-nainital",
    from: "Lucknow",
    to: "Nainital",
    distance: "400 km",
    price: 6500,
    duration: "7.5 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "74",
    slug: "bengaluru-to-mysore",
    from: "Bengaluru",
    to: "Mysore",
    distance: "145 km",
    price: 2500,
    duration: "3 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "75",
    slug: "bengaluru-to-chennai",
    from: "Bengaluru",
    to: "Chennai",
    distance: "350 km",
    price: 5500,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "76",
    slug: "bengaluru-to-coorg",
    from: "Bengaluru",
    to: "Coorg",
    distance: "265 km",
    price: 4500,
    duration: "5.5 hrs",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "77",
    slug: "bengaluru-to-ooty",
    from: "Bengaluru",
    to: "Ooty",
    distance: "270 km",
    price: 4800,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "78",
    slug: "bengaluru-to-hyderabad",
    from: "Bengaluru",
    to: "Hyderabad",
    distance: "570 km",
    price: 8500,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "79",
    slug: "bengaluru-to-hampi",
    from: "Bengaluru",
    to: "Hampi",
    distance: "340 km",
    price: 6000,
    duration: "6.5 hrs",
    image: "https://images.unsplash.com/photo-1600100397608-f0108d7d2b7a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "80",
    slug: "bengaluru-to-tirupati",
    from: "Bengaluru",
    to: "Tirupati",
    distance: "250 km",
    price: 4200,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "81",
    slug: "bengaluru-to-chikmagalur",
    from: "Bengaluru",
    to: "Chikmagalur",
    distance: "245 km",
    price: 4200,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "82",
    slug: "bengaluru-to-goa",
    from: "Bengaluru",
    to: "Goa",
    distance: "560 km",
    price: 8500,
    duration: "10 hrs",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "83",
    slug: "bengaluru-to-kabini",
    from: "Bengaluru",
    to: "Kabini",
    distance: "220 km",
    price: 3800,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "84",
    slug: "bengaluru-to-hosur",
    from: "Bengaluru",
    to: "Hosur",
    distance: "40 km",
    price: 1000,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "85",
    slug: "bengaluru-to-kodaikanal",
    from: "Bengaluru",
    to: "Kodaikanal",
    distance: "465 km",
    price: 7500,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "86",
    slug: "hyderabad-to-bengaluru",
    from: "Hyderabad",
    to: "Bengaluru",
    distance: "570 km",
    price: 8500,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "87",
    slug: "hyderabad-to-chennai",
    from: "Hyderabad",
    to: "Chennai",
    distance: "630 km",
    price: 9500,
    duration: "10 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "88",
    slug: "hyderabad-to-vijayawada",
    from: "Hyderabad",
    to: "Vijayawada",
    distance: "275 km",
    price: 4500,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "89",
    slug: "hyderabad-to-tirupati",
    from: "Hyderabad",
    to: "Tirupati",
    distance: "560 km",
    price: 8500,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "90",
    slug: "hyderabad-to-warangal",
    from: "Hyderabad",
    to: "Warangal",
    distance: "150 km",
    price: 2500,
    duration: "3 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "91",
    slug: "hyderabad-to-nagpur",
    from: "Hyderabad",
    to: "Nagpur",
    distance: "500 km",
    price: 7500,
    duration: "8 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "92",
    slug: "hyderabad-to-pune",
    from: "Hyderabad",
    to: "Pune",
    distance: "560 km",
    price: 8500,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "93",
    slug: "hyderabad-to-mumbai",
    from: "Hyderabad",
    to: "Mumbai",
    distance: "710 km",
    price: 10500,
    duration: "11 hrs",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "94",
    slug: "hyderabad-to-srisailam",
    from: "Hyderabad",
    to: "Srisailam",
    distance: "215 km",
    price: 3800,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "95",
    slug: "hyderabad-to-araku-valley",
    from: "Hyderabad",
    to: "Araku Valley",
    distance: "660 km",
    price: 10000,
    duration: "11 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "96",
    slug: "hyderabad-to-kurnool",
    from: "Hyderabad",
    to: "Kurnool",
    distance: "215 km",
    price: 3500,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "97",
    slug: "hyderabad-to-rajahmundry",
    from: "Hyderabad",
    to: "Rajahmundry",
    distance: "430 km",
    price: 7000,
    duration: "7.5 hrs",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "98",
    slug: "kolkata-to-digha",
    from: "Kolkata",
    to: "Digha",
    distance: "185 km",
    price: 3000,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "99",
    slug: "kolkata-to-darjeeling",
    from: "Kolkata",
    to: "Darjeeling",
    distance: "620 km",
    price: 9500,
    duration: "12 hrs",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "100",
    slug: "kolkata-to-siliguri",
    from: "Kolkata",
    to: "Siliguri",
    distance: "580 km",
    price: 9000,
    duration: "11 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "101",
    slug: "kolkata-to-puri",
    from: "Kolkata",
    to: "Puri",
    distance: "500 km",
    price: 8000,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "102",
    slug: "kolkata-to-bhubaneswar",
    from: "Kolkata",
    to: "Bhubaneswar",
    distance: "440 km",
    price: 7000,
    duration: "8 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "103",
    slug: "kolkata-to-bokaro",
    from: "Kolkata",
    to: "Bokaro",
    distance: "330 km",
    price: 5500,
    duration: "6 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "104",
    slug: "kolkata-to-ranchi",
    from: "Kolkata",
    to: "Ranchi",
    distance: "400 km",
    price: 6500,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "105",
    slug: "kolkata-to-jamshedpur",
    from: "Kolkata",
    to: "Jamshedpur",
    distance: "285 km",
    price: 4800,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "106",
    slug: "kolkata-to-gaya",
    from: "Kolkata",
    to: "Gaya",
    distance: "500 km",
    price: 8000,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "107",
    slug: "kolkata-to-varanasi",
    from: "Kolkata",
    to: "Varanasi",
    distance: "680 km",
    price: 10500,
    duration: "12 hrs",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "108",
    slug: "kolkata-to-mandarmani",
    from: "Kolkata",
    to: "Mandarmani",
    distance: "170 km",
    price: 3000,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "109",
    slug: "kolkata-to-shantiniketan",
    from: "Kolkata",
    to: "Shantiniketan",
    distance: "165 km",
    price: 2800,
    duration: "3.5 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "110",
    slug: "amritsar-to-chandigarh",
    from: "Amritsar",
    to: "Chandigarh",
    distance: "230 km",
    price: 3500,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "111",
    slug: "amritsar-to-delhi",
    from: "Amritsar",
    to: "Delhi",
    distance: "450 km",
    price: 7000,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "112",
    slug: "amritsar-to-jalandhar",
    from: "Amritsar",
    to: "Jalandhar",
    distance: "80 km",
    price: 1500,
    duration: "1.5 hrs",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "113",
    slug: "amritsar-to-ludhiana",
    from: "Amritsar",
    to: "Ludhiana",
    distance: "140 km",
    price: 2500,
    duration: "2.5 hrs",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "114",
    slug: "amritsar-to-patiala",
    from: "Amritsar",
    to: "Patiala",
    distance: "230 km",
    price: 3500,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "115",
    slug: "amritsar-to-katra",
    from: "Amritsar",
    to: "Katra",
    distance: "260 km",
    price: 4500,
    duration: "5 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "116",
    slug: "amritsar-to-jammu",
    from: "Amritsar",
    to: "Jammu",
    distance: "215 km",
    price: 4000,
    duration: "4 hrs",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "117",
    slug: "amritsar-to-dharamshala",
    from: "Amritsar",
    to: "Dharamshala",
    distance: "200 km",
    price: 4000,
    duration: "4.5 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "118",
    slug: "amritsar-to-manali",
    from: "Amritsar",
    to: "Manali",
    distance: "400 km",
    price: 6500,
    duration: "9 hrs",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "119",
    slug: "amritsar-to-shimla",
    from: "Amritsar",
    to: "Shimla",
    distance: "300 km",
    price: 5000,
    duration: "6.5 hrs",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "120",
    slug: "amritsar-to-dehradun",
    from: "Amritsar",
    to: "Dehradun",
    distance: "380 km",
    price: 6000,
    duration: "7 hrs",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "121",
    slug: "amritsar-to-haridwar",
    from: "Amritsar",
    to: "Haridwar",
    distance: "400 km",
    price: 6500,
    duration: "7.5 hrs",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop"
  }
];

