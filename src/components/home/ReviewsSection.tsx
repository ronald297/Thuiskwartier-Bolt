import { Star } from 'lucide-react';

interface Review {
  name: string;
  text: string;
  source: string;
}

const reviews: Review[] = [
  {
    name: 'Familie De Vries',
    text: 'Heel prettig geholpen in de showroom. Rustig advies, geen druk om te kopen. Onze keuken is precies geworden wat we voor ogen hadden.',
    source: 'Google Review',
  },
  {
    name: 'Mark en Esther',
    text: 'We kwamen voor een badkamer en zijn uiteindelijk ook de PVC-vloer hier gaan doen. Fijn dat alles onder een dak kan. Montage netjes geregeld.',
    source: 'Google Review',
  },
  {
    name: 'Peter van den Berg',
    text: 'Van begin tot eind goed begeleid. De tegels in onze badkamer zijn prachtig geworden. Ook na oplevering stonden ze voor ons klaar.',
    source: 'Google Review',
  },
];

function Stars({ size = 'small' }: { size?: 'small' | 'compact' }) {
  const iconClass =
    size === 'small'
      ? 'w-4 h-4 fill-warning-400 text-warning-400'
      : 'w-3.5 h-3.5 fill-warning-400 text-warning-400';

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={iconClass} />
      ))}
    </div>
  );
}

function LargeReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-softgray-50 rounded-2xl p-6 lg:p-10 flex flex-col justify-between h-full">
      <div>
        <Stars size="small" />
        <p className="font-display text-sm lg:text-2xl text-purple-800 leading-relaxed mt-3 lg:mt-4 italic">
          "{review.text}"
        </p>
      </div>
      <div className="mt-4 lg:mt-6">
        <p className="font-sans font-semibold text-purple-800 text-sm">
          {review.name}
        </p>
        <p className="text-softgray-500 text-xs">{review.source}</p>
      </div>
    </div>
  );
}

function CompactReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-softgray-50 rounded-2xl p-6 lg:p-8">
      <Stars size="compact" />
      <p className="text-softgray-700 leading-relaxed mt-3 text-sm">
        "{review.text}"
      </p>
      <div className="mt-4">
        <p className="font-sans font-semibold text-purple-800 text-sm">
          {review.name}
        </p>
        <p className="text-softgray-500 text-xs">{review.source}</p>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 section-padding">
      <div className="container-wide">
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-10">
          Wat klanten zeggen
        </h2>

        {/* Desktop: asymmetric grid */}
        <div className="hidden lg:grid grid-cols-5 gap-5">
          <div className="col-span-3">
            <LargeReviewCard review={reviews[0]} />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <CompactReviewCard review={reviews[1]} />
            <CompactReviewCard review={reviews[2]} />
          </div>
        </div>

        {/* Mobile: stacked compact cards */}
        <div className="flex flex-col gap-5 lg:hidden">
          {reviews.map((review) => (
            <CompactReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
