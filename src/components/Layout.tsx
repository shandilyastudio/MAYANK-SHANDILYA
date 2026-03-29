import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Home, Package, Calendar, User, MessageCircle, PlusCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function TopAppBar() {
  return (
    <header className="fixed top-0 z-50 w-full glass-effect border-b border-outline-variant/10 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors active:scale-95">
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="font-headline font-extrabold text-xl tracking-tight text-on-surface">
          Festive Hearth
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-primary hover:bg-primary/5 p-2 rounded-full transition-colors active:scale-95">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export function BottomNavBar() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Package, label: 'Packages', path: '/packages' },
    { icon: Calendar, label: 'Services', path: '/catering' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full glass-effect border-t border-outline-variant/10 px-4 pb-6 pt-3 flex justify-around items-center z-50 rounded-t-3xl shadow-[0_-8px_32px_rgba(63,43,0,0.06)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-2 rounded-2xl transition-all duration-200 active:scale-90",
              isActive ? "bg-surface-container-highest text-on-surface" : "text-on-surface/60 hover:text-primary"
            )}
          >
            <item.icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function QuickPlanFAB() {
  return (
    <Link 
      to="/guide"
      className="fixed right-6 bottom-28 bg-primary-container text-on-surface p-4 rounded-2xl shadow-xl flex items-center gap-2 font-bold transition-all hover:scale-105 active:scale-95 z-40"
    >
      <PlusCircle className="w-6 h-6" />
      <span>Quick Plan</span>
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pb-32 pt-20">
      <TopAppBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <BottomNavBar />
      <QuickPlanFAB />
    </div>
  );
}
