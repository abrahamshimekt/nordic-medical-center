'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Clock, Globe, ChevronDown } from 'lucide-react';

type Language = 'en' | 'am';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    en: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'Contact', href: '/contact' },
    ],
    am: [
      { name: 'መነሻ', href: '/' },
      { name: 'አገልግሎቶች', href: '#services' },
      { name: 'ስለ እኛ', href: '#about' },
      { name: 'ማዕከለ-ስዕል', href: '#gallery' },
      { name: 'ግምገማዎች', href: '#reviews' },
      { name: 'አድራሻ', href: '/contact' },
    ],
  };

  const currentNav = navigation[lang];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-nordic-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-medical-teal" />
              <span>{lang === 'en' ? 'Open 24 Hours' : 'ለ24 ሰዓታት ክፍት'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-medical-teal" />
              <a href="tel:+251929105653" className="hover:text-medical-teal transition-colors">
                +251 92 910 5653
              </a>
            </div>
          </div>
          <button
            onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-nordic-800 hover:bg-nordic-700 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'en' ? 'አማርኛ' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-nordic-500/5'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-nordic-gradient rounded-xl flex items-center justify-center shadow-lg shadow-nordic-500/30 group-hover:shadow-nordic-500/50 transition-all">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v4m0 0H8m4 0h4"
                    />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-medical-teal rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-nordic-900 tracking-tight">
                  Nordic Medical
                </h1>
                <p className="text-xs text-frost-500 font-medium -mt-0.5">
                  {lang === 'en' ? 'Centre • Bole' : 'ሴንተር • ቦሌ'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {currentNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-frost-500 hover:text-nordic-600 font-medium transition-colors rounded-lg hover:bg-nordic-50"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+251929105653"
                className="flex items-center gap-2 px-4 py-2 text-nordic-600 font-medium hover:bg-nordic-50 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                {lang === 'en' ? 'Call Now' : 'ደውሉ'}
              </a>
              <Link
                href="/contact#appointment"
                className="btn-primary flex items-center gap-2"
              >
                {lang === 'en' ? 'Book Appointment' : 'ቀጠሮ ያስይዙ'}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
                className="p-2 text-frost-500 hover:text-nordic-600"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-frost-500 hover:text-nordic-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-frost-200 animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {currentNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-frost-600 hover:text-nordic-600 hover:bg-nordic-50 rounded-xl font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+251929105653"
                  className="flex items-center justify-center gap-2 w-full py-3 text-nordic-600 font-medium border-2 border-nordic-600 rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  {lang === 'en' ? 'Call Now' : 'ደውሉ'}
                </a>
                <Link
                  href="/contact#appointment"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-nordic-600 text-white font-medium rounded-full"
                >
                  {lang === 'en' ? 'Book Appointment' : 'ቀጠሮ ያስይዙ'}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

