import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <>
      <PageMeta title="Privacyverklaring" description="Privacyverklaring van Thuiskwartier. Hoe wij omgaan met persoonsgegevens." />
      <section className="pt-32 lg:pt-40 section-padding pb-4">
        <div className="container-narrow">
          <h1 className="font-display text-3xl lg:text-4xl font-semibold text-purple-800 mb-4">Privacyverklaring</h1>
        </div>
      </section>
      <Breadcrumbs items={[{ label: 'Privacyverklaring' }]} />
      <section className="section-padding py-8 lg:py-12">
        <div className="container-narrow space-y-6 text-softgray-600 leading-relaxed">
          <p>Thuiskwartier, gevestigd aan Marsdiep 1 te Urk, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Persoonsgegevens die wij verwerken</h2>
          <p>Thuiskwartier verwerkt persoonsgegevens die je zelf aan ons verstrekt, bijvoorbeeld via formulieren op onze website. Dit betreft onder andere naam, e-mailadres, telefoonnummer en eventuele aanvullende informatie die je invult.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Waarom wij gegevens verwerken</h2>
          <p>Wij verwerken je persoonsgegevens om contact met je op te nemen als je daar om vraagt, om afspraken in te plannen, om serviceverzoeken af te handelen en om de website te verbeteren.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Bewaartermijn</h2>
          <p>Thuiskwartier bewaart je persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor je gegevens worden verzameld.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Delen met derden</h2>
          <p>Thuiskwartier deelt je persoonsgegevens alleen met derden als dit noodzakelijk is voor de uitvoering van een overeenkomst of om te voldoen aan een wettelijke verplichting.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Cookies</h2>
          <p>Thuiskwartier gebruikt functionele en analytische cookies. Meer informatie hierover vind je in onze cookieverklaring.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Je rechten</h2>
          <p>Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te verwijderen. Neem hiervoor contact met ons op via info@thuiskwartier.nl.</p>

          <h2 className="font-display text-xl font-semibold text-purple-800 pt-4">Contact</h2>
          <p>Thuiskwartier<br />Marsdiep 1, Urk<br />info@thuiskwartier.nl<br />0527 798 000</p>
        </div>
      </section>
    </>
  );
}
