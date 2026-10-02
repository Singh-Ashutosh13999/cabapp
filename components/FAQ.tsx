'use client';

import React, { useState } from 'react';

type FAQType = 'home' | 'route';

interface RouteInfo {
  title?: string;
  distance?: string;
  estimatedTime?: string;
}

interface FAQProps {
  type: FAQType;
  routeInfo?: RouteInfo;
}

const FAQ = ({ type, routeInfo }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const homeFAQs = [
    {
      question: "How do I book a premium cab?",
      answer: "You can book directly through our website by selecting your pickup and drop-off locations, or contact our concierge via phone or WhatsApp."
    },
    {
      question: "What types of vehicles do you offer?",
      answer: "Our meticulously maintained fleet includes Executive Sedans, Premium SUVs, and First-Class vehicles to cater to your specific luxury travel needs."
    },
    {
      question: "Are the prices fixed or metered?",
      answer: "We offer transparent, fixed pricing for all our routes with absolutely no hidden fees or surge pricing."
    },
    {
      question: "Are your chauffeurs verified?",
      answer: "Yes, all our chauffeurs are highly trained, background-verified professionals with extensive knowledge of local routes and exclusive venues."
    }
  ];

  const title = routeInfo?.title || "this route";
  const distance = routeInfo?.distance || "calculated upon booking";
  const time = routeInfo?.estimatedTime || "calculated upon booking";

  const routeFAQs = [
    {
      question: `What is the total distance for the ${title} journey?`,
      answer: `The total distance for the ${title} route is approximately ${distance}.`
    },
    {
      question: `How long does it take to travel ${title}?`,
      answer: `The estimated travel time is around ${time}, depending on traffic and road conditions.`
    },
    {
      question: `Can I take a break during the ${title} trip?`,
      answer: `Absolutely! Our premium service includes the flexibility to take short breaks at your convenience along the way for refreshments or sightseeing.`
    },
    {
      question: `What vehicles are available for the ${title} route?`,
      answer: `You can choose from our entire premium fleet, including Executive Sedans, SUVs, and First-Class vehicles, tailored for a comfortable journey on this route.`
    }
  ];

  const faqs = type === 'home' ? homeFAQs : routeFAQs;

  return (
    <section className="py-16 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-3">Questions & Answers</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-zinc-900">Frequently Asked Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200 shadow-sm overflow-hidden transition-all duration-300 rounded-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-zinc-50"
              >
                <span className="font-semibold text-zinc-900 text-lg pr-8">{faq.question}</span>
                <span className="ml-4 flex-shrink-0 text-amber-500">
                  {openIndex === index ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 py-4 border-t border-zinc-100' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-zinc-600 font-light leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
