'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nordic-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-nordic-gradient rounded-xl flex items-center justify-center">
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
              <div>
                <h2 className="text-xl font-bold">Nordic Medical</h2>
                <p className="text-sm text-frost-400">Centre • Bole</p>
              </div>
            </div>
            <p className="text-frost-400 text-sm leading-relaxed mb-6">
              Providing high-quality, patient-focused healthcare services through 
              experienced doctors and modern medical facilities.
            </p>
            <p className="text-frost-400 text-sm font-amharic">
              ኖርዲክ ሜዲካል ሴንተር | ቦሌ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Patient Reviews', href: '#reviews' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-frost-400 hover:text-medical-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'General Medicine',
                'Specialist Consultations',
                'Diagnostics & Lab',
                'Emergency Care',
                'Health Checkups',
              ].map((service) => (
                <li key={service}>
                  <span className="text-frost-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-frost-400">Call Us</p>
                  <a
                    href="tel:+251929105653"
                    className="text-white hover:text-medical-teal transition-colors"
                  >
                    +251 92 910 5653
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-frost-400">Location</p>
                  <p className="text-white text-sm">
                    Bole Sub City, Kebele 01
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-medical-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-frost-400">Hours</p>
                  <p className="text-white text-sm font-medium">
                    Open 24 Hours
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nordic-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-frost-500 text-sm text-center md:text-left">
              © {currentYear} Nordic Medical Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-nordic-800 flex items-center justify-center hover:bg-medical-teal transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-nordic-800 flex items-center justify-center hover:bg-medical-teal transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-nordic-800 flex items-center justify-center hover:bg-medical-teal transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


