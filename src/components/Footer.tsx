import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-purple-200">
      <div className="relative overflow-hidden">
        {/* Decorative curved line from brand guide */}
        <svg className="absolute top-0 left-0 right-0 w-full h-16 -translate-y-px" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path d="M0 60C240 20 480 0 720 10C960 20 1200 50 1440 30V60H0Z" fill="#451B55"/>
          <path d="M0 58C240 18 480 -2 720 8C960 18 1200 48 1440 28" stroke="#8ACDD1" strokeWidth="1.5" fill="none"/>
        </svg>

        <div className="section-padding py-16 lg:py-20 pt-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              <div>
                <div className="mb-4">
                  <img
                    src="/Thuiskwartier-Logo-Wit.png"
                    alt="Thuiskwartier"
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-sm text-purple-200 leading-relaxed mb-1 font-display italic">
                  Maak je huis tot een <span className="font-semibold not-italic">thuis</span>.
                </p>
                <p className="text-sm text-purple-300 leading-relaxed mt-3">
                  Keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten. Alles onder een dak in onze showroom in Urk.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-white text-sm mb-4">Aanbod</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Keukens', to: '/keukens' },
                    { label: 'Badkamers', to: '/badkamers' },
                    { label: 'PVC-vloeren', to: '/pvc-vloeren' },
                    { label: 'Tegels', to: '/tegels' },
                    { label: 'Maatwerkkasten', to: '/maatwerkkasten' },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm text-purple-300 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-white text-sm mb-4">Inspiratie & vertrouwen</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Projecten', to: '/projecten' },
                    { label: 'Inspiratie', to: '/inspiratie' },
                    { label: 'Werkwijze', to: '/werkwijze' },
                    { label: 'Showroom in Urk', to: '/over-thuiskwartier/showroom-urk' },
                    { label: 'Over Thuiskwartier', to: '/over-thuiskwartier' },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm text-purple-300 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-white text-sm mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="https://maps.google.com/?q=Marsdiep+1+Urk" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-sm text-purple-300 hover:text-white transition-colors">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Marsdiep 1, Urk
                    </a>
                  </li>
                  <li>
                    <a href="tel:0527798000" className="flex items-center gap-2.5 text-sm text-purple-300 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      0527 798 000
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@thuiskwartier.nl" className="flex items-center gap-2.5 text-sm text-purple-300 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      info@thuiskwartier.nl
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-purple-300">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>Ma-vr: 09:00 - 17:30</p>
                      <p>Za: 09:30 - 16:00</p>
                      <p>Zo: gesloten</p>
                    </div>
                  </li>
                </ul>
                <Link to="/afspraak-maken" className="inline-flex mt-5 px-5 py-2.5 bg-turquoise-300 text-night font-medium text-sm rounded-lg hover:bg-turquoise-200 transition-colors">
                  Plan afspraak
                </Link>
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-purple-700">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-purple-400">
                  <Link to="/privacyverklaring" className="hover:text-purple-200 transition-colors">Privacyverklaring</Link>
                  <Link to="/cookieverklaring" className="hover:text-purple-200 transition-colors">Cookieverklaring</Link>
                  <Link to="/service" className="hover:text-purple-200 transition-colors">Service</Link>
                  <Link to="/merken" className="hover:text-purple-200 transition-colors">Merken</Link>
                  <a href="https://instagram.com/thuiskwartier" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5" /> Instagram
                  </a>
                </div>
                <p className="text-xs text-purple-400">
                  Thuiskwartier {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
