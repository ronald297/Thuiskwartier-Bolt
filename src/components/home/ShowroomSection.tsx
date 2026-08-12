import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ShowroomSection() {
  return (
    <section className="bg-white py-16 lg:py-24 section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-turquoise-600 mb-4">
              SHOWROOM IN URK
            </p>

            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-6">
              Bekijk, voel en kies in onze showroom
            </h2>

            <p className="text-softgray-600 leading-relaxed">
              In onze showroom aan de Marsdiep 1 in Urk kun je keukens, badkamers,
              PVC-vloeren, tegels en maatwerkkasten bekijken. Materialen zien en
              voelen, combinaties uitproberen en persoonlijk advies krijgen.
            </p>

            <p className="text-softgray-600 leading-relaxed mt-4">
              Binnenlopen mag altijd. Wil je zeker weten dat we alle tijd voor je
              hebben? Plan dan vooraf een afspraak.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                to="/over-thuiskwartier/showroom-urk"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Bekijk onze showroom
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/afspraak-maken"
                className="btn-primary inline-flex items-center gap-2"
              >
                Plan een showroomafspraak
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="/showroom-thuiskwartier copy.jpg"
              alt="Showroom interieur Thuiskwartier in Urk"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
