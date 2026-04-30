import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Urban Weave — E-commerce Case Study
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A conversion-focused fashion e-commerce experience designed to help small businesses sell online without complex checkout systems.
        </p>
      </header>

      {/* Problem */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-gray-700">
            Small fashion brands struggle with expensive e-commerce platforms, complicated checkout processes, and low mobile conversions. Customers often drop off before completing purchases.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-gray-700">
            Designed a mobile-first e-commerce website with WhatsApp-based ordering to remove friction and allow instant communication between customer and seller.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">WhatsApp Checkout</h3>
            <p className="text-gray-600">
              Users can place orders instantly without creating accounts.
            </p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Mobile-First Design</h3>
            <p className="text-gray-600">
              Optimized layouts for smooth browsing on smartphones.
            </p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Conversion Focused</h3>
            <p className="text-gray-600">
              Clear CTAs and simplified user flow to increase sales.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Expected Results</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Higher mobile conversion rates</li>
            <li>Faster order completion via WhatsApp</li>
            <li>Reduced cart abandonment</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want a Similar Website?</h2>
        <p className="mb-6 text-gray-300">
          I design high-converting websites for small businesses.
        </p>

        
        <Link
          href="/urban-weave-store"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          View Live Project
        </Link>


        <a
          href="https://wa.me/923482209380"
          className="bg-green-500 px-6 py-3 rounded-xl"
        >
          Contact Me on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t">
        <p className="text-gray-500">© {new Date().getFullYear()} Urban Weave Case Study</p>
      </footer>
    </div>
  );
}

