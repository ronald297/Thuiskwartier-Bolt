import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { Article } from '../data/inspiration';

export default function InspirationCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/inspiratie/${article.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-softgray-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 lg:p-6">
        <div className="flex items-center gap-1.5 text-xs text-softgray-500 mb-3">
          <Clock className="w-3.5 h-3.5" />
          {article.readTime} leestijd
        </div>
        <h3 className="font-display text-lg font-semibold text-purple-800 mb-2 group-hover:text-turquoise-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-softgray-600 leading-relaxed mb-4">{article.intro}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-800 group-hover:gap-2.5 transition-all">
          Lees meer <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
