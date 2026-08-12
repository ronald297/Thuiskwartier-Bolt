import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    slug: 'keuken-urk',
    title: 'Keuken in Urk',
    location: 'Urk',
    categories: ['Keukens'],
    image:
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    slug: 'badkamer-emmeloord',
    title: 'Badkamer in Emmeloord',
    location: 'Emmeloord',
    categories: ['Badkamers', 'Tegels'],
    image:
      'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    slug: 'keuken-en-pvc-vloer-kampen',
    title: 'Keuken en PVC-vloer in Kampen',
    location: 'Kampen',
    categories: ['Keukens', 'PVC-vloeren'],
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

const featuredProject = projects.find((p) => p.featured)!;
const smallProjects = projects.filter((p) => !p.featured);

export default function ProjectsSection() {
  return (
    <section className="bg-softgray-50 py-16 lg:py-24 section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800">
              Gerealiseerde projecten
            </h2>
            <p className="text-softgray-600 mt-2">
              Bekijk wat we voor andere klanten hebben gerealiseerd.
            </p>
          </div>
          <Link
            to="/projecten"
            className="btn-secondary hidden lg:inline-flex items-center gap-2"
          >
            Bekijk projecten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured project */}
          <Link
            to={`/projecten/${featuredProject.slug}`}
            className="lg:col-span-3 group flex flex-col"
          >
            <div className="flex-1 min-h-0 rounded-2xl overflow-hidden">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-purple-800 mt-4">
              {featuredProject.title}
            </h3>
            <p className="text-softgray-500 text-sm mt-1">
              {featuredProject.location} &middot;{' '}
              {featuredProject.categories.join(', ')}
            </p>
          </Link>

          {/* Two smaller projects stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {smallProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projecten/${project.slug}`}
                className="group flex flex-col flex-1"
              >
                <div className="flex-1 min-h-0 rounded-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold text-purple-800 mt-3">
                  {project.title}
                </h3>
                <p className="text-softgray-500 text-sm mt-1">
                  {project.location} &middot; {project.categories.join(', ')}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile-only link */}
        <div className="mt-8 lg:hidden">
          <Link
            to="/projecten"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Bekijk projecten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
