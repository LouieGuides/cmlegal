/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#161179] text-white py-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title">Australia Visa Option</h6>
              <Link href="/visa/partner-visa" className="link link-hover">Partner Visa</Link>
              <Link href="/visa/family-visa" className="link link-hover">Family & Parent Visa</Link>
              <Link href="/visa/sponsored-visa" className="link link-hover">Sponsored Visa</Link>
              <Link href="/visa/appeal" className="link link-hover">Visa Appeal</Link>
              <Link href="/visa" className="link link-hover">All Other Visa</Link>
            </nav>
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title">Company</h6>
              <Link href="/about" className="link link-hover">About us</Link>
              <Link href="/contact" className="link link-hover">Contact</Link>
              <Link href="/news" className="link link-hover">Latest News</Link>
              <Link href="/press" className="link link-hover">Press kit</Link>
            </nav>
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title">Legal</h6>
              <Link href="/terms" className="link link-hover">Terms of use</Link>
              <Link href="/privacy" className="link link-hover">Privacy policy</Link>
              <Link href="/cookies" className="link link-hover">Cookie policy</Link>
            </nav>
            <nav className="flex flex-col gap-2">
              <h6 className="footer-title">Tools</h6>
              <Link href="/tools/partner-visa-assessment" className="link link-hover">Partner Visa Assessment</Link>
              <Link href="/tools/points-calculator" className="link link-hover">Points Calculator</Link>
              <Link href="/tools/parent-visa-assessment" className="link link-hover">Parent Visa Assessment</Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="text-base-content bg-[#0C0950] border-t border-base-300 py-4">
        <div className="max-w-screen-2xl mx-auto px-[10px] flex flex-col md:flex-row justify-between items-center gap-4">
          <aside className="flex items-center gap-3">
            <img
              src="/images/carmine-mercorella-legal-logo-1.png"
              alt="Carmine Mercorella Legal Logo"
              width={260}
              height={80}
              style={{ maxWidth: '100%', height: 'auto' }}
              loading="lazy"
            />
            <p className="text-sm text-white">
              Carmine Mercorella Legal
              <br />
              Helping with Australian Immigration Law
            </p>
          </aside>

          <nav>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                {/* Facebook SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z" />
                </svg>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6.003c-.793.353-1.644.59-2.538.697a4.482 4.482 0 001.964-2.476 9.032 9.032 0 01-2.848 1.088A4.507 4.507 0 0015.5 4c-2.5 0-4.51 2.027-4.51 4.52 0 .354.037.697.117 1.027-3.75-.187-7.07-1.985-9.29-4.715a4.533 4.533 0 00-.615 2.27c0 1.57.777 2.954 1.964 3.767a4.488 4.488 0 01-2.04-.563v.06c0 2.193 1.55 4.023 3.606 4.438a4.525 4.525 0 01-2.03.077c.573 1.804 2.237 3.12 4.206 3.157A9.054 9.054 0 012 19.446a12.768 12.768 0 006.92 2.03c8.303 0 12.843-6.938 12.843-12.946 0-.198-.004-.39-.013-.582A9.318 9.318 0 0024 5.264a9.049 9.049 0 01-2.54.739z" />
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.239 0 0 2.238 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.119 20H4.248v-9h2.871v9zM5.683 9.473c-.92 0-1.483-.613-1.483-1.38 0-.782.576-1.378 1.511-1.378s1.482.596 1.499 1.378c0 .767-.56 1.38-1.527 1.38zM20 20h-2.869v-4.878c0-1.202-.43-2.024-1.505-2.024-.821 0-1.31.553-1.524 1.088-.079.191-.099.455-.099.721V20h-2.869s.038-9 0-9h2.869v1.273c.382-.59 1.062-1.43 2.588-1.43 1.889 0 3.308 1.241 3.308 3.914V20z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}
