"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-20">

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center mt-4">
        <h1 className="text-xl font-semibold">Shaista.dev</h1>

        <nav className="flex gap-6 text-sm text-gray-300">
          <a href="#projects">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-24">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          I build websites that bring you customers
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          I design fast, mobile-first websites that help small businesses
          increase sales and get more clients.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/923482209380"
            className="bg-green-500 px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Get Your Website
          </a>

          <a
            href="#projects"
            className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            View Work
          </a>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="text-center pb-20">
        <p className="text-gray-500">
          Trusted by small businesses & startups
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <h3 className="text-3xl font-semibold text-center mb-12">
          My Work
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* PROJECT 1 */}
          <Link href="/urban-weave">
            <div className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-5 hover:-translate-y-2 hover:shadow-2xl transition">

              <div className="h-40 bg-gray-800 rounded-xl mb-4 overflow-hidden">
                <img
                  src="/tshirt.jpg"
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h4 className="text-lg font-semibold mb-2">
                Urban Weave Store
              </h4>

              <p className="text-gray-400 text-sm">
                Fashion e-commerce website with WhatsApp ordering system.
                Designed to increase conversions and simplify buying.
              </p>
            </div>
          </Link>

          {/* FUTURE PROJECT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 opacity-60">
            <div className="h-40 bg-gray-800 rounded-xl mb-4"></div>
            <p className="text-gray-400 text-sm">
              More client projects coming soon...
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 opacity-60">
            <div className="h-40 bg-gray-800 rounded-xl mb-4"></div>
            <p className="text-gray-400 text-sm">
              More client projects coming soon...
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 text-center">
        <h3 className="text-3xl mb-12">What I Offer</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Landing Pages",
            "Business Websites",
            "E-commerce Stores",
          ].map((service) => (
            <div
              key={service}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition"
            >
              <h4 className="font-semibold">{service}</h4>
              <p className="text-gray-400 text-sm mt-2">
                Clean, modern and mobile-first design that converts visitors.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING (VERY IMPORTANT FOR CLIENTS) */}
      <section id="pricing" className="py-20 text-center">
        <h3 className="text-3xl mb-12">Pricing</h3>

        <div className="grid md:grid-cols-3 gap-6">

          {/* BASIC */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="text-xl mb-2">Starter</h4>
            <p className="text-gray-400 mb-4">Perfect for small businesses</p>
            <p className="text-2xl font-bold mb-4">PKR 15,000</p>
            <ul className="text-sm text-gray-400 mb-6 space-y-2">
              <li>1 Page Website</li>
              <li>Mobile Responsive</li>
              <li>WhatsApp Integration</li>
            </ul>
          </div>

          {/* PRO */}
          <div className="bg-white border border-white text-black p-6 rounded-2xl scale-105">
            <h4 className="text-xl mb-2">Professional</h4>
            <p className="mb-4">Most popular</p>
            <p className="text-2xl font-bold mb-4">PKR 30,000</p>
            <ul className="text-sm mb-6 space-y-2">
              <li>Multi-page Website</li>
              <li>Premium UI Design</li>
              <li>Fast Performance</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="text-xl mb-2">E-commerce</h4>
            <p className="text-gray-400 mb-4">Online store setup</p>
            <p className="text-2xl font-bold mb-4">PKR 50,000</p>
            <ul className="text-sm text-gray-400 mb-6 space-y-2">
              <li>Product Pages</li>
              <li>Cart System</li>
              <li>WhatsApp Orders</li>
            </ul>
          </div>

        </div>
      </section>

          {/* TESTIMONIALS */}
      <section className="py-20 text-center">
        <h3 className="text-3xl mb-12">What Clients Say</h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-gray-300 mb-4">
              “My business finally looks professional online. I started getting more customer inquiries.”
            </p>
            <h4 className="font-semibold">Ahmed R.</h4>
            <p className="text-gray-500 text-sm">Clothing Brand Owner</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-gray-300 mb-4">
              “Fast delivery and clean design. The WhatsApp order system works perfectly.”
            </p>
            <h4 className="font-semibold">Sara K.</h4>
            <p className="text-gray-500 text-sm">Small Business Owner</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-gray-300 mb-4">
              “Highly recommended. My website now converts visitors into real customers.”
            </p>
            <h4 className="font-semibold">Usman A.</h4>
            <p className="text-gray-500 text-sm">Startup Founder</p>
          </div>

        </div>
      </section>

          {/* BEFORE AFTER */}
      <section className="py-20 text-center">
        <h3 className="text-3xl mb-12">Before vs After</h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* BEFORE */}
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
            <h4 className="mb-4 font-semibold text-red-400">Before</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>No online presence</li>
              <li>Low customer trust</li>
              <li>No clear way to order</li>
            </ul>
          </div>

          {/* AFTER */}
          <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl">
            <h4 className="mb-4 font-semibold text-green-400">After</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Professional website</li>
              <li>Higher customer trust</li>
              <li>Easy WhatsApp ordering</li>
            </ul>
          </div>

        </div>
      </section>

          {/* OFFER */}
      <section className="py-20 text-center">
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-white/10 rounded-2xl p-10 max-w-2xl mx-auto">

          <h3 className="text-2xl mb-4">
            Limited Time Offer 🚀
          </h3>

          <p className="text-gray-300 mb-6">
            Get your business website at a discounted price for a limited time.
          </p>

          <p className="text-xl font-bold mb-6">
            Starting from PKR 10,000
          </p>

          <a
            href="https://wa.me/923482209380"
            className="bg-green-500 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Claim Offer Now
          </a>

        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="text-center py-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 max-w-2xl mx-auto">

          <h3 className="text-2xl mb-4">
            Ready to grow your business?
          </h3>

          <p className="text-gray-400 mb-6">
            Let’s build a website that brings you customers.
          </p>

          <a
            href="https://wa.me/923482209380"
            className="bg-green-500 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>

        </div>
      </section>

    </div>
  );
}