import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Share2, Heart, Tent, Lightbulb, Flower2, Armchair, CheckCircle2, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceDetail() {
  const services = [
    { icon: Tent, title: 'Premium Tenting', desc: 'German hangars, traditional shamianas, and waterproof luxury gazebos.' },
    { icon: Lightbulb, title: 'Atmospheric Lighting', desc: 'Fairy lights, crystal chandeliers, LED washes, and warm filament bulbs.' },
    { icon: Flower2, title: 'Floral Design', desc: 'Exotic imported blooms, traditional marigolds, and seasonal greenery.' },
    { icon: Armchair, title: 'Furniture Rental', desc: 'Velvet sofas, cross-back chairs, and themed dining setups.' }
  ];

  const reviews = [
    { name: 'Ananya Mishra', event: 'Wedding Event', time: '2 months ago', rating: 5, initial: 'AM', text: 'Royal Decorators transformed our garden into a dreamscape. The floral work was breathtaking and their team worked around the clock to ensure everything was perfect despite the rain.' },
    { name: 'Rajesh Kumar', event: 'Corporate Gala', time: '1 week ago', rating: 5, initial: 'RK', text: 'Extremely professional. The lighting setup for our annual meet was top-notch. Highly recommended for timely execution.' }
  ];

  return (
    <div className="pb-32">
      <header className="fixed top-0 left-0 z-50 w-full glass-effect border-b border-outline-variant/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 rounded-full hover:bg-primary/5 transition-colors">
            <ArrowLeft className="w-6 h-6 text-primary" />
          </Link>
          <h1 className="text-xl font-headline font-bold text-on-surface">Royal Decorators</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-primary/5 transition-colors"><Share2 className="w-6 h-6 text-primary" /></button>
          <button className="p-2 rounded-full hover:bg-primary/5 transition-colors"><Heart className="w-6 h-6 text-primary" /></button>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcXq8v0_aSSmHmxFrDXjXKfDq9y4O2AjJUTFjR31VZ1q7s6Zji11jDcA_QDYeNwmIX-Ijly8PZL-x0iTL2WvYGF7nD6lErnLplalV15XnXuxcK91SOmi1Dhz-FMHE-rfcstGly4LzyN7y0tWvGg_ms8rarQR_cZ1U3fqip0yMLtxLqgCUIruWiuYBlEHu3pwm1F9L-ejlZPf3MixBC1qK8ZriVCAL4WOZnVs01ZU6FqO-NEIQhpHyzIqJW_JQbrj0k8ymT3Ei6vm9O" 
            alt="Main Gallery" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 bg-surface-container-lowest/90 backdrop-blur px-4 py-2 rounded-xl">
            <span className="text-primary font-bold">Featured: Grand Ballroom Gala</span>
          </div>
        </div>
        <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJBgw4Hsv-pyuMKOPpBdFOpAuztufoR5Rj3YSZlVM7ay6DyK9hcHKGt7mN88LeGsfjY_XZM_AYbSPYM6zHA5OxuvConnFeUDYVR1eA7ZigEF4COeQJrjpuD6yuzc26DXH7bq_0eqe7YW07eLNn0T0sk2TE7LSdrsqu7k9BZNEH5BOg894oyS3pYuRMA0X5dKb6nO6Ea_1oBBDSOkLC3ctejWbLiiWzmmgbeKzSNiapZlvKeMVtXmRcnrTUS9dbrNvKncYSbubMrttO" 
            alt="Gallery 2" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhmbP_t7MvMLjp4vnja-2uqnPaXxMnNMph4T_2yQSKydoWQwRcJ8VXBUP_kGtkXPqPWSKMRKV16XGaclMoX2HUt40sRbpnMKFRV2SLCO-ULGUm8ZQh5I2MZQ9fsQTv-6QHng7qvlqbhT6Aw9MIwkFZ4YUkqPMSiVLh7vMfC4ilw4m64txeUkq92cSRMfbr9v6-Y7SoyXE9Jdt25fGWFa34UAEOV2_YkOSzONX9P_v-vC6o4em_Tj3I_XOUsdzZ9lV2WcByicsnoFyZ" 
            alt="Gallery 3" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-3xl group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMGidLUjqMVU4TL_JHUncS1B7_A_VRN6Vjk2DGZL_8zdfdZchyi6Cn1aVe5jKrYx7A9KeeLXwdZw1josvBVYCRwrd3Kd7Db76kdB2jyGgZmsY0U06MrKThkghqi3qAxWbnxkwnFtA8cuGEfgI3gwPpwbiHJGO8vjnvJEu6QetqT3htVLi5HroSUPdiFojXeOfvHOTZGT5X457T2k4ZsFkUHuV5eqqqNbWXANIG7WDvnzFsFxiymAnBS_ESWTvrh40gCkihJ5IU1A-f" 
            alt="Gallery 4" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-bold shadow-lg">+ 24 More Photos</button>
          </div>
        </div>
      </div>

      <section className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Top Rated</span>
            <div className="flex items-center text-primary-container">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              <Star className="w-4 h-4" />
              <span className="text-on-surface font-bold ml-2 text-sm">4.8 (128 reviews)</span>
            </div>
          </div>
          <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Royal Decorators</h2>
          <p className="text-on-surface-variant flex items-center gap-2 mt-2 font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            Heritage Square, North District • Established 2012
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h3 className="text-2xl font-headline font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              Services Offered
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <div key={i} className="bg-surface-container-low p-6 rounded-2xl flex items-start gap-4 transition-all hover:bg-surface-container-high">
                  <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{s.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-outline-variant/15">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-headline font-bold">What Clients Say</h3>
              <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                Write a Review
              </button>
            </div>
            <div className="space-y-6">
              {reviews.map((r, i) => (
                <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 shadow-sm">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary">{r.initial}</div>
                      <div>
                        <p className="font-bold">{r.name}</p>
                        <p className="text-xs text-on-surface-variant font-medium">{r.event} • {r.time}</p>
                      </div>
                    </div>
                    <div className="flex text-primary-container">
                      {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-on-surface leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_32px_64px_rgba(63,43,0,0.08)] border border-outline-variant/10">
            <div className="mb-6">
              <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Starting from</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-headline font-extrabold text-primary">₹45,000</span>
                <span className="text-on-surface-variant font-medium">/ event</span>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant font-medium">Small Ceremony</span>
                <span className="font-bold">₹45k - ₹60k</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                <span className="text-on-surface-variant font-medium">Grand Wedding</span>
                <span className="font-bold">₹1.5L - ₹5L</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-green-700 font-bold mb-4 bg-green-50 p-3 rounded-xl">
                <CheckCircle2 className="w-5 h-5" />
                Fully insured & Safety Certified
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform">
                Request Quote
              </button>
              <button className="w-full border-2 border-primary text-primary py-4 rounded-xl font-bold text-lg hover:bg-primary/5 active:scale-95 transition-transform">
                Call Provider
              </button>
            </div>
            <p className="text-center text-[10px] font-bold text-on-surface-variant mt-6 italic uppercase tracking-tighter">Typically responds within 2 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
