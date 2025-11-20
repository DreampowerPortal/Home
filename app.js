import React from "react";

// DreamPower - Single-file React component (Tailwind CSS assumed available)
// Features: Hero, Services (Batteries & Tyres), Product grid, About, Contact
// Images from Unsplash CDN are used as public assets.

export default function DreamPowerSite() {
  const tyres = [
    { id: 1, name: "All-Season Tyre", price: "₹3,499", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=60" },
    { id: 2, name: "Performance Tyre", price: "₹5,199", img: "https://images.unsplash.com/photo-1542367597-4a7e2f6a3c0b?auto=format&fit=crop&w=800&q=60" },
    { id: 3, name: "Off-Road Tyre", price: "₹6,299", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60" },
  ];

  const batteries = [
    { id: 1, name: "Lead-Acid 12V 60Ah", price: "₹4,299", img: "https://images.unsplash.com/photo-1563729784479-6f9ec8f3e4b4?auto=format&fit=crop&w=800&q=60" },
    { id: 2, name: "SMF 12V 70Ah", price: "₹5,999", img: "https://images.unsplash.com/photo-1581092795363-4b4b6f6d5b6a?auto=format&fit=crop&w=800&q=60" },
    { id: 3, name: "Inverter Battery 150Ah", price: "₹9,499", img: "https://images.unsplash.com/photo-1581092924806-3d5b9b5f3f4d?auto=format&fit=crop&w=800&q=60" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold">DP</div>
            <div>
              <h1 className="text-xl font-semibold">DreamPower</h1>
              <p className="text-sm opacity-90">Multi-brand Tyres & Battery Shop • Bilaspur, Chhattisgarh</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="px-4 py-2 bg-white text-indigo-700 rounded shadow">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Reliable Tyres & Batteries — Installed Fast</h2>
            <p className="mt-4 text-lg text-gray-600">DreamPower offers multi-brand tyres and batteries with expert fitting, quick service, and genuine parts. Serving Bilaspur and nearby areas.</p>

            <div className="mt-6 flex gap-4">
              <a href="#products" className="px-5 py-3 bg-indigo-600 text-white rounded shadow">Browse Products</a>
              <a href="#contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded">Get a Quote</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">Open: 9:00 AM – 8:00 PM • Walk-ins welcome • On-site fitting available</div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=60" alt="tyre shop" className="w-full h-64 object-cover" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-12">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <h4 className="font-semibold">Tyre Sales & Fitting</h4>
              <p className="mt-2 text-sm text-gray-600">Multi-brand tyres, expert fitting, wheel balancing and alignment.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h4 className="font-semibold">Battery Replacement</h4>
              <p className="mt-2 text-sm text-gray-600">In-stock batteries, on-site installation, and battery health checks.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h4 className="font-semibold">Vehicle Check & Support</h4>
              <p className="mt-2 text-sm text-gray-600">Quick diagnostics, minor repairs and emergency jumpstart services.</p>
            </div>
          </div>
        </section>

        {/* Product showcase */}
        <section id="products" className="mt-12">
          <h3 className="text-2xl font-bold">Featured Products</h3>

          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {tyres.map((t) => (
              <div key={t.id} className="bg-white rounded shadow overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{t.name}</h4>
                  <div className="mt-2 text-sm text-gray-600">Multi-brand options available</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-bold">{t.price}</div>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded">Buy</button>
                  </div>
                </div>
              </div>
            ))}

            {batteries.map((b) => (
              <div key={b.id} className="bg-white rounded shadow overflow-hidden">
                <img src={b.img} alt={b.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{b.name}</h4>
                  <div className="mt-2 text-sm text-gray-600">Genuine, multi-brand batteries</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-bold">{b.price}</div>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded">Buy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12 bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold">About DreamPower</h3>
          <p className="mt-4 text-gray-600">DreamPower is Bilaspur's trusted multi-brand tyre and battery specialist. We combine quality parts with fast, reliable service and expert fitting. Whether it's routine replacement or emergency support, our team ensures your vehicle is drive-ready.</p>

          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium">Bilaspur, Chhattisgarh</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Hours</div>
              <div className="font-medium">9:00 AM — 8:00 PM</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Contact</div>
              <div className="font-medium">+91-XXXXXXXXXX</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form className="bg-white p-6 rounded shadow">
              <label className="block text-sm">Name</label>
              <input className="mt-2 w-full border rounded px-3 py-2" placeholder="Your name" />
              <label className="block text-sm mt-4">Phone</label>
              <input className="mt-2 w-full border rounded px-3 py-2" placeholder="Phone number" />
              <label className="block text-sm mt-4">Message</label>
              <textarea className="mt-2 w-full border rounded px-3 py-2" rows={4} placeholder="How can we help?"></textarea>
              <div className="mt-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
              </div>
            </form>

            <div className="p-6 rounded shadow bg-white">
              <h4 className="font-semibold">Visit Us</h4>
              <p className="mt-2 text-sm text-gray-600">Shop: DreamPower, Near XYZ, Bilaspur, Chhattisgarh</p>
              <div className="mt-4">
                <iframe title="map" src="https://www.google.com/maps?q=Bilaspur+Chhattisgarh&output=embed" className="w-full h-48 rounded" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">© {new Date().getFullYear()} DreamPower • Multi-brand Tyres & Batteries • Bilaspur</div>
      </footer>
    </div>
  );
}
