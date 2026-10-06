export interface FareDetails {
  baseFare: number;
  distanceKm: number;
  additionalCharges: number;
  totalFare: number;
}

export function calculateFare(
  distanceStr: string | number,
  vehicleType: string
): FareDetails {
  // If distance comes in as "250 km", parse it
  let distanceKm = 0;
  if (typeof distanceStr === "string") {
    const match = distanceStr.match(/(\d+)/);
    if (match) {
      distanceKm = parseInt(match[1], 10);
    }
  } else if (typeof distanceStr === "number") {
    distanceKm = distanceStr;
  }

  // Fallback distance if not found
  if (!distanceKm) distanceKm = 100;

  // Base rates per km based on vehicle type
  let ratePerKm = 12; // default Sedan
  let baseFareFixed = 500;

  const type = vehicleType.toLowerCase();
  if (type.includes("suv")) {
    ratePerKm = 18;
    baseFareFixed = 800;
  } else if (type.includes("luxury") || type.includes("first class")) {
    ratePerKm = 35;
    baseFareFixed = 2000;
  }

  const baseFare = distanceKm * ratePerKm + baseFareFixed;
  const additionalCharges = Math.round(baseFare * 0.05); // 5% GST/Taxes
  const totalFare = baseFare + additionalCharges;

  return {
    baseFare,
    distanceKm,
    additionalCharges,
    totalFare,
  };
}
