import React from 'react';
import VisaSidebar from '@/components/VisaSidebar';

export default function VisaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10  flex flex-col lg:flex-row gap-10">
      <div className="flex-1">{children}</div>
      <VisaSidebar />
    </div>
  );
}
