import { Star } from 'lucide-react';
import type { Review } from '../data/reviews';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-softgray-200">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-warning-400 text-warning-400" />
        ))}
      </div>
      <p className="text-softgray-700 leading-relaxed mb-4">{review.text}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-purple-800">{review.name}</span>
        <span className="text-xs text-softgray-500">{review.source}</span>
      </div>
    </div>
  );
}
