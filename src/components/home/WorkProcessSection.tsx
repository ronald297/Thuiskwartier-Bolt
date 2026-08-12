import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    label: 'Stap 1',
    title: 'Kennismaken',
    description: 'We bespreken je woning, wensen, ideeën en budget.',
    image:
      'https://images.pexels.com/photos/7505172/pexels-photo-7505172.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mensen selecteren materialen in de showroom',
  },
  {
    label: 'Stap 2',
    title: 'Kiezen en uitwerken',
    description:
      'We maken keuzes concreet en zorgen dat materialen, indeling en uitvoering bij elkaar passen.',
    image:
      'https://images.pexels.com/photos/6474506/pexels-photo-6474506.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Stel bekijkt samen plannen en materialen',
  },
  {
    label: 'Stap 3',
    title: 'Leveren en realiseren',
    description:
      'We regelen de levering en, als je dat wilt, ook de montage. Ook daarna blijven we aanspreekpunt.',
    image:
      'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Vakman aan het werk tijdens installatie',
  },
];

export default function WorkProcessSection() {
  return (
    <section className="bg-white py-16 lg:py-24 section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800">
            Zo werken we samen
          </h2>
          <p className="text-softgray-600 mt-3 max-w-xl mx-auto">
            Van eerste gesprek tot oplevering. Duidelijk en zonder gedoe.
          </p>
        </div>

        {/* Process steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.label}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <span className="block text-xs font-medium uppercase tracking-wider text-turquoise-500 mt-5">
                {step.label}
              </span>

              <h3 className="font-display text-xl font-semibold text-purple-800 mt-2">
                {step.title}
              </h3>

              <p className="text-softgray-600 text-sm leading-relaxed mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="text-center mt-10">
          <Link
            to="/werkwijze"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Ontdek onze werkwijze
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
