import React from "react";

// DreamPower - Professional single-file React component
// Focus: Multi-brand Tyres & Batteries only (Bilaspur)
// Images: Unsplash CDN + local uploaded asset used as hero/logo

export default function DreamPowerSite() {
  const tyres = [
    { id: 1, name: "All-Season Tyre", price: "₹3,499", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80" },
    { id: 2, name: "Performance Tyre", price: "₹5,199", img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80" },
    { id: 3, name: "Off-Road Tyre", price: "₹6,299", img: "https://images.unsplash.com/photo-1542367597-4a7e2f6a3c0b?auto=format&fit=crop&w=1200&q=80" }
  ];

  const batteries = [
    { id: 1, name: "Lead-Acid 12V 60Ah", price: "₹4,299", img: "https://images.unsplash.com/photo-1563729784479-6f9ec8f3e4b4?auto=format&fit=crop&w=1200&q=80" },
    { id: 2, name: "SMF 12V 70Ah", price: "₹5,999", img: "https://images.unsplash.com/photo-1581092795363-4b4b6f6d5b6a?auto=format&fit=crop&w=1200&q=80" },
    { id: 3, name: "Inverter Battery 150Ah", price: "₹9,499", img: "https://images.unsplash.com/photo-1581092924806-3d5b9b5f3f4d?auto=format&fit=crop&w=1200&q=80" }
  ];

  // Use the uploaded screenshot as a local asset (will be served by the platform as a URL)
  const localHero = "/mnt/data/2aeb3d47-2006-4d99-8aa9-82892c51c370.png";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={localHero} alt="DreamPower logo" className="w-14 h-14 object-cover rounded-full shadow-sm" />
            <div>
              <h1 className="text-xl font-bold">DreamPower</h1>
              <p className="text-sm text-gray-600">Multi‑brand Tyres & Batteries • Bilaspur, Chhattisgarh</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="px-3 py-2 bg-indigo-600 text-white rounded">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Quality Tyres & Batteries — Trusted in Bilaspur</h2>
            <p className="mt-4 text-gray-600">DreamPower supplies genuine multi‑brand tyres and batteries, offers professional fitting, quick diagnostics and dependable aftercare.</p>

            <div className="mt-6 flex gap-4">
              <a href="#products" className="px-5 py-3 bg-indigo-600 text-white rounded shadow">Explore Products</a>
              <a href="#contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded">Book Service</a>
            </div>

            <ul className="mt-6 text-sm text-gray-500 space-y-1">
              <li>• On-site fitting & wheel balancing</li>
              <li>• Battery testing & installation</li>
              <li>• Genuine multi-brand parts (Amaron, Exide, MRF, CEAT, Apollo)</li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Local hero used to ensure image is present in the build */}
            <img src={localHero} alt="DreamPower shop" className="w-full h-64 object-cover" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mt-12">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded shadow">
              <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=60" alt="Tyre fitting" className="w-full h-32 object-cover rounded mb-3" />
              <h4 className="font-semibold">Tyre Sales & Fitting</h4>
              <p className="mt-2 text-sm text-gray-600">New tyres, expert fitting, alignment and balancing.</p>
            </div>

            <div className="p-6 bg-white rounded shadow">
              <img src="https://images.unsplash.com/photo-1563729784479-6f9ec8f3e4b4?auto=format&fit=crop&w=800&q=60" alt="Battery replacement" className="w-full h-32 object-cover rounded mb-3" />
              <h4 className="font-semibold">Battery Sales & Installation</h4>
              <p className="mt-2 text-sm text-gray-600">In-stock batteries, testing, and professional installation.</p>
            </div>

            <div className="p-6 bg-white rounded shadow">
              <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=60" alt="Diagnostics" className="w-full h-32 object-cover rounded mb-3" />
              <h4 className="font-semibold">Vehicle Diagnostics</h4>
              <p className="mt-2 text-sm text-gray-600">Quick checks, jumpstart support and minor repairs.</p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mt-12">
          <h3 className="text-2xl font-bold">Featured Tyres & Batteries</h3>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {tyres.map(t => (
              <div key={t.id} className="bg-white rounded shadow overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="mt-1 text-sm text-gray-600">Popular sizes & brands available</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-bold">{t.price}</div>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded">Enquire</button>
                  </div>
                </div>
              </div>
            ))}

            {batteries.map(b => (
              <div key={b.id} className="bg-white rounded shadow overflow-hidden">
                <img src={b.img} alt={b.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">{b.name}</h4>
                  <p className="mt-1 text-sm text-gray-600">Genuine, warranty-backed options</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-bold">{b.price}</div>
                    <button className="px-3 py-1 bg-indigo-600 text-white rounded">Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-12 bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold">About DreamPower</h3>
          <p className="mt-4 text-gray-600">DreamPower is Bilaspur's dedicated tyre and battery specialist. We prioritise quality parts, transparent pricing and fast, reliable service.</p>
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
              <p className="mt-2 text-sm text-gray-600">DreamPower, Near XYZ, Bilaspur, Chhattisgarh</p>
              <div className="mt-4">
                <iframe title="map" src="https://www.google.com/maps?q=Bilaspur+Chhattisgarh&output=embed" className="w-full h-48 rounded" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">© {new Date().getFullYear()} DreamPower • Tyres & Batteries • Bilaspur</div>
      </footer>
    </div>
  );
}
