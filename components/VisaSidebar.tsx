'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/visa/partner-visa', label: 'Partner Visa' },
  { href: '/visa/student-visa', label: 'Student Visa' },
  { href: '/visa/skilled-visa', label: 'Skilled Visa' },
];

export default function VisaSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="sticky top-24 bg-[#D4EBF8] p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">Visa Topics</h2>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={clsx(
                  'block px-3 py-2 rounded-md transition-colors',
                  pathname === link.href
                    ? 'bg-primary text-white'
                    : 'hover:bg-[#c4dceb]'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
