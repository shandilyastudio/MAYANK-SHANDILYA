import React from 'react';
import { motion } from 'motion/react';
import { Zap, Droplets, Home, ShieldCheck, Truck, Phone, ArrowRight } from 'lucide-react';

export default function Logistics() {
  const categories = [
    {
      title: 'Electricity & Power',
      icon: Zap,
      desc: 'Silent generators, heavy-duty cabling, and professional on-site electricians.',
      items: ['Silent GenSets (5kVA - 125kVA)', 'Waterproof Cabling', 'Emergency Backup Systems']
    },
    {
      title: 'Water & Sanitation',
      icon: Droplets,
      desc: 'Clean water supply, luxury portable toilets, and waste management services.',
      items: ['Potable Water Tankers', 'Luxury AC Mobile Toilets', 'Waste Disposal Crews']
    },
    {
      title: 'Lodging & Stay',
      icon: Home,
      desc: 'Comfortable accommodation for guests in nearby ancestral homes or luxury tents.',
      items: ['Ancestral Home Stays', 'Glamping Tents', 'Nearby Guesthouse Booking']
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      <header className="relative overflow-hidden rounded-[3rem] bg-on-surface p-8 md:p-16 text-surface">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9869Yv8_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold leading-tight">
            Reliable Infrastructure for Community Celebrations
          </h1>
          <p className="text-lg text-surface/70 font-medium leading-relaxed">
            We handle the complex logistics so you can focus on the celebration. From power backups to guest lodging, we bring city-grade infrastructure to any rural location.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 bg-surface/10 px-4 py-2 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-primary-container" />
              <span className="text-sm font-bold">Safety Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-surface/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Truck className="w-5 h-5 text-primary-container" />
              <span className="text-sm font-bold">Remote Delivery</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="bg-surface-container-lowest p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <cat.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">{cat.title}</h3>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">{cat.desc}</p>
            <ul className="space-y-3 mb-8">
              {cat.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
              Check Availability
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <section className="bg-surface-container-high rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-headline font-extrabold text-on-surface">Need a Custom Setup?</h2>
          <p className="text-on-surface-variant font-medium">Our logistics experts can survey your location and provide a tailored infrastructure plan within 48 hours.</p>
          <button className="bg-on-surface text-surface px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-transform">
            <Phone className="w-5 h-5" />
            Consult an Expert
          </button>
        </div>
        <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9869Yv8_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0" 
            alt="Logistics setup" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}
