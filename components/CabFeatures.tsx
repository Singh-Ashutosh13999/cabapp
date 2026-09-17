import { CheckCircle2 } from "lucide-react";

interface CabFeaturesProps {
  features: string[];
}

export default function CabFeatures({ features }: CabFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <div className="p-8 bg-white border-b border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Service?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-gray-700 font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
