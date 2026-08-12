import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function BrandStatementSection() {
  return (
    <section className="bg-softgray-50 py-20 lg:py-32 section-padding">
      <div className="container-narrow max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl lg:text-[2.75rem] xl:text-5xl font-semibold text-purple-800 leading-tight">
          Je huis opnieuw inrichten
          <br />
          doe je niet iedere dag.
          <br />
          Dan wil je keuzes die{' '}
          <span className="text-purple-800">kloppen.</span>
        </h2>

        <p className="text-softgray-600 text-lg max-w-2xl mx-auto mt-6">
          Van keuken en badkamer tot vloer, tegels en maatwerkkasten. Kies
          alleen wat je nodig hebt, of laat ons meedenken over het geheel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/afspraak-maken"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            Maak een afspraak
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-base"
          >
            <Phone className="w-4 h-4" />
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
