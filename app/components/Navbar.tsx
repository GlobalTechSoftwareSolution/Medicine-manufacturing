'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center min-w-0">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2 sm:space-x-4 group cursor-pointer max-w-full">
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 flex-shrink-0 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl rounded-lg">
                <img src="/logo.jpg" alt="NR Medicare Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg sm:text-2xl font-bold font-sans bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 truncate">
                NR Medicare
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Products', path: '/products' },
              { name: 'Careers', path: '/careers' },
              { name: 'Education', path: '/education' },
              { name: 'Innovations', path: '/innovations' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-2 xl:px-4 py-2 rounded-md text-base xl:text-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-black hover:text-blue-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 cursor-pointer"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Products', path: '/products' },
              { name: 'Careers', path: '/careers' },
              { name: 'Individual Education', path: '/education' },
              { name: 'Innovations', path: '/innovations' },
              { name: 'Contact Us', path: '/contact' }
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-semibold cursor-pointer ${isActive(link.path) ? 'text-blue-600 bg-blue-50' : 'text-black hover:text-blue-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
