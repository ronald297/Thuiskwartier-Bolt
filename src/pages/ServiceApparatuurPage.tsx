import { Phone, Globe, Mail, Info } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

interface Supplier {
  name: string;
  phone?: string;
  website?: string;
  email?: string;
  note?: string;
}

const suppliers: Supplier[] = [
  { name: 'AEG', phone: '0172-468300', website: 'https://www.aeg.nl/support/' },
  { name: 'Airforce', phone: '0162-453232' },
  { name: 'ATAG', phone: '088-8821801', website: 'https://www.atag.nl/service-en-ondersteuning/' },
  { name: 'Beko', website: 'https://www.beko.com/nl-nl/support' },
  { name: 'Bora', phone: '00800-78900987', website: 'https://www.bora.com/nl/service/' },
  { name: 'Bosch', phone: '088-4244010', website: 'https://www.bosch-home.com/nl/ondersteuning/' },
  { name: 'Domest (Frilec, Husky, Exquisit)', phone: '0314-362244', website: 'https://www.domest.nl/service/' },
  { name: 'Elica', phone: '0800-11787878', website: 'https://www.elica.com/nl-nl/assistance/' },
  { name: 'Etna', phone: '088-8821803', website: 'https://www.etna.nl/service-en-ondersteuning/' },
  { name: 'Gaggenau', phone: '088-4244030', website: 'https://www.gaggenau.com/nl/service/' },
  { name: 'Grundig', phone: '079-3637315', website: 'https://www.grundig.com/nl-nl/ondersteuning/' },
  { name: 'Inventum', phone: '088-5422290', website: 'https://www.inventum.com/klantenservice/' },
  { name: 'Juno / Electrolux', phone: '0172-468300', website: 'https://www.electrolux.nl/support/' },
  { name: 'Le Germania / Bertazzoni', phone: '088-8100200', email: 'infonl@bertazzoni.com' },
  { name: 'Miele', phone: '0347-378888', website: 'https://www.miele.nl/service/' },
  { name: 'Neff', phone: '088-4244040', website: 'https://www.neff-home.com/nl/service/' },
  { name: 'Novy', phone: '088-0119110', website: 'https://www.novy.com/nl-nl/service/' },
  { name: 'Pelgrim', phone: '088-8821802', website: 'https://www.pelgrim.nl/service-en-ondersteuning/' },
  { name: 'Progress / Electrolux', phone: '0172-468300', website: 'https://www.electrolux.nl/support/' },
  { name: 'Quooker', phone: '0180-420488', website: 'https://www.quooker.nl/service/' },
  { name: 'Samsung', phone: '088-9090191', note: 'keuze 2', website: 'https://www.samsung.com/nl/support/' },
  { name: 'Selsiuz', phone: '088-2335533', website: 'https://www.selsiuz.nl/service/' },
  { name: 'Siemens', phone: '088-4244020', website: 'https://www.siemens-home.bsh-group.com/nl/service/' },
  { name: 'Smeg', phone: '020-4490120', website: 'https://www.smeg.com/nl/ondersteuning/' },
  { name: 'V-Zug', phone: '0800-8508500', website: 'https://www.vzug.com/nl/nl/service/' },
  { name: 'Zanussi', phone: '0172-468440', note: 'keuze 2', website: 'https://www.zanussi.nl/support/' },
];

