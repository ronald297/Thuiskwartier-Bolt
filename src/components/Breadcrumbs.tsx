import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: Props) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="section-padding py-4">
      <div className="container-wide">
        <ol className="flex flex-wrap items-center gap-1 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {allItems.map((item, i) => (
            <li key={i} className="flex items-center gap-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-softgray-400" />}
              {item.href && i < allItems.length - 1 ? (
                <Link to={item.href} className="text-softgray-500 hover:text-purple-800 transition-colors" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-purple-800 font-medium" itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
