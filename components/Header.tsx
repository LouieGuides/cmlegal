'use client';
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Navbar */}
      <div className="navbar bg-[#0C0950] shadow-sm text-base-content">
        <div className="navbar max-w-screen-2xl mx-auto w-full">

          {/* Drawer Menu */}
          <div className="flex-none">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-ghost btn-circle text-white hover:text-[#0C0950] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </label>
              </div>
              <div className="drawer-side fixed z-[999]">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <li><Link href="/about/">About Us</Link></li>
                  <li><Link href="/services/">Services</Link></li>
                  <li><a>Latest News</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link href="/" className="hidden md:block">
                <img
                  src="/images/carmine-mercorella-legal-logo-1.png"
                  alt="CM Legal Logo"
                  width={300}
                  height={84}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  loading="eager"
                />
              </Link>

              {/* Mobile Logo */}
              <a className="md:hidden">
                <img
                  src="/images/carmine-mercorella-legal-mobile.png"
                  alt="CM Legal Mobile Logo"
                  width={200}
                  height={40}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  loading="eager"
                />
              </a>
            </div>
          </div>

          {/* Nav + Toggle */}
          <div className="flex gap-2 text-white items-center">
            {/* Desktop Nav */}
            <div className="hidden md:flex">
              <ul className="menu menu-horizontal px-1">
                <li><Link href="/about/">About</Link></li>
                <li><Link href="/services/">Services</Link></li>
                <li><a>Latest News</a></li>
              </ul>
            </div>

            {/* Search */}
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sub Nav Bar */}
      <div className="w-full bg-[#161179] text-primary-content">
        <div className="max-w-screen-2xl mx-auto flex h-12 items-center justify-end px-4">
          <ul className="menu menu-horizontal px-1">
            <li><a>Visa Appeal</a></li>
            <li><a>Visa Lodged</a></li>
            <li><a>State Nominations</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