const serialLocations = [
  { appliance: 'Afzuigkap', location: 'Aan de binnenzijde van de afzuigkap, onder het vetfilter.' },
  { appliance: 'Kookplaat', location: 'Aan de onderzijde van de kookplaat.' },
  { appliance: 'Fornuis', location: 'Aan de binnenzijde van de deur, of het frame waar de deur tegenaan komt.' },
  { appliance: 'Koelkast / vriezer', location: 'Aan de binnenzijde (vaak links), ter hoogte van de groentelade.' },
  { appliance: 'Koffiemachine', location: 'Aan de zijkant bij het reservoir.' },
  { appliance: 'Oven / magnetron / combi-oven', location: 'Aan de binnenzijde van de deur, of het frame waar de deur tegenaan komt.' },
  { appliance: 'Vaatwasser', location: 'Aan de binnenzijde van de deur, of het frame waar de deur tegenaan komt.' },
  { appliance: 'Warmhoudlade', location: 'Aan de binnenzijde van de lade, vaak aan de linkerkant.' },
  { appliance: 'Wijnkoeler', location: 'Aan de binnenzijde van de wijnkoeler, vaak aan de linkerbovenkant.' },
];

export default function ServiceApparatuurPage() {
  return (
    <>
      <PageMeta
        title="Service op apparatuur"
        description="Storingen aan je keukenapparatuur? Neem contact op met de fabrikant. Hier vind je alle telefoonnummers en servicepagina's."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-wide">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Service op apparatuur
          </h1>
          <p className="text-lg text-softgray-600 max-w-2xl">
            Voor storingen en problemen met je apparaat neem je contact op met de fabrikant. Zij hebben de expertise om reparaties uit te voeren. Bij het melden van een storing heb je het typenummer en serienummer nodig.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Service', href: '/service' }, { label: 'Apparatuur' }]} />

      <section className="section-padding py-8 lg:py-16">
        <div className="container-wide">
          <div className="bg-turquoise-50 border border-turquoise-200 rounded-xl p-5 mb-10 flex gap-3">
            <Info className="w-5 h-5 text-turquoise-500 shrink-0 mt-0.5" />
            <p className="text-softgray-700 text-sm leading-relaxed">
              Let op: als de garantie van je apparaat is vervallen, kunnen er kosten in rekening worden gebracht voor het servicebezoek en/of voorrijkosten.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suppliers.map((s) => (
              <div
                key={s.name}
                className="bg-white border border-softgray-200 rounded-xl p-5 hover:shadow-md hover:border-turquoise-200 transition-all duration-200"
              >
                <h3 className="font-semibold text-purple-800 mb-3">{s.name}</h3>
                <div className="space-y-2">
                  {s.phone && (
                    <a
                      href={`tel:${s.phone.replace(/[^+\d]/g, '')}`}
                      className="flex items-center gap-2 text-sm text-softgray-600 hover:text-purple-800 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-turquoise-400" />
                      <span>{s.phone}{s.note ? ` (${s.note})` : ''}</span>
                    </a>
                  )}
                  {s.email && (
                    <a
                      href={`mailto:${s.email}`}
                      className="flex items-center gap-2 text-sm text-softgray-600 hover:text-purple-800 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-turquoise-400" />
                      <span>{s.email}</span>
                    </a>
                  )}
                  {s.website && (
                    <a
                      href={s.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-softgray-600 hover:text-purple-800 transition-colors"
                    >
                      <Globe className="w-4 h-4 text-turquoise-400" />
                      <span>Servicepagina</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-8 lg:py-16 bg-softgray-50">
        <div className="container-wide">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-purple-800 mb-2">
            Waar staat het serienummer?
          </h2>
          <p className="text-softgray-600 mb-8 max-w-2xl">
            Op elk apparaat staat het modelnummer en uniek serienummer. Deze zijn nodig om de juiste onderdelen te bestellen en de service goed in behandeling te nemen.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serialLocations.map((item) => (
              <div key={item.appliance} className="bg-white rounded-xl p-5 border border-softgray-200">
                <h3 className="font-semibold text-purple-800 text-sm mb-1">{item.appliance}</h3>
                <p className="text-sm text-softgray-600 leading-relaxed">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-16">
        <div className="container-wide text-center">
          <p className="text-softgray-600">
            Heb je problemen met keukenkasten, werkbladen of accessoires?{' '}
            <a href="/service" className="text-purple-800 font-medium hover:underline">
              Ga naar de algemene servicepagina
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
