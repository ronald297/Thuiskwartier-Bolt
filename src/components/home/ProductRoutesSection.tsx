import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Keukens',
    href: '/keukens',
    desc: 'Keukens die passen bij je woning en je manier van leven.',
    image: '/keukens.jpg',
    linkText: 'Bekijk keukens →',
    size: 'large' as const,
  },
  {
    title: 'Badkamers',
    href: '/badkamers',
    desc: 'Van praktisch vernieuwen tot meer rust en comfort.',
    image: '/badkamers.jpg',
    linkText: 'Bekijk badkamers →',
    size: 'large' as const,
  },
  {
    title: 'PVC-vloeren',
    href: '/pvc-vloeren',
    desc: 'Sterke, rustige vloeren die passen bij de sfeer van je huis.',
    image: '/pvc-vloeren.jpg',
    linkText: 'Bekijk PVC-vloeren →',
    size: 'small' as const,
  },
  {
    title: 'Tegels',
    href: '/tegels',
    desc: 'Voor badkamer, toilet, wand en vloer.',
    image: '/tegels.jpg',
    linkText: 'Bekijk tegels →',
    size: 'small' as const,
  },
  {
    title: 'Maatwerkkasten',
    href: '/maatwerkkasten',
    desc: 'Slimme kastoplossingen die passen bij je ruimte.',
    image: '/maatwerkkasten.jpg',
    linkText: 'Bekijk maatwerkkasten →',
    size: 'small' as const,
  },
];

export default function ProductRoutesSection() {
  const largeCards = products.filter((p) => p.size === 'large');
  const smallCards = products.filter((p) => p.size === 'small');

  return (
    <section className="bg-white py-16 lg:py-24 section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800">
            Ons aanbod
          </h2>
          <p className="text-softgray-600 mt-3 max-w-xl">
            Kies wat bij je past. Van een enkele ruimte tot het complete
            plaatje.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:block space-y-5">
          {/* First row: 2 large cards */}
          <div className="grid grid-cols-2 gap-5">
            {largeCards.map((product) => (
              <Link
                key={product.href}
                to={product.href}
                className="group block"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-purple-800 mt-4">
                  {product.title}
                </h3>
                <p className="text-softgray-600 text-sm mt-1">
                  {product.desc}
                </p>
                <span className="text-purple-800 text-sm font-medium mt-3 inline-block group-hover:text-purple-600 transition-colors">
                  {product.linkText}
                </span>
              </Link>
            ))}
          </div>

          {/* Second row: 3 small cards */}
          <div className="grid grid-cols-3 gap-5">
            {smallCards.map((product) => (
              <Link
                key={product.href}
                to={product.href}
                className="group block"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-purple-800 mt-4">
                  {product.title}
                </h3>
                <p className="text-softgray-600 text-sm mt-1">
                  {product.desc}
                </p>
                <span className="text-purple-800 text-sm font-medium mt-3 inline-block group-hover:text-purple-600 transition-colors">
                  {product.linkText}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile layout: all cards stacked */}
        <div className="lg:hidden space-y-8">
          {products.map((product) => (
            <Link
              key={product.href}
              to={product.href}
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-purple-800 mt-4">
                {product.title}
              </h3>
              <p className="text-softgray-600 text-sm mt-1">{product.desc}</p>
              <span className="text-purple-800 text-sm font-medium mt-3 inline-block group-hover:text-purple-600 transition-colors">
                {product.linkText}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
