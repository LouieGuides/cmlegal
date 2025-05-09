'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function VisaSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/visa/family-visa', label: 'Family Visa' },
    { href: '/visa/partner-visa', label: 'Partner Visa' },
    { href: '/visa/skilled-visa', label: 'Skilled Visa' },
    { href: '/visa/sponsored-visa', label: 'Sponsored Visa' },
    { href: '/visa/appeal', label: 'Visa Appeal' },
  ];
  return (
    <aside className="w-full lg:w-64 h-[350px] sticky top-10 border-r border-gray-200 bg-[#d4ebf8] text-black p-6">
      <nav className="space-y-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded-md transition font-medium ${
                isActive
                  ? 'bg-[#161179] text-[#d4ebf8]'
                  : 'hover:bg-[#161179]/70 text-black/90'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
