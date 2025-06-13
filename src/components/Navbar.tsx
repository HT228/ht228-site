'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Trang chủ' },
    { href: '/san-pham', label: 'Sản phẩm' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/tin-tuc', label: 'Tin tức' },
    { href: '/khuyen-mai', label: 'Khuyến mãi' },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <Link href="/" className="text-xl font-bold text-[#1e90ff] hover:opacity-90">
          HT228
        </Link>

        {/* Nút mobile */}
        <button
          className="md:hidden p-2 outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu chính */}
        <nav
          id="main-nav"
          role="navigation"
          className={`md:flex md:items-center md:justify-end transition-all duration-300 ease-in-out ${
            open || !isMobile
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-sm font-medium text-gray-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={() => isMobile && setOpen(false)}
                  className={`block px-3 py-2 rounded transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-[#e6f4ff] text-[#1e90ff] font-semibold underline underline-offset-4'
                      : 'hover:bg-gray-100 hover:text-[#1e90ff] hover:scale-105'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

