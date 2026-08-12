import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data/reviews';

const faqItems = [
  {
    question: 'Is de showroomafspraak vrijblijvend?',
    answer: 'Ja. Een showroomafspraak is een vrijblijvend kennismakingsgesprek. Je zit nergens aan vast.',
  },
  {
    question: 'Hoelang duurt een afspraak?',
    answer: 'Meestal ongeveer 60 minuten. Bij een grotere vraag nemen we daar de tijd voor.',
  },
  {
    question: 'Kan ik ook zonder afspraak langskomen?',
    answer: 'Je bent welkom zonder afspraak. Maar met een afspraak weten we zeker dat we alle tijd voor je hebben.',
  },
  {
    question: 'Wat moet ik meenemen?',
    answer: 'Heb je een plattegrond, bouwtekening, foto\'s of inspiratiebeelden? Neem ze mee. Een budgetindicatie mag ook, maar is niet verplicht.',
  },
];

export default function AfspraakPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <PageMeta
        title="Plan een showroomafspraak"
        description="Plan een showroomafspraak bij Thuiskwartier in Urk. Bespreek je plannen voor keuken, badkamer, PVC-vloer, tegels of maatwerkkasten."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Plan je showroomafspraak
          </h1>
          <p className="text-lg text-softgray-600 max-w-2xl mx-auto">
            Wil je je plannen bespreken voor een keuken, badkamer, PVC-vloer, tegels of
            maatwerkkasten? Plan dan een showroomafspraak. We nemen de tijd om naar je wensen
            te luisteren, mee te denken en samen te kijken wat past bij je woning, je budget en
            je planning.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Afspraak maken' }]} />

      <section className="section-padding py-8 lg:py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <div
                ref={widgetRef}
                className="calendly-inline-widget"
                data-url="https://calendly.com/thuiskwartier?hide_landing_page_details=1&hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-lg font-semibold text-purple-800 mb-4">
                  Waarvoor kun je terecht?
                </h2>
                <ul className="space-y-2">
                  {['Keukens', 'Badkamers', 'PVC-vloeren', 'Tegels', 'Maatwerkkasten', 'Combinaties'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-softgray-700">
                      <Check className="w-4 h-4 text-turquoise-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-purple-800 mb-4">
                  Wat kun je verwachten?
                </h2>
                <ul className="space-y-2 text-sm text-softgray-600">
                  <li>Persoonlijk adviesgesprek van ca. 60 minuten</li>
                  <li>Materialen bekijken en voelen</li>
                  <li>Vrijblijvend en zonder verplichtingen</li>
                </ul>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-purple-800 mb-4">
                  Handig om mee te nemen
                </h2>
                <ul className="space-y-2 text-sm text-softgray-600">
                  <li>Plattegrond of bouwtekening</li>
                  <li>Foto's van de huidige situatie</li>
                  <li>Inspiratiebeelden</li>
                  <li>Budgetindicatie (niet verplicht)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-10 lg:py-14 bg-softgray-50">
        <div className="container-narrow">
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="section-padding py-10 lg:py-14 bg-white">
        <div className="container-narrow">
          <ReviewCard review={reviews[0]} />
        </div>
      </section>
    </>
  );
}
