"use client";

import { useState } from "react";

export default function HeroBookingCard() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cabType: "Sedan",
    serviceType: "City",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.name,
          lastName: "",
          email: formData.email,
          phone: formData.phone,
          service: formData.serviceType,
          message: `Booking Request for Cab Type: ${formData.cabType}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", cabType: "Sedan", serviceType: "City" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit request.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl mt-[-100px]">
      <h3 className="text-2xl font-bold text-white mb-6">Book Your Ride</h3>

      {status === "success" ? (
        <div className="bg-green-500/20 border border-green-500 text-green-100 p-4 rounded-xl text-center">
          <p className="font-semibold">Request Sent Successfully!</p>
          <p className="text-sm mt-1">We will contact you shortly.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm underline text-green-200 hover:text-white"
          >
            Book another ride
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5  ">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              placeholder="Your Full Name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
              >
                <option value="City">City Ride</option>
                <option value="Outstation">Outstation</option>
                <option value="Airport">Airport Transfer</option>
                <option value="Corporate">Corporate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-1">Cab Type</label>
              <select
                name="cabType"
                value={formData.cabType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
              >
                <option value="Sedan">Executive Sedan</option>
                <option value="SUV">Premium SUV</option>
                <option value="Luxury">First Class / Luxury</option>
              </select>
            </div>
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 mt-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending Request..." : "Request Booking"}
          </button>
        </form>
      )}
    </div>
  );
}
