import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'default' | 'warm';
}

export default function CTASection({
  title = 'Klaar om je plannen concreet te maken?',
  subtitle = 'Of je nu komt voor één ruimte of het complete plaatje, we denken graag met je mee.',
  ctaText = 'Plan een showroomafspraak',
  ctaHref = '/afspraak-maken',
  variant = 'default',
}: Props) {
  return (
    <section
      className={`relative section-padding overflow-hidden ${
        variant === 'warm'
          ? 'py-16 lg:py-24 bg-softgray-100'
          : 'py-20 lg:py-28 bg-purple-800'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`font-display text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight mb-5 ${
            variant === 'warm' ? 'text-purple-800' : 'text-white'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-10 max-w-xl mx-auto ${
            variant === 'warm' ? 'text-softgray-600' : 'text-purple-200'
          }`}
        >
          {subtitle}
        </p>
        <Link
          to={ctaHref}
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-200 ${
            variant === 'warm'
              ? 'bg-purple-800 text-white hover:bg-purple-900'
              : 'bg-white text-purple-800 hover:bg-softgray-100'
          }`}
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
