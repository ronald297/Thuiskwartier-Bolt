import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    slug: 'showroomafspraak-voorbereiden',
    title: 'Zo bereid je je showroomafspraak goed voor',
    intro:
      'Een goede voorbereiding maakt je showroombezoek een stuk waardevoller. We delen een paar praktische tips.',
    image:
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min',
  },
  {
    slug: 'keuken-badkamer-vloer-afstemmen',
    title: 'Keuken, badkamer en vloer op elkaar afstemmen',
    intro:
      'Als je meerdere ruimtes tegelijk aanpakt, wil je dat het totaalplaatje klopt.',
    image:
      'https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min',
  },
  {
    slug: 'pvc-of-tegels',
    title: 'PVC of tegels: wat past beter bij jouw woning?',
    intro:
      'Beide opties hebben sterke punten. We helpen je de juiste keuze maken.',
    image:
      'https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min',
  },
];

export default function InspirationSection() {
  const [featured, ...smaller] = articles;

  return (
    <section className="bg-white py-16 lg:py-24 section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800">
              Inspiratie
            </h2>
            <p className="text-softgray-600 mt-2">
              Tips en advies om je op weg te helpen.
            </p>
          </div>
          <Link
            to="/inspiratie"
            className="btn-secondary hidden lg:inline-flex items-center gap-2"
          >
            Bekijk inspiratie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured article */}
          <Link
            to={`/inspiratie/${featured.slug}`}
            className="lg:col-span-3 group flex flex-col"
          >
            <div className="flex-1 min-h-0 rounded-2xl overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="block text-xs font-medium uppercase tracking-wider text-turquoise-500 mt-4">
              {featured.readTime}
            </span>
            <h3 className="font-display text-xl font-semibold text-purple-800 mt-2">
              {featured.title}
            </h3>
            <p className="text-softgray-600 text-sm mt-2 line-clamp-2">
              {featured.intro}
            </p>
          </Link>

          {/* Two smaller articles stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {smaller.map((article) => (
              <Link
                key={article.slug}
                to={`/inspiratie/${article.slug}`}
                className="group flex flex-col flex-1"
              >
                <div className="flex-1 min-h-0 rounded-2xl overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="block text-xs font-medium uppercase tracking-wider text-turquoise-500 mt-4">
                  {article.readTime}
                </span>
                <h3 className="font-display text-lg font-semibold text-purple-800 mt-2">
                  {article.title}
                </h3>
                <p className="text-sm text-softgray-600 mt-1 line-clamp-2">
                  {article.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile-only link */}
        <div className="mt-8 lg:hidden">
          <Link
            to="/inspiratie"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Bekijk inspiratie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
