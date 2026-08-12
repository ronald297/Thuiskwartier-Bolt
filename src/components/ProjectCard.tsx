import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projecten/${project.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-softgray-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 lg:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span key={cat} className="text-xs font-medium text-purple-800 bg-purple-50 px-2.5 py-1 rounded-full">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg font-semibold text-purple-800 mb-2 group-hover:text-turquoise-600 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-1 text-sm text-softgray-500 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          {project.location}
        </div>
        <p className="text-sm text-softgray-600 leading-relaxed mb-4">{project.intro}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-800 group-hover:gap-2.5 transition-all">
          Bekijk project <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
