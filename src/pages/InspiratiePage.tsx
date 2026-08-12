import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import InspirationCard from '../components/InspirationCard';
import CTASection from '../components/CTASection';
import { articles } from '../data/inspiration';

export default function InspiratiePage() {
  return (
    <>
      <PageMeta
        title="Inspiratie"
        description="Tips en advies voor je keuken, badkamer, vloer en interieur. Van showroomafspraak voorbereiden tot materialen kiezen."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-wide">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Inspiratie
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl">
            Tips en advies om je op weg te helpen bij het maken van woonkeuzes.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Inspiratie' }]} />

      <section className="section-padding py-8 lg:py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <InspirationCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="warm" />
    </>
  );
}
