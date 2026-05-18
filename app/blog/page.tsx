import { blogPosts } from '@/lib/products';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-adish-green to-adish-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">
            Botanical Intelligence
          </h1>
          <p className="text-xl text-adish-beige max-w-2xl">
            Deep dives into cordyceps science, performance optimization, and botanical wisdom
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="border-2 border-adish-beige rounded-lg overflow-hidden hover:border-adish-gold transition-colors group cursor-pointer"
              >
                {/* Image */}
                <div className="bg-gradient-to-br from-adish-gold to-adish-light-gold h-48 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                  <p className="text-adish-dark font-bold text-center px-4">{post.title}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-adish-green uppercase tracking-wide mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-bold text-adish-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-adish-green mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-adish-green font-bold hover:text-adish-gold transition-colors"
                  >
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* More Articles Coming */}
          <div className="mt-16 text-center">
            <p className="text-adish-green text-lg mb-4">
              More articles coming soon covering the full spectrum of botanical vitality science.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 px-4 bg-adish-beige">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-adish-dark mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-adish-green mb-8">
            Get weekly insights on cordyceps science, performance optimization, and botanical wisdom delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-lg border-2 border-adish-gold focus:outline-none focus:border-adish-green"
            />
            <button className="bg-adish-green text-white px-8 py-3 rounded-lg font-bold hover:bg-adish-dark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
