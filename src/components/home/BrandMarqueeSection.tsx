import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const brands = [
  'Nobilia',
  'Ballerina',
  'Siemens',
  'Bosch',
  'AEG',
  'Electrolux',
  'ATAG',
  'Bora',
  'Quooker',
  'Hotbath',
  'Primabad',
  'Brauer',
  'Villeroy & Boch',
  'Hansgrohe',
  'Floorlife',
  'Ambiant',
  "Cotto d'Este",
];

export default function BrandMarqueeSection() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setPaused(e.matches);
    };

    handleChange(mq);

    mq.addEventListener('change', handleChange as (e: MediaQueryListEvent) => void);
    return () => {
      mq.removeEventListener('change', handleChange as (e: MediaQueryListEvent) => void);
    };
  }, []);

  return (
    <section className="bg-softgray-50 py-10 lg:py-14 section-padding">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container-wide">
        <p className="text-softgray-500 text-sm text-center mb-6">
          Een selectie van de merken die je bij Thuiskwartier kan vinden
        </p>

        <div className="relative flex items-center">
          {/* Scrolling marquee track */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex items-center gap-0"
              style={{
                animation: 'marquee 60s linear infinite',
                animationPlayState: paused ? 'paused' : 'running',
              }}
            >
              {brands.map((brand) => (
                <span
                  key={`a-${brand}`}
                  className="flex-shrink-0 px-8 lg:px-10 font-sans text-sm font-medium text-softgray-400 tracking-wide uppercase"
                >
                  {brand}
                </span>
              ))}

              {brands.map((brand) => (
                <span
                  key={`b-${brand}`}
                  className="flex-shrink-0 px-8 lg:px-10 font-sans text-sm font-medium text-softgray-400 tracking-wide uppercase"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Static right side with vertical line */}
          <div className="hidden lg:flex items-center flex-shrink-0 self-stretch">
            <div className="w-px bg-softgray-300 self-stretch"></div>
            <Link
              to="/merken"
              className="text-sm font-medium text-purple-800 hover:text-purple-600 whitespace-nowrap pl-8"
            >
              + nog meer &gt;
            </Link>
          </div>

          {/* Gradient fade before the line */}
          <div className="hidden lg:block absolute right-[140px] top-0 bottom-0 w-16 bg-gradient-to-l from-softgray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Mobile fallback link */}
        <div className="lg:hidden mt-4 text-center">
          <Link
            to="/merken"
            className="text-sm font-medium text-purple-800 hover:text-purple-600"
          >
            + nog meer &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
