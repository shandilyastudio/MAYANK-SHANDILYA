import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Maximize, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Venues() {
  const venues = [
    {
      name: 'The Ancestral Orchard',
      location: 'Village Green, East District',
      capacity: '200 - 500 guests',
      size: '2.5 Acres',
      rating: '4.9',
      price: '₹25,000/day',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_o-4_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0'
    },
    {
      name: 'Riverside Farmhouse',
      location: 'River Bank, South District',
      capacity: '50 - 150 guests',
      size: '1.2 Acres',
      rating: '4.7',
      price: '₹15,000/day',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_o-4_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0'
    },
    {
      name: 'Grand Village Grounds',
      location: 'Main Square, North District',
      capacity: '1000+ guests',
      size: '5.0 Acres',
      rating: '5.0',
      price: '₹50,000/day',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1_o-4_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0_aL6mN9UfT8_v0'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
          Prime Venues & Land
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl font-medium">
          From ancestral homes to sprawling farmhouses, find the perfect canvas for your celebration in the heart of the countryside.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {venues.map((venue, i) => (
          <div key={i} className="group bg-surface-container-lowest rounded-[2.5rem] overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="h-64 relative overflow-hidden">
              <img 
                src={venue.image} 
                alt={venue.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="font-bold text-sm">{venue.rating}</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">{venue.name}</h3>
                <p className="text-on-surface-variant flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-primary" />
                  {venue.location}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Users className="w-5 h-5 text-primary" />
                  {venue.capacity}
                </div>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <Maximize className="w-5 h-5 text-primary" />
                  {venue.size}
                </div>
              </div>
              <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                <div>
                  <p className="text-[10px] uppercase font-bold text-on-surface-variant">Booking Fee</p>
                  <p className="text-xl font-extrabold text-primary">{venue.price}</p>
                </div>
                <button className="bg-surface-container-high text-primary p-4 rounded-2xl hover:bg-primary hover:text-on-primary transition-all active:scale-90">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-primary-container/20 rounded-[3rem] p-8 md:p-12 border border-primary-container/30">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-headline font-extrabold text-on-surface">List Your Land</h2>
            <p className="text-on-surface-variant font-medium">Have a beautiful ancestral home or an open field? Join our network of venue partners and earn from your property.</p>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
              Become a Partner
            </button>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-xl flex flex-col items-center text-center max-w-[160px]">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <p className="text-sm font-bold">Verified Listings Only</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-xl flex flex-col items-center text-center max-w-[160px]">
              <Users className="w-10 h-10 text-primary mb-4" />
              <p className="text-sm font-bold">Trusted Community</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
