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
  title = 'Bespreek je plannen in onze showroom',
  subtitle = 'Of je nu komt voor een ruimte of het complete plaatje, we denken graag met je mee.',
  ctaText = 'Plan een showroomafspraak',
  ctaHref = '/afspraak-maken',
  variant = 'default',
}: Props) {
  return (
    <section
      className={`relative section-padding py-16 lg:py-24 overflow-hidden ${
        variant === 'warm' ? 'bg-softgray-100' : 'bg-purple-800'
      }`}
    >
      {variant === 'default' && (
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 300" preserveAspectRatio="none" fill="none">
          <path d="M-50 200C150 100 350 250 550 150C750 50 900 200 1000 100" stroke="#8ACDD1" strokeWidth="1" fill="none"/>
        </svg>
      )}
      <div className="container-narrow text-center relative">
        <h2
          className={`font-display text-2xl lg:text-4xl font-semibold mb-4 ${
            variant === 'warm' ? 'text-purple-800' : 'text-white'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-8 max-w-xl mx-auto ${
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
              : 'bg-turquoise-300 text-night hover:bg-turquoise-200'
          }`}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
