import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Instagram } from 'lucide-react';

const aanbodItems = [
  { label: 'Keukens', href: '/keukens' },
  { label: 'Badkamers', href: '/badkamers' },
  { label: 'PVC-vloeren', href: '/pvc-vloeren' },
  { label: 'Tegels', href: '/tegels' },
  { label: 'Maatwerkkasten', href: '/maatwerkkasten' },
];

const overItems = [
  { label: 'Over Thuiskwartier', href: '/over-thuiskwartier' },
  { label: 'Showroom in Urk', href: '/over-thuiskwartier/showroom-urk' },
];

const topBarLinks = [
  { label: 'Service', href: '/service' },
  { label: 'Partnerprogramma', href: '/partnerprogramma' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aanbodOpen, setAanbodOpen] = useState(false);
  const [overOpen, setOverOpen] = useState(false);
  const aanbodTimeout = useRef<ReturnType<typeof setTimeout>>();
  const overTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled && !mobileOpen;

  useEffect(() => {
    setMobileOpen(false);
    setAanbodOpen(false);
    setOverOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleAanbodEnter = () => {
    clearTimeout(aanbodTimeout.current);
    setAanbodOpen(true);
  };
  const handleAanbodLeave = () => {
    aanbodTimeout.current = setTimeout(() => setAanbodOpen(false), 150);
  };
  const handleOverEnter = () => {
    clearTimeout(overTimeout.current);
    setOverOpen(true);
  };
  const handleOverLeave = () => {
    overTimeout.current = setTimeout(() => setOverOpen(false), 150);
  };

  const textClass = isTransparent ? 'text-white/90' : 'text-softgray-600';
  const textHoverClass = isTransparent ? 'hover:text-white' : 'hover:text-purple-800';
  const navTextClass = isTransparent ? 'text-white' : 'text-softgray-700';
  const navHoverClass = isTransparent
    ? 'hover:text-white hover:bg-white/10'
    : 'hover:text-purple-800 hover:bg-softgray-100';
  const navActiveClass = isTransparent
    ? 'text-white bg-white/15 font-medium'
    : 'text-purple-800 bg-purple-50 font-medium';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent border-b border-white/[0.12]'
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        {/* Top bar -- desktop only */}
        <div className="hidden lg:block">
          <div className="section-padding">
            <div className="container-wide flex items-center justify-end h-9">
              <div className="flex items-center gap-5">
                <a
                  href="tel:0527798000"
                  className={`flex items-center gap-1.5 text-xs ${textClass} ${textHoverClass} transition-colors`}
                >
                  <Phone className="w-3 h-3" />
                  0527 798 000
                </a>
                {topBarLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-xs ${textClass} ${textHoverClass} transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://instagram.com/thuiskwartier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textClass} ${textHoverClass} transition-colors`}
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`h-px transition-colors duration-300 ${
              isTransparent ? 'bg-white/[0.08]' : 'bg-softgray-200/60'
            }`}
          />
        </div>

        {/* Main nav */}
        <div className="section-padding">
          <div className="container-wide flex items-center justify-between h-16 lg:h-[4.25rem]">
            {/* Logo */}
            <Link to="/" className="z-10 flex-shrink-0">
              <img
                src={isTransparent ? '/Thuiskwartier-Logo-Wit.png' : '/Thuiskwartier-Logo-Paars.png'}
                alt="Thuiskwartier"
                className="h-14 lg:h-16 w-auto transition-opacity duration-300"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {/* Aanbod dropdown */}
              <div
                className="relative"
                onMouseEnter={handleAanbodEnter}
                onMouseLeave={handleAanbodLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition-colors ${navTextClass} ${navHoverClass}`}
                  aria-expanded={aanbodOpen}
                  aria-haspopup="true"
                >
                  Aanbod
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aanbodOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    aanbodOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                  }`}
                >
                  <div className="w-56 bg-white rounded-xl shadow-lg border border-softgray-200 py-2">
                    {aanbodItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-5 py-2.5 text-sm text-softgray-700 hover:text-purple-800 hover:bg-softgray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/projecten"
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === '/projecten' ? navActiveClass : `${navTextClass} ${navHoverClass}`
                }`}
              >
                Projecten
              </Link>

              <Link
                to="/inspiratie"
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === '/inspiratie' ? navActiveClass : `${navTextClass} ${navHoverClass}`
                }`}
              >
                Inspiratie
              </Link>

              <Link
                to="/werkwijze"
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === '/werkwijze' ? navActiveClass : `${navTextClass} ${navHoverClass}`
                }`}
              >
                Werkwijze
              </Link>

              {/* Over ons dropdown */}
              <div
                className="relative"
                onMouseEnter={handleOverEnter}
                onMouseLeave={handleOverLeave}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition-colors ${navTextClass} ${navHoverClass}`}
                  aria-expanded={overOpen}
                  aria-haspopup="true"
                >
                  Over ons
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${overOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full right-0 pt-2 transition-all duration-200 ${
                    overOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                  }`}
                >
                  <div className="w-52 bg-white rounded-xl shadow-lg border border-softgray-200 py-2">
                    {overItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-5 py-2.5 text-sm text-softgray-700 hover:text-purple-800 hover:bg-softgray-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="/afspraak-maken"
                className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isTransparent
                    ? 'bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm'
                    : 'bg-purple-800 text-white hover:bg-purple-900'
                }`}
              >
                Plan afspraak
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`xl:hidden p-2 rounded-lg transition-colors ${
                  isTransparent
                    ? 'text-white hover:bg-white/10'
                    : 'text-softgray-700 hover:bg-softgray-100'
                }`}
                aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white xl:hidden overflow-y-auto pt-20">
          <nav className="section-padding py-6 pb-32">
            {/* Aanbod group */}
            <p className="px-4 pt-2 pb-2 text-xs font-medium text-softgray-400 uppercase tracking-wider">
              Aanbod
            </p>
            <div className="space-y-0.5 mb-4">
              {aanbodItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'text-purple-800 bg-purple-50 font-medium'
                      : 'text-softgray-700 hover:text-purple-800 hover:bg-softgray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Main links */}
            <div className="border-t border-softgray-200 pt-3 space-y-0.5 mb-4">
              {[
                { label: 'Projecten', href: '/projecten' },
                { label: 'Inspiratie', href: '/inspiratie' },
                { label: 'Werkwijze', href: '/werkwijze' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'text-purple-800 bg-purple-50 font-medium'
                      : 'text-softgray-700 hover:text-purple-800 hover:bg-softgray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Over ons group */}
            <p className="px-4 pt-2 pb-2 text-xs font-medium text-softgray-400 uppercase tracking-wider">
              Over ons
            </p>
            <div className="space-y-0.5 mb-4">
              {overItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'text-purple-800 bg-purple-50 font-medium'
                      : 'text-softgray-700 hover:text-purple-800 hover:bg-softgray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Secondary links */}
            <div className="border-t border-softgray-200 pt-3 space-y-0.5 mb-6">
              {topBarLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-3 text-sm text-softgray-600 hover:text-purple-800 hover:bg-softgray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/thuiskwartier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-softgray-600 hover:text-purple-800 hover:bg-softgray-50 rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>

            {/* CTA + phone */}
            <div className="px-4 space-y-3">
              <Link to="/afspraak-maken" className="btn-primary w-full text-center">
                Plan een showroomafspraak
              </Link>
              <a
                href="tel:0527798000"
                className="btn-secondary w-full text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0527 798 000
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-softgray-200 p-3">
        <Link to="/afspraak-maken" className="btn-primary w-full text-center">
          Plan afspraak
        </Link>
      </div>
    </>
  );
}
