import React from 'react';
import { motion } from 'motion/react';
import { Star, Phone, MessageSquare, ChevronDown, Filter } from 'lucide-react';

export default function Catering() {
  const providers = [
    {
      name: 'The Heritage Kitchen',
      price: '₹1,200',
      rating: '4.9',
      description: 'Specializing in farm-to-table regional delicacies and slow-cooked heritage recipes for intimate gatherings.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf88kRX1mLA5zU783IzWeHc9YkjApLcbApqkCjWFoYtEvtOovjV7kv5dHPo5UoK2XEZvzMqoWr7yBDQRGZqPtZmDhi-C4PyUyOFe4vBC7gxZZ-nO0xT0VAv7aIsv64ueEJtnbBJpL3IJF5gTIH7TbrMarik2qIlGiMzVuIlaVF5Ylfw4lV3KMkA2FWzqxwg-VknC8SePzqjoauQ5kKMnArxOI04sD7ap0Re5rYS9fjcDuQ9gcZ0wkd0uZf4WDr7zLRCt0q126Ms0EK'
    },
    {
      name: 'Royal Spice Banquet',
      price: '₹850',
      rating: '4.7',
      description: 'Authentic North Indian feast experts. Famous for their live tandoor counters and rich signature gravies.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxtgdBgBOrxQc7WiMB6GX7z3eXlPemKiMkicxKli4aD3DhmGnPh_U1HBkrxpJd8TJtyNqEQc_BzCG9jEjSJlzavM_JLlPKbv7MuQd5-yZStrw10Jl0fhzzko9o9_MVrFVuxpiqKO-Oy0HLw3lmICDcamoDJ4nDtZ5s7rez1e4JVLIDsKwS8p3snp-ZJ_9hyc02dSmXCz98gf0T7v4ZnYMZXeOEW_LFNz2k0-u1oyT3Mt1268BnlEDExLAUmungHGrehFoxnGv2fwUJ'
    },
    {
      name: 'Modern Harvest',
      price: '₹1,500',
      rating: '5.0',
      featured: true,
      description: 'Elevated grazing tables and multi-cuisine fusion menus. Perfect for high-end corporate events and weddings.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOy85iPkMy1htoZewUc4NKrtVw_yDglxDlCA80ZcLr4Gr1EAdB8AU_wc_BslR-zpoOGuA9v4T27704pDueaEMtmDrfZrpvPObYzb1clQ7AvnbJE_cFdpBUHal1yxz3oLnCo7qfMVoX7VGQQzZ_ayvLdx5p6C8J3aadPTBZv-CnfvOTFz7uzknkJkyCqohIqDZuQy1u7W2W628cFwAjwu6CoM_okEM5KkXqaEqfxmcpcmVQaa4B9r9pUB8HdlOSBbakaH8FL0v8nZ4K'
    },
    {
      name: 'Sugar & Sage',
      price: '₹600',
      rating: '4.6',
      description: 'High-tea and dessert catering specialists. Ideal for bridal showers, birthdays, and afternoon socials.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0TqB1D3802imFsS8CO82idBDSiTqql-o0AMcYs8YEDyATVSEORbif-0T6LiRmQ_xWtMUcervkH1Qi9ehyh2P1F2Qy_DptTB0wn0i6Sz0Io_hWyNmxdNw9sT5ih7plnc7t-D0J3JffF_pwIuXZfVJV_QQsqMPgAte4YT7vr2WA3unfCqUvD43rlsLLzR4MqcCGkeeuHAwxBCeu7Sj_yoOMhd4pk64_xhiNNsZb3hwMz4MKJVUd-z2xVKMnZqsQ4_syWqR7pYkCLjNX'
    },
    {
      name: 'Dakshin Delights',
      price: '₹950',
      rating: '4.8',
      description: 'Premium South Indian catering from Sadhya feasts to modern coastal delicacies. Pure vegetarian options available.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoRsPUPttydXpk3aDwiJtVJUigPqRRwZibdvPWCB6MFrK61QCUOaPscEHhWH7UFTvwvfiM6FgwXGeVHRwFkhsQO3MEOtM_CzbEtcyfv9obtG49hyvddGHRAGB1D9dzguOoUr4JIF2qPA_Ci33zyF4-34DgThKyFUjsvhhEJpsQLW6hgCTg8eELrp3YEDYO_ez-3TNCcH-3TinRuAdrsavupjTwbIE2BgpAUuGesceZ_qlgnY8wVNvzlNtOnUs6CiKje2FSGxdyJY0D'
    },
    {
      name: 'Artisan Fire',
      price: '₹1,100',
      rating: '4.5',
      description: 'Interactive live-fire cooking experience. Specialists in wood-fired pizzas and gourmet BBQ grills.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5pN_3prnL-iD6W1q4oB2WYut7f4rZtbRdeYU3UpQnKi1wfrJZNucwQVrCtLgdZIWHDVzMUVFbmyg-dLiZtXEr3fBCh-rtn_PweMn_ehnIE6sBnJgvsOU1ZzugiFjjEtWRaV-iu24DbIZ-8poujcDJy95CcVUwnGAH3fPldjZJttQwKtd7Klzk6hZPP-tB1qq5kczvrfNEpdvH1PQ2bJ6wPZuGUHZJxrOZsXU5pXIo0ftQC3mYPLlLPOoU6R1sibJTS0JFjMgLCYc0'
    }
  ];

  return (
    <div className="space-y-10 pb-12">
      <header>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-container-high p-8 md:p-12 mb-8">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4 leading-tight">
              Gourmet Catering for Your Celebrations
            </h1>
            <p className="text-lg text-on-surface-variant font-medium mb-6">
              Discover hand-picked artisans who bring the harvest to your table. From traditional feasts to modern grazing boards.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 md:opacity-100">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANfkIVOD4l3eifoX8Rhs4p4r5nn28SxsWKvyjUhswAqt_uz6pVL7PFGVhc4I2Q6fDygOUDkOt6iET6tpY9V9EpJOhJPhbLFF3Nv8QImFYTdBm47dTasQdyhmWtgRxjvnu50ldFI795dhM9NljSkYFX_-TAd7_mnLGeajGqjT8lx3rc6c3-LPWlHW8cOXK-spbigssSoEHxKqR43Mwl1JPUM_mfn11o1eNqLrUPfEIxDdtv5WQRTwVfw7eqFn7m9a12pn2EPY543CpU" 
              alt="" 
              className="w-64 h-64 object-cover rounded-tl-[100px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-container-low p-4 rounded-2xl">
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/15 rounded-xl font-bold hover:bg-surface-container-highest transition-colors">
              Budget <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/15 rounded-xl font-bold hover:bg-surface-container-highest transition-colors">
              Rating <ChevronDown className="w-4 h-4" />
            </button>
            <button className="px-5 py-2.5 text-primary font-bold hover:underline">Clear all</button>
          </div>
          <div className="text-on-surface-variant font-bold">
            <span className="text-on-surface">24</span> Premium Providers
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((item, i) => (
          <div key={i} className={cn(
            "group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(63,43,0,0.06)] transition-all hover:-translate-y-1 border border-outline-variant/10",
            item.featured && "ring-2 ring-primary/20"
          )}>
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {item.featured && (
                <div className="absolute top-4 left-4 bg-secondary px-3 py-1 rounded-full">
                  <span className="text-white text-[10px] uppercase font-bold tracking-widest">Featured</span>
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="font-bold text-on-surface text-sm">{item.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">{item.name}</h3>
                <span className="text-primary font-bold">{item.price} <span className="text-xs text-on-surface-variant font-normal">/plate</span></span>
              </div>
              <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{item.description}</p>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-on-primary rounded-xl font-bold transition-all active:scale-95 shadow-md">
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
                <button className="flex-1 py-3.5 border-2 border-outline-variant/30 text-primary rounded-xl font-bold hover:bg-surface-container-low transition-all active:scale-95">
                  Enquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
