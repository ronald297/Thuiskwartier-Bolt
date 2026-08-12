import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';

export default function NieuwbouwUrkPage() {
  return (
    <>
      <PageMeta
        title="Nieuwbouw in Urk"
        description="Keuken, badkamer en vloer voor je nieuwbouwwoning in Urk. Thuiskwartier kent de wijken en helpt je met keuzes die kloppen."
      />
      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Nieuwbouw in Urk
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl mx-auto">
            Ga je bouwen of heb je een nieuwbouwwoning gekocht in Urk? We kennen de wijken, de
            woningtypen en de mogelijkheden. In onze showroom helpen we je met keuzes voor je
            keuken, badkamer, vloer, tegels en maatwerkkasten.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[
        { label: 'Nieuwbouw', href: '/nieuwbouw' },
        { label: 'Urk' },
      ]} />
      <section className="section-padding py-12 lg:py-20">
        <div className="container-narrow space-y-8">
          <p className="text-softgray-600 leading-relaxed">
            Urk groeit en er komen regelmatig nieuwe wijken en woningen bij. We helpen bewoners
            om hun nieuwe woning naar eigen smaak in te richten. Door vroeg langs te komen in de
            showroom kun je materialen afstemmen op je woning en je budget.
          </p>
          <div>
            <h2 className="font-display text-2xl font-semibold text-purple-800 mb-4">
              Alles onder een dak
            </h2>
            <p className="text-softgray-600 leading-relaxed">
              Het voordeel van Thuiskwartier: je kunt voor je keuken, badkamer, vloer, tegels en
              maatwerkkasten bij ons terecht. Alles wordt in samenhang geadviseerd, zodat je woning
              als geheel klopt. Met montage als je dat wilt.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/afspraak-maken" className="btn-primary inline-flex items-center gap-2">
              Plan een showroomafspraak <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/werkwijze" className="btn-secondary inline-flex items-center gap-2">
              Ontdek onze werkwijze
            </Link>
          </div>
        </div>
      </section>
      <CTASection variant="warm" />
    </>
  );
}
