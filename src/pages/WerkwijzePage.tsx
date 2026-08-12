import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const steps = [
  {
    num: '01',
    title: 'Plan je showroomafspraak',
    desc: 'Je kiest een moment dat past. Zo weten we zeker dat we tijd voor je hebben. Een afspraak duurt meestal ongeveer 60 minuten. Heb je een grotere vraag, dan nemen we daar de tijd voor.',
  },
  {
    num: '02',
    title: 'We luisteren naar je woonplannen',
    desc: 'Wat wil je veranderen, wat moet beter en wat wil je niet opnieuw meemaken? We nemen de tijd om je situatie, wensen en ideeën goed te begrijpen.',
  },
  {
    num: '03',
    title: 'We denken mee over keuzes die kloppen',
    desc: 'Voor je keuken, badkamer, vloer, tegels of maatwerkkasten. Los of als geheel. We kijken niet alleen naar de losse producten, maar naar het totaalplaatje van je woning.',
  },
  {
    num: '04',
    title: 'We maken een passend voorstel',
    desc: 'Met aandacht voor stijl, gebruik, budget, planning en uitvoering. Duidelijk en zonder verrassingen achteraf.',
  },
  {
    num: '05',
    title: 'Levering en montage, als je dat wilt',
    desc: 'Je kunt zelf keuzes maken in wat je door ons laat verzorgen. Montage is mogelijk, maar niet verplicht. Je houdt zelf de regie.',
  },
  {
    num: '06',
    title: 'Oplevering en nazorg',
    desc: 'Ook na levering of montage weet je waar je terechtkunt. Als er iets is, lossen we het op.',
  },
];

const faqItems = [
  {
    question: 'Is een showroomafspraak vrijblijvend?',
    answer: 'Ja. Een showroomafspraak is een kennismakingsgesprek waarin we luisteren naar je plannen en meedenken over mogelijkheden. Je zit nergens aan vast.',
  },
  {
    question: 'Kan ik ook zonder afspraak langskomen?',
    answer: 'Je bent welkom zonder afspraak. Maar met een afspraak weten we zeker dat we alle tijd voor je hebben.',
  },
  {
    question: 'Hoe lang duurt een showroomafspraak?',
    answer: 'Meestal ongeveer 60 minuten. Bij een grotere vraag, bijvoorbeeld als je meerdere ruimtes wilt bespreken, nemen we daar de tijd voor.',
  },
  {
    question: 'Moet ik alles bij Thuiskwartier afnemen?',
    answer: 'Nee. Je kunt bij ons terecht voor een keuken, een badkamer, een vloer, tegels of maatwerkkasten. Of juist een combinatie. Je kiest zelf.',
  },
  {
    question: 'Is montage verplicht?',
    answer: 'Nee. Montage is mogelijk, maar je kunt er ook voor kiezen om het zelf te regelen.',
  },
];

export default function WerkwijzePage() {
  return (
    <>
      <PageMeta
        title="Werkwijze"
        description="Van showroomafspraak tot oplevering. Zo werken we samen bij Thuiskwartier. Duidelijk, zonder gedoe."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-12">
        <div className="container-narrow text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Onze werkwijze
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl mx-auto">
            Van eerste gesprek tot oplevering. Duidelijk, persoonlijk en zonder gedoe.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Werkwijze' }]} />

      <section className="section-padding py-12 lg:py-20">
        <div className="container-narrow">
          <div className="space-y-10 lg:space-y-14">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 lg:gap-8">
                <div className="flex-shrink-0">
                  <span className="font-display text-4xl lg:text-5xl font-semibold text-turquoise-200">
                    {step.num}
                  </span>
                </div>
                <div className="pt-2">
                  <h2 className="font-display text-xl lg:text-2xl font-semibold text-purple-800 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-softgray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-narrow">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
            Montage en uitvoering
          </h2>
          <p className="text-softgray-600 leading-relaxed mb-4">
            Wil je dat Thuiskwartier de montage verzorgt? Dan regelen we de planning, de vakmensen
            en de oplevering. Je hebt een vast aanspreekpunt en weet waar je aan toe bent.
          </p>
          <p className="text-softgray-600 leading-relaxed">
            Liever zelf regelen? Dan leveren we de materialen en zorg je zelf voor de uitvoering.
            Ook dat kan.
          </p>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-16 bg-white">
        <div className="container-narrow">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
            Garantie en nazorg
          </h2>
          <p className="text-softgray-600 leading-relaxed mb-4">
            Na oplevering blijft Thuiskwartier je aanspreekpunt. Als er iets niet goed is of als je
            een vraag hebt over onderhoud, weet je waar je terechtkunt.
          </p>
          <Link to="/service" className="btn-secondary inline-flex items-center gap-2">
            Bekijk onze service <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-narrow">
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
