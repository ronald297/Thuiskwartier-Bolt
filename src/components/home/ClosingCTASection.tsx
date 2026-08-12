import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ClosingCTASection() {
  return (
    <section className="bg-purple-800 py-20 lg:py-28 section-padding relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-tight mb-5">
          Klaar om je plannen concreet te maken?
        </h2>
        <p className="text-purple-200 text-lg mb-10 max-w-xl mx-auto">
          Of je nu komt voor één ruimte of het complete plaatje, we denken graag
          met je mee.
        </p>
        <Link
          to="/afspraak-maken"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-800 font-medium rounded-lg hover:bg-softgray-100 transition-all duration-200"
        >
          Plan een showroomafspraak
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
