import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';

const regioData: Record<string, { name: string; distance: string; description: string }> = {
  urk: {
    name: 'Urk',
    distance: 'Direct bij de showroom',
    description: 'Als bewoner van Urk heb je onze showroom om de hoek. Loop gerust binnen of plan een afspraak. We kennen Urk, de woningen en de wijken.',
  },
  emmeloord: {
    name: 'Emmeloord',
    distance: 'Circa 15 minuten rijden',
    description: 'Vanuit Emmeloord ben je zo in onze showroom in Urk. We helpen regelmatig klanten uit Emmeloord en omgeving met keukens, badkamers, vloeren en meer.',
  },
  kampen: {
    name: 'Kampen',
    distance: 'Circa 30 minuten rijden',
    description: 'Vanuit Kampen rij je in een halfuur naar onze showroom. We denken graag mee over keuzes voor je woning, of je nu een keuken, badkamer, vloer of maatwerkkast zoekt.',
  },
  lelystad: {
    name: 'Lelystad',
    distance: 'Circa 35 minuten rijden',
    description: 'Ook vanuit Lelystad ben je welkom in onze showroom. We helpen klanten uit heel Flevoland met persoonlijk advies en materialen die je kunt bekijken en voelen.',
  },
  dronten: {
    name: 'Dronten',
    distance: 'Circa 25 minuten rijden',
    description: 'Vanuit Dronten ben je snel bij onze showroom in Urk. Of je nu een keuken, badkamer of complete woning wilt inrichten, we kijken samen wat past.',
  },
  lemmer: {
    name: 'Lemmer',
    distance: 'Circa 20 minuten rijden',
    description: 'Vanuit Lemmer is onze showroom goed bereikbaar. We helpen klanten uit Lemmer en omgeving met keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten.',
  },
  noordoostpolder: {
    name: 'Noordoostpolder',
    distance: 'Direct in de regio',
    description: 'Thuiskwartier ligt in de Noordoostpolder. Of je nu in Urk, Emmeloord, Kraggenburg of Ens woont, onze showroom is dichtbij. We kennen de regio en de woningen.',
  },
};

export default function RegioPage() {
  const { slug } = useParams<{ slug: string }>();
  const regio = slug ? regioData[slug] : undefined;

  if (!regio) return <Navigate to="/404" replace />;

  return (
    <>
      <PageMeta
        title={`Keukens, badkamers en meer in ${regio.name}`}
        description={`Thuiskwartier in ${regio.name} en omgeving. Keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten. Bezoek onze showroom in Urk.`}
      />
      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-narrow text-center">
          <div className="flex items-center justify-center gap-1.5 text-softgray-500 mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{regio.distance}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Thuiskwartier voor {regio.name}
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl mx-auto">{regio.description}</p>
        </div>
      </section>
      <Breadcrumbs items={[{ label: regio.name }]} />
      <section className="section-padding py-12 lg:py-20">
        <div className="container-narrow space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-purple-800 mb-4">
              Waarvoor kun je terecht?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Keukens', href: '/keukens' },
                { label: 'Badkamers', href: '/badkamers' },
                { label: 'PVC-vloeren', href: '/pvc-vloeren' },
                { label: 'Tegels', href: '/tegels' },
                { label: 'Maatwerkkasten', href: '/maatwerkkasten' },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center justify-between bg-white rounded-xl border border-softgray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <span className="text-softgray-700 font-medium">{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-softgray-400" />
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-softgray-100 rounded-2xl p-6 lg:p-8">
            <h3 className="font-display text-lg font-semibold text-purple-800 mb-3">
              Bezoek onze showroom
            </h3>
            <p className="text-softgray-600 leading-relaxed mb-4">
              In onze showroom aan de Marsdiep 1 in Urk kun je materialen bekijken, voelen en
              bespreken. Plan een afspraak zodat we alle tijd voor je hebben.
            </p>
            <Link to="/afspraak-maken" className="btn-primary inline-flex items-center gap-2">
              Plan een showroomafspraak <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
