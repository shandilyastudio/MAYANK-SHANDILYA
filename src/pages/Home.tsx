import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Utensils, Music, Tent, Flower2, Cake, ShieldCheck, Truck, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    { icon: Utensils, label: 'Catering', path: '/catering' },
    { icon: Music, label: 'DJ', path: '#' },
    { icon: Tent, label: 'Tent', path: '/logistics' },
    { icon: Flower2, label: 'Decor', path: '/service/royal-decorators' },
    { icon: Cake, label: 'Sweet Maker', path: '#' },
  ];

  const topRated = [
    {
      name: 'Heritage Harvest',
      type: 'Premium Catering',
      price: '$45/pp',
      rating: '4.9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6vIoAIQHYXVRsUtAR2pNIL0ENubiFr3725ZjvM3WjMHecBSRQvAnErqIs7beFtF3HI3Zkl7oOaDnHGAsdrWnBy4SJVXBqBlwJiRx6mKT-Oafmd08feupJS_SN7iR2spSbeFdjJWhleuHSPoUYIfIEmrgfCsJKFTl4aSvmAQQi4S03GJDX2Bhh4Shr4q_dqPUvRWInP1aFnJhbg-a2HkjNGiAn-U-0OHHIMPgyJ7Mx4dIF-tzPaHwYAjmSggcqg5ISWVvH9CYXcXQO',
      tag: 'Trusted Local Provider'
    },
    {
      name: 'Meadow Marquees',
      type: 'Tent & Structural',
      price: '$1,200',
      rating: '4.8',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJz6reBTiTsFdfpLPhtx5U4fBcWyKLww4TteENu0FHGLUHq6d0Zf6JwNMQIZCL2BmQWX7ZrL8RYDM6vTlepVLqqJtw55I1NV4HT5-4T0TPC13WvU5IOp7ROXfYXVajrjLTVgKGiTIcAE12GJE76rb0LiwGtIYLCHPgWP-tsjGjJAiAxDiHq8-eBb8e1Zoa3br_Mqma98A8tjBlahyaUuKd6d9BEqtUZM40DZsxO_Vse7WzrvY8LiSOltQCuTposacTeCHsGAx0JlLl',
      tag: 'Rural Access Guaranteed'
    },
    {
      name: 'Golden Beats',
      type: 'DJ & Audio',
      price: '$350',
      rating: '5.0',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP2Ln3SZ-4x_Ti57ZTpRNQBy_Cy2NkNJb6hk4UBDMChXclP-mI-4R67kX_iVO-fvk5MHoZkCM9xbTSvLihv7NJJ0oWERybSrJLgYAue_csljE1odP1EEPmlNcjFTVYi5HzBbRV7-vOLIyZKGt4PQ-9FMIiD-7thQDofMs2y11OmaLb94szaEgd_4EKycv7vfL-A5TCuIeXYbBgDRKU8CTf6ux2kbrIfXxmn3GDGHcpYryF7RShcaEk8tFpHRjzLmg5fEalWse4DHqY',
      tag: 'Highly Responsive'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-surface-container-highest min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3XhjhjEo6NlaRj5qlYmM1ihOKDAL33Vavhl-G06VxSi-8ZxD1Vn1wkk7p97EsWnKqcxX-3sVo-zPdRf1bT_9fgv7x7seG0VOv8Xx-OWqogoAIaW8MhBLJTenoLSYBYlnf5NcvezGuwAYb7YSPofqGGjel2D8Wv0fC13l-O5LBw1G6iwiWdUkD756NJqJPJR37igT2Xa9lxEJkHcQxKIrRFq6SMpNwXx8eJcs-Df2fyFtOGbvYXZMah8p3olvh4bzSiLX7jbgU8ROG" 
            alt="Outdoor wedding celebration" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 p-8 md:p-16 max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-on-secondary font-bold text-sm tracking-wide uppercase">
            Village Vows
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface leading-tight">
            Your Complete Event Planning Partner
          </h2>
          <p className="text-lg text-on-surface-variant max-w-md">
            Bridging the gap between city elegance and rural charm. We bring professional event services to every corner of the countryside.
          </p>
          <div className="pt-4">
            <Link 
              to="/packages"
              className="inline-flex bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95 items-center gap-3"
            >
              View Packages
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-4">
        <h3 className="font-headline text-2xl font-bold text-on-surface">Browse by Service</h3>
        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          {services.map((service, i) => (
            <Link key={i} to={service.path} className="flex-shrink-0 w-32 group cursor-pointer">
              <div className="w-full aspect-square rounded-2xl bg-surface-container-low flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-primary-container group-hover:scale-105">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <p className="text-center font-bold text-sm">{service.label}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Rated Services */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-headline text-2xl font-bold text-on-surface">Top Rated Services Near You</h3>
            <p className="text-on-surface-variant">Handpicked experts in your local community.</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">See All Local Experts</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRated.map((item, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-outline-variant/10">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-xs font-bold">{item.rating}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline font-bold text-lg">{item.name}</h4>
                    <p className="text-on-surface-variant text-sm font-medium">{item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-on-surface-variant">Starts at</p>
                    <p className="font-bold text-primary">{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 text-xs text-on-surface-variant">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-surface-container-low rounded-3xl p-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h3 className="font-headline text-3xl font-extrabold text-on-surface leading-tight">
            Community Trust, Professional Results
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="bg-surface-container-highest p-3 rounded-xl h-fit">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-bold">Verified Local Pros</h5>
                <p className="text-sm text-on-surface-variant">Every partner is vetted by our local community scouts.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-highest p-3 rounded-xl h-fit">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h5 className="font-bold">Remote Ready</h5>
                <p className="text-sm text-on-surface-variant">Specialists in logistically challenging rural locations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgu7lphY5U4L39NYELfyGHwAE5UyFHCw_eJWhRxL4axnV70oY5ttzVdRLauHOGgE8KPM9ey1MmKBb0mIk5NfHbKOuUtD4KvYZgjqfrbGSYDVS913Z6xecf-jHvi7Jt2q7BH4TEkJtIlqw1mTQFg4W50WTNq7JUxR_B0sK78e1VuIgecPkuuz2uV8cyMK7oAL6Q8fRyTwNHAI8VbU5RMRu8jxTnxK6lL6O9stGeWWt9wXdxWcrJBRiI9az348kVRZnZBYkAPDoszVT3" 
            alt="Barn wedding event" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}
