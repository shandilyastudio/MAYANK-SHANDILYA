import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Tent, Flower2, Music, Utensils, Cake, ShieldCheck, Phone, Star, Calendar } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      name: 'Mini Marriage Package',
      description: 'Ideal for gatherings up to 50 guests',
      oldPrice: '$1,200',
      price: '$999',
      discount: 'Save 15%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-aRgxA2dcfiuMxkmOiEK4AyfvqqT4TFZ_1f6svkDdoMCz3viM_joW3s9SCAOMff8CaZqVb98jVWdUzxT_9gPT37q2CGNjdyiwSLWYIQn_Da66DWfAEGCkvRLR7LdmLzyHc-1U3uy8H0m14cFQf3jwo8oSZQwtwSuz_94G25p5q3d832xn63m6DPrviBhDgZUSwnngKJmPBImmAGSBHDQnB3UU_jmVSkTjo8oBr3uvM1tCMTRwusPHQfrNnGXu5sd-qeZ-s3qPfNTN',
      features: [
        { icon: Tent, label: 'Premium Weatherproof Tent' },
        { icon: Flower2, label: 'Floral & Light Decoration' },
        { icon: Music, label: 'Pro Sound System & DJ' }
      ]
    },
    {
      name: 'Royal Wedding Bundle',
      description: 'Comprehensive for 200+ guests',
      oldPrice: '$4,500',
      price: '$3,299',
      discount: 'Save 25%',
      popular: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRHbT8_TI5cH46-eKAZdcF0PNKZJHkGbJkwuiz5jThAYLigYFz0pTMYAKVaJuEzX-492IIQq7IZU2k2sx0AcRLembs_BaIsdQR1-DCTM4OyyPBYJHHea0iRhoKSCSu0jfUKoo4v-P5ZbQKa_JOvJDIgjQQWMSf20qBhnOBDkar-SmH0ke2EpgGH0XYUT2xrH3z2UaZmM9HG57zTceKSv7R3NbrgTq7CFYBSftpjQ-O6CNiaLptkR-dwGtIg4HS6MM6uvnqSt53trEp',
      features: [
        { icon: Utensils, label: 'Full Course Catering (Veg/Non-Veg)' },
        { icon: Sparkles, label: 'Grand Stage & Venue Decor' },
        { icon: Music, label: 'DJ, Lighting & Smoke Effects' },
        { icon: Cake, label: 'Assorted Sweets & Dessert Bar' }
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      <header className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-highest text-primary mb-4 font-bold text-xs uppercase tracking-widest">
            Best Value
          </div>
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface leading-tight mb-6">
            Celebrations Made <span className="text-primary italic">Simple.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed mb-8">
            Choose from our carefully curated bundles designed to bring community warmth to your doorstep. Transparent pricing, professional service, and no hidden costs.
          </p>
          <button className="h-14 px-8 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-transform active:scale-95">
            <Sparkles className="w-5 h-5" />
            Compare All Bundles
          </button>
        </div>
        <div className="md:col-span-5 relative">
          <div className="asymmetric-shape bg-surface-container-high rounded-3xl overflow-hidden aspect-square shadow-xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1w_LLfXVI9ICsjrA3esSPrS_jC2gnG9z0JpYuxTrP9W-MPmSYEmB4sPorSLtNPL8-Fq2Pa8jzhIvTkcU2UpCXuB9THDLF0UUZaOn4OnE9N-vpYR7b0kHRfQOZ-obyRTZnAdA6rlE3XLYWev6yVBEErt5MzEvMg2RbKwVLWg0DHukH9QdsRcXupM4WuNWadp8qDKDaSWyCTRQdHZSRirwETUhIVapjBgYZZRpbWS2z7BPZnLro3bJuyaW9hStkUJ8TOaF18DtBIPTK" 
              alt="Elegant outdoor wedding" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-[200px]">
            <div className="flex gap-1 text-primary-container mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-xs text-on-surface-variant italic">"The Royal Wedding bundle saved us months of planning. Simply perfect."</p>
            <p className="text-sm font-bold mt-2">— Sarah K.</p>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packages.map((pkg, i) => (
          <div key={i} className={cn(
            "group flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-outline-variant/10",
            pkg.popular && "ring-2 ring-primary-container/30"
          )}>
            <div className="h-64 relative overflow-hidden">
              <img 
                src={pkg.image} 
                alt={pkg.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                {pkg.discount}
              </div>
              {pkg.popular && (
                <div className="absolute bottom-4 left-4 glass-effect bg-white/30 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                  Most Popular
                </div>
              )}
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-headline font-bold text-2xl text-on-surface mb-1">{pkg.name}</h3>
                  <p className="text-on-surface-variant text-sm">{pkg.description}</p>
                </div>
                <div className="text-right">
                  <span className="block text-stone-400 line-through text-sm">{pkg.oldPrice}</span>
                  <span className="text-3xl font-extrabold text-primary">{pkg.price}</span>
                </div>
              </div>
              <div className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low transition-colors group-hover:bg-surface-container">
                    <feat.icon className="w-5 h-5 text-primary" />
                    <span className="font-bold text-sm">{feat.label}</span>
                  </div>
                ))}
              </div>
              <button className={cn(
                "w-full h-14 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2",
                pkg.popular 
                  ? "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg" 
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
              )}>
                View Details
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-20 p-8 md:p-12 bg-surface-container rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-headline font-bold text-3xl mb-6 text-on-surface">Why the community trusts Festive Hearth?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: ShieldCheck, label: 'Vetted Local Vendors & Artists' },
              { icon: Sparkles, label: 'No Hidden Costs Policy' },
              { icon: Phone, label: '24/7 On-Ground Support' },
              { icon: Calendar, label: 'Hassle-free Cancellations' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-bold leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-xl">
          <p className="font-bold text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 text-center">Ready to Plan?</p>
          <div className="space-y-4">
            <button className="w-full py-4 bg-on-surface text-surface rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <Phone className="w-5 h-5" />
              Talk to an Expert
            </button>
            <p className="text-center text-xs text-on-surface-variant">Estimated call back time: <span className="font-bold">15 mins</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
