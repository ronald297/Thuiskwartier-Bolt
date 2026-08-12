import { useState } from 'react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { projects } from '../data/projects';

const filters = ['Alles', 'Keukens', 'Badkamers', 'PVC-vloeren', 'Tegels', 'Maatwerkkasten'];

export default function ProjectenPage() {
  const [active, setActive] = useState('Alles');

  const filtered =
    active === 'Alles'
      ? projects
      : projects.filter((p) => p.categories.some((c) => c === active));

  return (
    <>
      <PageMeta
        title="Projecten"
        description="Bekijk gerealiseerde projecten van Thuiskwartier. Keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten in de regio Urk."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-wide">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Gerealiseerde projecten
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl">
            Bekijk wat we voor klanten in de regio hebben gerealiseerd. Van keukens en badkamers
            tot complete woonprojecten.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Projecten' }]} />

      <section className="section-padding py-8 lg:py-12">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === f
                    ? 'bg-purple-800 text-white'
                    : 'bg-softgray-200 text-softgray-600 hover:bg-softgray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-softgray-500 text-center py-12">
              Nog geen projecten in deze categorie.
            </p>
          )}
        </div>
      </section>

      <CTASection variant="warm" />
    </>
  );
}
