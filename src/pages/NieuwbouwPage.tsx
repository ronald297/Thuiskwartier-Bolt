import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';

export default function NieuwbouwPage() {
  return (
    <>
      <PageMeta
        title="Nieuwbouw"
        description="Keuken, badkamer, PVC-vloer, tegels of maatwerkkasten voor je nieuwbouwwoning. Thuiskwartier helpt je met advies en keuzes die kloppen."
      />
      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Nieuwbouw
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl mx-auto">
            Ga je een nieuwbouwwoning betrekken? Dan is het slim om vroeg na te denken over je keuken,
            badkamer, vloer en kasten. Zo voorkom je verrassingen en maak je keuzes die bij elkaar passen.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ label: 'Nieuwbouw' }]} />
      <section className="section-padding py-12 lg:py-20">
        <div className="container-narrow space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-purple-800 mb-4">
              Waarom vroeg keuzes maken slim is
            </h2>
            <p className="text-softgray-600 leading-relaxed mb-4">
              Bij nieuwbouw heb je de kans om alles in een keer goed te doen. Keuken, badkamer, vloer en
              kasten kun je op elkaar afstemmen, waardoor je woning direct af voelt als je de sleutel krijgt.
            </p>
            <p className="text-softgray-600 leading-relaxed">
              Door tijdig langs te komen in onze showroom kun je materialen bekijken, advies krijgen en
              een plan maken dat past bij je budget en planning.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-purple-800 mb-4">
              Wat Thuiskwartier kan betekenen
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Keukens op maat voor nieuwbouw',
                'Badkamers inclusief sanitair en tegels',
                'PVC-vloeren voor de hele woning',
                'Tegels voor badkamer, toilet en hal',
                'Maatwerkkasten passend bij de indeling',
                'Montage mogelijk',
              ].map((item) => (
                <div key={item} className="bg-white rounded-xl border border-softgray-200 p-4 text-softgray-700 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-softgray-100 rounded-2xl p-6 lg:p-8">
            <h3 className="font-display text-lg font-semibold text-purple-800 mb-3">
              Nieuwbouw in Urk
            </h3>
            <p className="text-softgray-600 leading-relaxed mb-4">
              Bouw je in Urk of omgeving? We kennen de nieuwbouwwijken en de woningtypen. We helpen
              bewoners regelmatig bij het inrichten van hun nieuwbouwwoning.
            </p>
            <Link to="/nieuwbouw/urk" className="inline-flex items-center gap-2 text-sm font-medium text-purple-800 hover:text-turquoise-700">
              Meer over nieuwbouw in Urk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
