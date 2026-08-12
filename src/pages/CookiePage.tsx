import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CookiePage() {
  return (
    <>
      <PageMeta title="Cookieverklaring" description="Cookieverklaring van Thuiskwartier. Welke cookies wij gebruiken en waarom." />
      <section className="pt-32 lg:pt-40 section-padding pb-4">
        <div className="container-narrow">
          <h1 className="font-display text-3xl lg:text-4xl font-semibold text-purple-800 mb-4">Cookieverklaring</h1>
        </div>
      </section>
      <Breadcrumbs items={[{ label: 'Cookieverklaring' }]} />
      <section className="section-padding py-8 lg:py-12">
        <div className="container-narrow space-y-6 text-softgray-600 leading-relaxed">
          <p>Thuiskwartier maakt gebruik van cookies op haar website. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op je computer, tablet of smartphone.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Functionele cookies</h2>
          <p>Functionele cookies zijn noodzakelijk voor het goed functioneren van de website. Deze cookies zorgen er bijvoorbeeld voor dat je instellingen worden onthouden.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Analytische cookies</h2>
          <p>Wij gebruiken analytische cookies om het gebruik van de website te meten en te verbeteren. Deze gegevens worden geanonimiseerd en niet gedeeld met derden voor commerciele doeleinden.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Cookies van derden</h2>
          <p>Op onze website zijn onderdelen opgenomen van derden, zoals Calendly voor het plannen van afspraken. Deze derden kunnen eigen cookies plaatsen. Wij hebben daar geen invloed op. Raadpleeg de privacyverklaring van de betreffende partij voor meer informatie.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Cookies in- of uitschakelen</h2>
          <p>Je kunt cookies in- of uitschakelen via je browserinstellingen. Let op: het uitschakelen van cookies kan ertoe leiden dat bepaalde functies van de website niet goed werken.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Contact</h2>
          <p>Heb je vragen over ons cookiebeleid? Neem contact met ons op via info@thuiskwartier.nl.</p>
        </div>
      </section>
    </>
  );
}
