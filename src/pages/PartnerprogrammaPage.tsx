import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PartnerprogrammaPage() {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => navigate('/bedankt-partneraanvraag'), 800);
  };

  return (
    <>
      <PageMeta
        title="Partnerprogramma"
        description="Samenwerken met Thuiskwartier? Voor aannemers, interieuradviseurs, ontwerpers en bouwbedrijven. Professioneel ontvangst, advies en uitvoering."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Partnerprogramma
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl mx-auto">
            Jij brengt de klant en het plan. Wij helpen met advies, materialen, offerte,
            showroombeleving en uitvoering. Samen zorgen we dat het klopt.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Partnerprogramma' }]} />

      <section className="section-padding py-12 lg:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-purple-800 mb-5">
                Wat biedt samenwerking met Thuiskwartier?
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  'Professioneel ontvangst van je klant in de showroom',
                  'Ondersteuning bij materiaalkeuzes',
                  'Keukens, badkamers, PVC, tegels en maatwerkkasten onder een dak',
                  'Duidelijke communicatie en nette offerte-afhandeling',
                  'Mogelijkheid om via jou als partner te blijven communiceren',
                  'Betrouwbare samenwerkingspartner die je klantrelatie respecteert',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-turquoise-500 flex-shrink-0 mt-0.5" />
                    <span className="text-softgray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-lg font-semibold text-purple-800 mb-3">
                Voor wie is het partnerprogramma?
              </h3>
              <p className="text-softgray-600 leading-relaxed">
                Het programma is bedoeld voor aannemers, interieuradviseurs, ontwerpers,
                bouwbedrijven en andere woonprofessionals die samen met Thuiskwartier hun
                klanten willen helpen.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-softgray-200 p-6 lg:p-8">
              <h2 className="font-display text-xl font-semibold text-purple-800 mb-6">
                Aanmelden als partner
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-softgray-700 mb-1.5">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-softgray-700 mb-1.5">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-softgray-700 mb-1.5">
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-softgray-700 mb-1.5">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-softgray-700 mb-1.5">
                    Type professional
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800 bg-white"
                  >
                    <option value="">Selecteer...</option>
                    <option value="aannemer">Aannemer</option>
                    <option value="interieuradviseur">Interieuradviseur</option>
                    <option value="ontwerper">Ontwerper</option>
                    <option value="bouwbedrijf">Bouwbedrijf</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-softgray-700 mb-1.5">
                    Korte toelichting
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800 resize-none"
                  />
                </div>
                <p className="text-xs text-softgray-400">
                  Door dit formulier te versturen ga je akkoord met onze{' '}
                  <Link to="/privacyverklaring" className="underline">privacyverklaring</Link>.
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full text-center disabled:opacity-50"
                >
                  {sending ? 'Versturen...' : 'Aanvraag versturen'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
