'use client';

import { faqItems } from '@/lib/products';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-adish-green to-adish-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-adish-beige max-w-2xl">
            Everything you need to know about Adish Ventures products
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-adish-beige rounded-lg overflow-hidden hover:border-adish-gold transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-adish-beige transition-colors text-left"
                >
                  <h3 className="text-lg font-bold text-adish-dark">{item.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-adish-gold transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-8 py-6 bg-adish-beige border-t-2 border-adish-beige">
                    <p className="text-adish-green text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-adish-beige p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-adish-dark mb-4">
              Still have questions?
            </h3>
            <p className="text-adish-green mb-6">
              Reach out to our team—we're here to help.
            </p>
            <a
              href="mailto:hello@ojusaadish.com"
              className="inline-block bg-adish-green text-white px-8 py-3 rounded-lg font-bold hover:bg-adish-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
