import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';

const categories = [
  {
    title: 'Keukens',
    href: '/keukens',
    brands: ['Nobilia', 'Ballerina', 'Siemens', 'Bosch', 'AEG', 'Electrolux', 'ATAG', 'Bora', 'Quooker', 'Dekker Zevenhuizen', 'Montapanel'],
  },
  {
    title: 'Badkamers',
    href: '/badkamers',
    brands: ['Hotbath', 'Primabad', 'Brauer', 'Xenz', 'Villeroy & Boch', 'Dansani', 'LoooX', 'hansgrohe', 'Lavigo'],
  },
  {
    title: 'Tegels',
    href: '/tegels',
    brands: ['Cotto d\'Este', 'Ergon', 'Provenza', 'Sant\'Agostino', 'The Mosaic Factory', 'CottoceramiX', 'Coem', 'EdimaxAstor', 'Emil'],
  },
  {
    title: 'PVC-vloeren',
    href: '/pvc-vloeren',
    brands: ['Zuiderzee Collectie', 'Floorlife', 'Ambiant', 'vtwonen'],
  },
];

export default function MerkenPage() {
  return (
    <>
      <PageMeta title="Merken" description="Merken bij Thuiskwartier. Keukens, badkamers, tegels en PVC-vloeren van sterke merken." />
      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-wide">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">Merken</h1>
          <p className="text-lg text-softgray-600 max-w-xl">
            We werken met merken die we kennen en vertrouwen. Merken die passen bij de kwaliteit en het advies dat je van Thuiskwartier mag verwachten.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ label: 'Merken' }]} />
      <section className="section-padding py-8 lg:py-16">
        <div className="container-wide space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-semibold text-purple-800">{cat.title}</h2>
                <Link to={cat.href} className="text-sm text-softgray-500 hover:text-purple-800 transition-colors">
                  Bekijk {cat.title.toLowerCase()}
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.brands.map((brand) => (
                  <span key={brand} className="px-4 py-2.5 bg-white text-softgray-700 text-sm rounded-xl border border-softgray-200">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection variant="warm" />
    </>
  );
}
