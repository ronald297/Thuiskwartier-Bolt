import { Navigate, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import ReviewCard from '../components/ReviewCard';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import { productPages } from '../data/products';
import { reviews } from '../data/reviews';
import { projects } from '../data/projects';

export default function ProductPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const page = slug ? productPages[slug] : undefined;

  if (!page) return <Navigate to="/404" replace />;

  const relatedProjects = projects.filter((p) =>
    p.categories.some((c) => c.toLowerCase() === page.title.toLowerCase())
  );

  return (
    <>
      <PageMeta title={page.metaTitle} description={page.metaDescription} />

      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img src={page.heroImage} alt={page.heroAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-950/30 to-transparent" />
        </div>
        <div className="relative section-padding pb-10 lg:pb-14 w-full">
          <div className="container-wide">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              {page.title}
            </h1>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: page.title }]} />

      {/* Intro */}
      <section className="section-padding py-12 lg:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="text-lg text-softgray-700 leading-relaxed mb-8">{page.intro}</p>
              <Link to="/afspraak-maken" className="btn-primary inline-flex items-center gap-2">
                Plan een showroomafspraak <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-purple-800 mb-5">
                Wat biedt Thuiskwartier
              </h2>
              <ul className="space-y-3">
                {page.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-turquoise-500 flex-shrink-0 mt-0.5" />
                    <span className="text-softgray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-8">
            {page.whyTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.whyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 text-left bg-white rounded-xl p-5">
                <Check className="w-5 h-5 text-turquoise-500 flex-shrink-0 mt-0.5" />
                <span className="text-softgray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      {page.brands.length > 0 && (
        <section className="section-padding py-12 lg:py-16 bg-white">
          <div className="container-wide">
            <h2 className="font-display text-xl font-semibold text-purple-800 mb-6">
              Merken
            </h2>
            <div className="flex flex-wrap gap-3">
              {page.brands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-softgray-50 text-softgray-700 text-sm rounded-full border border-softgray-200"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-purple-800 mb-8">
            Wat klanten zeggen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding py-12 lg:py-16 bg-white">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-semibold text-purple-800 mb-8">
              Projecten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-narrow">
          <FAQ items={page.faq} />
        </div>
      </section>

      {/* Related links */}
      <section className="section-padding py-10 bg-white">
        <div className="container-wide">
          <h3 className="font-sans font-semibold text-purple-800 mb-4">Bekijk ook</h3>
          <div className="flex flex-wrap gap-3">
            {page.relatedLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 bg-purple-50 text-softgray-700 text-sm rounded-full hover:bg-softgray-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
