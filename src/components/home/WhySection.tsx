export default function WhySection() {
  return (
    <section className="bg-softgray-50 py-16 lg:py-24 section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side — text */}
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-turquoise-600 mb-4">
              RUST IN JE WOONPLANNEN
            </p>

            <h2 className="font-display text-2xl lg:text-3xl xl:text-4xl font-semibold text-purple-800 leading-tight mb-6">
              Je hoeft niet zelf vijf partijen bij elkaar te brengen.
            </h2>

            <p className="text-softgray-700 leading-relaxed">
              Of je nu komt voor een nieuwe keuken, een badkamer of een compleet
              nieuwe vloer of een maatwerkkast, bij Thuiskwartier kies je zelf
              wat je nodig hebt. Wil je meerdere ruimtes tegelijk aanpakken? Dan
              stemmen we alles op elkaar af: materialen, kleuren, planning.
            </p>

            <p className="text-softgray-700 leading-relaxed mt-4">
              Montage is mogelijk, maar niet verplicht. En ook na oplevering
              blijven we je aanspreekpunt. Geen doorverwijzing, geen gedoe.
            </p>
          </div>

          {/* Right side — image */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7505563/pexels-photo-7505563.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Showroom consultation"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
