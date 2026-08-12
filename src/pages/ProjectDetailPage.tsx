import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, MapPin, Quote } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import ProjectGallery from '../components/ProjectGallery';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  return (
    <>
      <PageMeta
        title={project.title}
        description={`${project.title}. Bekijk dit gerealiseerde project van Thuiskwartier in ${project.location}.`}
      />

      <section className="relative h-[50vh] lg:h-[65vh] flex items-end">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-950/20 to-transparent" />
        </div>
        <div className="relative section-padding pb-10 lg:pb-14 w-full">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.categories.map((c) => (
                <span key={c} className="text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                  {c}
                </span>
              ))}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-2">
              {project.title}
            </h1>
            <div className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: 'Projecten', href: '/projecten' },
          { label: project.title },
        ]}
      />

      <section className="section-padding py-12 lg:py-20">
        <div className="container-narrow">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl lg:text-2xl font-semibold text-purple-800 mb-4">
                De wens
              </h2>
              <p className="text-softgray-600 leading-relaxed">{project.clientWish}</p>
            </div>

            <div>
              <h2 className="font-display text-xl lg:text-2xl font-semibold text-purple-800 mb-4">
                De keuzes
              </h2>
              <p className="text-softgray-600 leading-relaxed">{project.choices}</p>
            </div>

            <div>
              <h2 className="font-display text-xl lg:text-2xl font-semibold text-purple-800 mb-4">
                Het resultaat
              </h2>
              <p className="text-softgray-600 leading-relaxed">{project.result}</p>
            </div>

            {project.brands && project.brands.length > 0 && (
              <div>
                <h3 className="font-sans font-semibold text-purple-800 mb-3">
                  Gebruikte merken
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.brands.map((b) => (
                    <span key={b} className="px-3 py-1.5 bg-softgray-100 text-softgray-700 text-sm rounded-full">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h2 className="font-display text-xl lg:text-2xl font-semibold text-purple-800 mb-4">
                  Foto's
                </h2>
                <ProjectGallery images={project.gallery} />
              </div>
            )}

            {project.quote && (
              <div className="bg-softgray-100 rounded-2xl p-6 lg:p-8">
                <Quote className="w-6 h-6 text-turquoise-400 mb-3" />
                <p className="text-softgray-700 text-lg leading-relaxed italic mb-3">
                  {project.quote.text}
                </p>
                <p className="text-sm font-medium text-purple-800">{project.quote.name}</p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-softgray-200">
            <Link to="/projecten" className="btn-secondary inline-flex items-center gap-2">
              Bekijk alle projecten <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
