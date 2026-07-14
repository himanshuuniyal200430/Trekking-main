import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8">

          {/* Row 1 — Brand full width */}
          <div className="w-full">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="Matrika Tours & Travels"
                className="w-10 h-10 rounded-full object-cover object-center flex-shrink-0"
              />
              <div className="leading-tight">
                <p className="font-bold text-sm text-white">Matrika Tours & Travels</p>
                {/* <p className="text-xs text-yellow-400">& Travels</p> */}
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Find Your Perfect Trail 🧭 We believe the mountains should be accessible to everyone, exactly the way they want to experience them.
            </p>

            {/* Trek Types - 3 columns side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              <div className="bg-[#0d1f3c] rounded-xl p-3">
                <p className="text-yellow-400 text-xs font-semibold mb-2">🎒 Mixed Social Treks</p>
                <ul className="space-y-1">
                  {[
                    'Perfect gender ratios',
                    'Vibrant social vibes',
                    'Solo travelers welcome',
                    'Strangers to trekking family',
                  ].map((point) => (
                    <li key={point} className="text-gray-400 text-xs flex items-start gap-1">
                      <span className="w-1 h-1 bg-yellow-500 rounded-full inline-block shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0d1f3c] rounded-xl p-3">
                <p className="text-yellow-400 text-xs font-semibold mb-2">🌸 Women-Only Treks</p>
                <ul className="space-y-1">
                  {[
                    'Designed by women, for women',
                    'Safe empowering spaces',
                    'Lifelong sisterhood',
                    'Like-minded adventurers',
                  ].map((point) => (
                    <li key={point} className="text-gray-400 text-xs flex items-start gap-1">
                      <span className="w-1 h-1 bg-yellow-500 rounded-full inline-block shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0d1f3c] rounded-xl p-3">
                <p className="text-yellow-400 text-xs font-semibold mb-2">🗺️ Private Custom Treks</p>
                <ul className="space-y-1">
                  {[
                    'Built around your schedule',
                    'Your pace, your circle',
                    'Families, couples, teams',
                    'Fully custom itinerary',
                  ].map((point) => (
                    <li key={point} className="text-gray-400 text-xs flex items-start gap-1">
                      <span className="w-1 h-1 bg-yellow-500 rounded-full inline-block shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1DB6zqzUeP/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="https://www.instagram.com/matrika_tours_an_travels?igsh=MWFjYWdyZDZqeXNzeg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <FaInstagram size={12} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTwitter size={12} />
              </a>
              <a
                href="https://wa.me/919027378308"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <FaWhatsapp size={12} />
              </a>
            </div>
          </div>

          {/* Row 2 — Quick Links, Popular Treks, Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-[#1a2f4a]">

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Packages', path: '/packages' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'FAQ', path: '/faq' },
                  { name: 'Contact Us', path: '/contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Treks */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Popular Treks
              </h3>
              <ul className="space-y-2">
                {[
                  'Valley of Flowers Trek',
                  'Chopta Tungnath Trek',
                  'Madhyamaheshwar Trek',
                  'Kedarkantha Trek',
                  'Tirthan Jibhi Trek',
                ].map((trek) => (
                  <li key={trek}>
                    <Link
                      to="/packages"
                      className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {trek}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-yellow-400 mt-1 shrink-0" />
                  <span className="text-sm text-gray-400">
                    Jogiwala, Dehradun, 248001
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-yellow-400 shrink-0" />
                  <a
                    href="tel:+919027378308"
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    +91-9027378308
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-yellow-400 shrink-0" />
                  <a
                    href="mailto:matrikatoursandtravels3@gmail.com"
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors break-all"
                  >
                    matrikatoursandtravels3@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a2f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Matrika Tours & Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/admin/login"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
