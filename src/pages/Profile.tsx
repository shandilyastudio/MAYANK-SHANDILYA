import React from 'react';
import { User, Settings, Bell, CreditCard, Heart, LogOut, ChevronRight } from 'lucide-react';

export default function Profile() {
  const menuItems = [
    { icon: Bell, label: 'Notifications', desc: 'Manage your alerts' },
    { icon: CreditCard, label: 'Payments', desc: 'Billing & transactions' },
    { icon: Heart, label: 'Favorites', desc: 'Saved services & venues' },
    { icon: Settings, label: 'Settings', desc: 'App preferences' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <header className="flex items-center gap-6 p-8 bg-surface-container-high rounded-[2.5rem]">
        <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center border-4 border-surface shadow-xl">
          <User className="w-12 h-12 text-on-surface" />
        </div>
        <div>
          <h1 className="text-3xl font-headline font-extrabold text-on-surface">Shandilya</h1>
          <p className="text-on-surface-variant font-medium">itsshandilya01@gmail.com</p>
          <button className="mt-2 text-primary font-bold text-sm hover:underline">Edit Profile</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item, i) => (
          <button key={i} className="flex items-center justify-between p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 hover:shadow-lg transition-all text-left group">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-surface-container-low group-hover:bg-primary-container transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-on-surface">{item.label}</p>
                <p className="text-xs text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 p-6 text-secondary font-bold hover:bg-secondary/5 rounded-2xl transition-colors">
        <LogOut className="w-6 h-6" />
        Log Out
      </button>
    </div>
  );
}
