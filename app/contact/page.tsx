"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in your first name, email, and message.");
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('error');
        console.error(data.message);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-16 mt-[-100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-wider">Contact Us</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
          Get in touch to book your next luxury journey. Our team is available 24/7 to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif text-white mb-8 border-b border-zinc-800 pb-2">Get In Touch</h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Whether you have a question about our fleet, pricing, need a custom corporate package, or simply want to book a ride, our support team is ready to answer all your queries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                <div className="text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">Head Office</h3>
                <p className="text-zinc-400 text-sm">123 Transport Ave,<br />City Center, Business District<br />Mumbai, MH 400001</p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                <div className="text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">Phone</h3>
                <p className="text-zinc-400 text-sm">+91 98765 43210<br />+91 87654 32109<br />Toll-Free: 1800-CAB-BOOK</p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                <div className="text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">Email Support</h3>
                <p className="text-zinc-400 text-sm">bookings@cabconnect.in<br />support@cabconnect.in<br />corporate@cabconnect.in</p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm hover:border-amber-500 transition-colors group">
                <div className="text-amber-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">Operating Hours</h3>
                <p className="text-zinc-400 text-sm">Cab Services: 24/7 Support<br />Office: Mon-Sat, 9AM to 7PM<br />Sundays: Closed (Office Only)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 lg:p-12 rounded-sm shadow-2xl flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-500 mb-6 border border-green-500/30">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Message Sent!</h3>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">
                  Thank you for reaching out. We have received your message and our support team will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-amber-500 text-sm font-bold uppercase tracking-wider hover:text-amber-400 transition-colors border border-amber-500/30 hover:border-amber-400 px-6 py-3 rounded-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif text-white mb-8 border-b border-zinc-800 pb-2">Send Us A Message</h2>

                {status === 'error' && (
                  <div className="mb-6 bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-sm text-sm">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">First Name *</label>
                      <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} required className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Last Name</label>
                      <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Email Address *</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91 98765 43210" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Service Interested In</label>
                    <select id="service" value={formData.service} onChange={handleChange} className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-zinc-300 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                      <option value="">Select a service...</option>
                      <option value="city-taxi">City Taxi</option>
                      <option value="airport-transfer">Airport Transfer</option>
                      <option value="outstation">Outstation Cabs</option>
                      <option value="corporate">Corporate Rentals</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea id="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="Tell us how we can help you..."></textarea>
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="w-full bg-amber-500 text-zinc-950 font-bold uppercase tracking-wider py-4 hover:bg-amber-400 transition-colors disabled:opacity-50">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
