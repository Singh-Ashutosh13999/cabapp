'use client';

import { useState } from 'react';

export default function BookingForm({ route }: { route: any }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      pickup: formData.get('pickup'),
      dropoff: formData.get('dropoff'),
      date: formData.get('date'),
      time: formData.get('time'),
      price: route.price,
      routeFrom: route.from,
      routeTo: route.to,
    };

    try {
      const res = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.success) {
        setSuccess(true);
      } else {
        setError(json.error || 'Failed to submit booking.');
      }
    } catch (err) {
      setError('An error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
        <h4 className="text-xl font-bold mb-2">Booking Requested Successfully!</h4>
        <p>We will contact you shortly on your mobile number.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
        <input name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-amber-500 focus:border-amber-500 bg-white" placeholder="Enter your name" />
      </div>



      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Mobile Number</label>
        <input name="mobile" type="tel" required className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-amber-500 focus:border-amber-500 bg-white" placeholder="Enter your mobile number" />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Pick-up Location</label>
        <input name="pickup" type="text" required className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-amber-500 focus:border-amber-500 bg-white" placeholder={`Anywhere in ${route.from}`} defaultValue={route.from} />
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1">Drop-off Location</label>
        <input name="dropoff" type="text" required className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-amber-500 focus:border-amber-500 bg-white" placeholder={`Anywhere in ${route.to}`} defaultValue={route.to} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Date</label>
          <input name="date" type="date" required className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-amber-500 focus:border-amber-500 bg-white" />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Time</label>
          <input name="time" type="time" required className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-amber-500 focus:border-amber-500 bg-white" />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-4 bg-amber-500 text-zinc-950 font-bold py-4 rounded-lg shadow-md hover:bg-amber-400 transition-colors uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : `Confirm Booking (₹${route.price})`}
      </button>
    </form>
  );
}
