import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { route, time, passengers, luggage } = await request.json();

    const lowerRoute = route.toLowerCase();
    const numPassengers = parseInt(passengers) || 1;
    const numLuggage = parseInt(luggage) || 0;

    let stops = [];

    // Determine vehicle based on passengers and luggage
    let vehicle = {
      name: "Premium Executive Sedan",
      desc: "Perfect for a comfortable journey for up to 3 people, offering smooth rides and great climate control.",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=600&auto=format&fit=crop",
      ratePerKm: 10
    };

    if (numPassengers >= 9) {
      vehicle = {
        name: "Urbania / Minibus",
        desc: "Maximum space for large groups. High ceiling and premium seating for long distance travel.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=600&auto=format&fit=crop",
        ratePerKm: 30
      };
    } else if (numPassengers >= 6 || (numPassengers >= 4 && numLuggage >= 4)) {
      vehicle = {
        name: "Luxury Van / Tempo Traveller",
        desc: "Ample space for large groups and heavy luggage. Travel together in absolute comfort.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=600&auto=format&fit=crop",
        ratePerKm: 19
      };
    } else if (numPassengers >= 4 || numLuggage >= 3) {
      vehicle = {
        name: "Premium SUV",
        desc: "Commanding presence and exceptional space. Ideal for groups and extensive luggage.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600&auto=format&fit=crop",
        ratePerKm: 16
      };
    }

    let timeDist = { driving: 75, sightseeing: 10, rest: 15 };
    let tip = "Traffic peaks around major city exits. We recommend departing 30 mins earlier than planned.";
    let distance = 250; // default distance in km
    let estimatedTime = "4h 30m";

    // Dynamic mock logic based on route names
    if ((lowerRoute.includes('delhi') || lowerRoute.includes('ncr')) && (lowerRoute.includes('agra') || lowerRoute.includes('jaipur'))) {
      stops = [
        { name: "Yamuna Expressway Stop", time: "1.5 hours in", desc: "Quick coffee and refreshment break at the premium food court." },
        { name: "Heritage Detour", time: "2.5 hours in", desc: "Optional quick visit to local historical sites near the highway." }
      ];
      timeDist = { driving: 70, sightseeing: 20, rest: 10 };
      tip = "The Yamuna expressway is smooth, but fog in early mornings can slow you down. Plan accordingly.";
      distance = lowerRoute.includes('jaipur') ? 280 : 230;
      estimatedTime = lowerRoute.includes('jaipur') ? "5h" : "3h 30m";

    } else if (lowerRoute.includes('mumbai') && lowerRoute.includes('pune')) {
      stops = [
        { name: "Lonavala Khandala Ghats", time: "1 hour 45 mins in", desc: "Scenic viewpoint and famous for local chikki and fudge." },
        { name: "Expressway Food Mall", time: "2.5 hours in", desc: "Great spot for Vada Pav, hot tea, and quick rest." }
      ];
      timeDist = { driving: 65, sightseeing: 20, rest: 15 };
      tip = "Ghat sections can get crowded on weekends. A weekday trip offers the most serene experience.";
      distance = 150;
      estimatedTime = "3h";

    } else {
      stops = [
        { name: "Scenic Highway Viewpoint", time: "1/3 of the journey", desc: "Perfect spot to stretch legs, take photos, and relax." },
        { name: "Highly-Rated Local Dining", time: "Halfway point", desc: "Experience authentic local cuisine and great hospitality." }
      ];
      // Generate a random distance between 100 and 600 for unknown routes
      distance = Math.floor(Math.random() * 500) + 100;
      const hours = Math.floor(distance / 50);
      const mins = Math.floor((distance % 50) / 50 * 60);
      estimatedTime = `${hours}h ${mins > 0 ? mins + 'm' : ''}`;
    }

    const price = distance * vehicle.ratePerKm;

    return NextResponse.json({
      route: route,
      time: time,
      stops: stops,
      timeDistribution: timeDist,
      vehicle: vehicle,
      tip: tip,
      tripDetails: {
        distance,
        estimatedTime,
        price,
        ratePerKm: vehicle.ratePerKm
      }
    });

  } catch (error) {
    return NextResponse.json({ error: "Failed to generate itinerary" }, { status: 500 });
  }
}
