import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/6908562/pexels-photo-6908562.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Stijlvol interieur met warme materialen"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-night/50 to-transparent" />

      {/* Content */}
      <div className="section-padding relative z-10 w-full max-w-7xl mx-auto">
        <div className="max-w-xl lg:ml-0">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.1] text-white tracking-tight">
            Maak je huis
            <br />
            tot een{' '}
            <span className="relative inline-block">
              thuis
              <span className="absolute left-0 -bottom-1 w-full h-1.5 bg-turquoise-300 rounded-full" />
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-md">
            Keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten. Alles onder een dak in onze showroom in Urk.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/afspraak-maken"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-night shadow-lg transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Plan een showroomafspraak
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/werkwijze"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Ontdek onze werkwijze
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
