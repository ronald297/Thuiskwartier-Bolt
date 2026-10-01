import { Link } from 'react-router-dom';
import { ArrowRight, Check, Camera, Ruler, FileText, Heart, HelpCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const faqItems = [
  {
    question: 'Kunnen jullie alleen de keukenfronten vervangen?',
    answer: 'Ja, dat is mogelijk. Als de kastrompen nog in goede staat zijn en de indeling bevalt, kunnen we nieuwe fronten leveren die passen op de bestaande kasten. Dat kan de uitstraling van de keuken volledig veranderen.',
  },
  {
    question: 'Kan het werkblad worden vervangen terwijl de kasten blijven staan?',
    answer: 'In veel gevallen wel. We bekijken of de bestaande kasten het nieuwe werkblad kunnen dragen en of de aansluitingen kloppen. In de showroom bespreken we welke materialen en maten mogelijk zijn.',
  },
  {
    question: 'Kunnen jullie bestaande keukenapparatuur vervangen?',
    answer: 'Ja. We kunnen bestaande apparatuur vervangen door nieuwe modellen. Soms is een kleine aanpassing aan de kast nodig, bijvoorbeeld bij een ander formaat oven of kookplaat.',
  },
  {
    question: 'Is iedere keuken geschikt voor renovatie?',
    answer: 'Niet altijd. Als de kastrompen in slechte staat zijn, de indeling niet meer voldoet of er grote technische aanpassingen nodig zijn, kan een nieuwe keuken verstandiger zijn. We bekijken dat samen tijdens de afspraak.',
  },
  {
    question: 'Kunnen jullie ook de montage verzorgen?',
    answer: 'Ja, montage is mogelijk. We verzorgen het verwijderen van oude onderdelen, het plaatsen van nieuwe onderdelen en het aansluiten van apparatuur. Je kunt ook kiezen om alleen de materialen af te nemen.',
  },
  {
    question: 'Kan de indeling van mijn keuken bij een renovatie worden aangepast?',
    answer: 'Kleine aanpassingen zijn soms mogelijk, bijvoorbeeld het verplaatsen van een apparaat of het toevoegen van een extra kast. Wil je de indeling volledig veranderen? Dan kan een nieuwe keuken een betere keuze zijn.',
  },
  {
    question: 'Hoe weet ik of renoveren verstandiger is dan een nieuwe keuken?',
    answer: 'Dat hangt af van de staat van de kasten, de gewenste veranderingen en je budget. In de showroom bekijken we samen de mogelijkheden en geven we eerlijk advies over wat in jouw situatie het meest logisch is.',
  },
  {
    question: 'Moet ik vooraf maten van mijn keuken meenemen?',
    answer: 'Het is handig, maar niet verplicht. Met foto\'s en globale afmetingen kunnen we al een goed eerste gesprek voeren. Exacte maten nemen we later op wanneer dat nodig is.',
  },
];

const renovationOptions = [
  {
    title: 'Keukenfronten',
    description: 'Nieuwe fronten kunnen de uitstraling van een keuken volledig veranderen.',
  },
  {
    title: 'Werkblad',
    description: 'Van een andere kleur of structuur tot een compleet ander materiaal.',
  },
  {
    title: 'Apparatuur',
    description: 'Bestaande apparatuur vervangen of de keuken aanpassen voor nieuwe apparatuur.',
  },
  {
    title: 'Spoelbak en kraan',
    description: 'Praktische onderdelen die veel invloed hebben op het dagelijks gebruik en de uitstraling.',
  },
  {
    title: 'Grepen en details',
    description: 'Kleine veranderingen kunnen verrassend veel verschil maken.',
  },
  {
    title: 'Achterwand',
    description: 'Een nieuwe achterwand kan keuken, werkblad en interieur weer bij elkaar brengen.',
  },
];

const steps = [
  { number: '1', title: 'Kennismaken', description: 'We bespreken wat je aan de huidige keuken wilt veranderen.' },
  { number: '2', title: 'Bestaande situatie bekijken', description: 'Aan de hand van foto\'s, tekeningen en maten krijgen we een eerste beeld van de mogelijkheden.' },
  { number: '3', title: 'Materialen en onderdelen kiezen', description: 'In de showroom bekijken we fronten, werkbladen, apparatuur en andere mogelijkheden.' },
  { number: '4', title: 'Inmeten en voorbereiden', description: 'Waar nodig controleren we de bestaande situatie en maken we alles gereed voor uitvoering.' },
  { number: '5', title: 'Uitvoeren', description: 'De gekozen onderdelen worden geleverd en, als je voor montage kiest, netjes gemonteerd.' },
];

const beforeAfterProjects = [
  {
    title: 'Keukenrenovatie met nieuwe fronten en werkblad',
    description: 'De kastrompen waren nog prima, maar de fronten en het werkblad waren gedateerd. Met nieuwe fronten in een rustige tint en een composiet werkblad kreeg deze keuken een compleet andere uitstraling.',
    replaced: ['Keukenfronten', 'Werkblad', 'Grepen', 'Achterwand'],
  },
  {
    title: 'Apparatuur en spoelbak vernieuwd',
    description: 'De keukenindeling klopte, maar de apparatuur en spoelbak waren verouderd. Na vervanging is de keuken weer helemaal bij de tijd.',
    replaced: ['Kookplaat', 'Oven', 'Spoelbak', 'Kraan'],
  },
];

function BeforeAfterSlider({ index }: { index: number }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none bg-softgray-200"
      onMouseMove={(e) => { if (e.buttons === 1) handleMove(e.clientX); }}
      onTouchMove={(e) => { handleMove(e.touches[0].clientX); }}
      role="slider"
      aria-label="Vergelijk voor en na"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 2));
        if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 2));
      }}
    >
      {/* "After" image (full background) */}
      <div className="absolute inset-0 bg-softgray-100 flex items-center justify-center">
        <span className="text-softgray-400 text-sm">Na — foto volgt</span>
      </div>

      {/* "Before" image (clipped) */}
      <div
        className="absolute inset-0 bg-softgray-200 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <span className="text-softgray-500 text-sm">Voor — foto volgt</span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-purple-800">
            <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 bg-night/60 text-white text-xs px-2 py-1 rounded z-10">Voor</div>
      <div className="absolute bottom-3 right-3 bg-night/60 text-white text-xs px-2 py-1 rounded z-10">Na</div>
    </div>
  );
}

export default function KeukenrenovatiePage() {
  const possibilitiesRef = useRef<HTMLElement>(null);

  const scrollToPossibilities = () => {
    possibilitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageMeta
        title="Keukenrenovatie | Bestaande keuken vernieuwen"
        description="Is je keuken nog goed, maar toe aan een nieuwe uitstraling? Ontdek de mogelijkheden voor keukenrenovatie bij Thuiskwartier in Urk. Van fronten en werkblad tot apparatuur en montage."
      />

      {/* 1. Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Vernieuwde keuken met moderne fronten en warm werkblad"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-950/30 to-transparent" />
        </div>
        <div className="relative section-padding pb-10 lg:pb-14 w-full">
          <div className="container-wide">
            <p className="text-turquoise-300 font-medium text-sm tracking-wider uppercase mb-3">Keukenrenovatie</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-2xl">
              Je keuken vernieuwen zonder alles te vervangen
            </h1>
            <p className="mt-4 text-white/85 text-base lg:text-lg leading-relaxed max-w-xl">
              Is de basis van je keuken nog goed, maar zijn bijvoorbeeld de fronten, het werkblad of de apparatuur aan vervanging toe? Met een keukenrenovatie kijken we welke onderdelen kunnen blijven en wat er nodig is om je keuken weer bij je woning en wensen te laten passen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-night shadow-lg transition hover:bg-white/90"
              >
                Plan een showroomafspraak
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={scrollToPossibilities}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Bekijk wat er mogelijk is
              </button>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Keukens', href: '/keukens' }, { label: 'Keukenrenovatie' }]} />

      {/* 2. Herkenbare introductie */}
      <section className="section-padding py-16 lg:py-24">
        <div className="container-narrow">
          <p className="text-turquoise-500 font-medium text-sm tracking-wider uppercase mb-4">Wanneer renoveren?</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-800 leading-tight mb-8">
            Soms hoeft een goede keuken niet helemaal weg
          </h2>
          <div className="space-y-6 text-softgray-700 text-lg leading-relaxed">
            <p>
              Een keuken kan technisch nog prima in orde zijn, terwijl de uitstraling niet meer bij je past.
              Misschien zijn de fronten gedateerd, wil je een ander werkblad of is de apparatuur aan vervanging toe.
            </p>
            <p>
              In zo'n situatie kan keukenrenovatie een interessante oplossing zijn. We bekijken wat er al staat,
              welke onderdelen nog goed zijn en wat er technisch mogelijk is.
            </p>
            <p className="text-purple-800 font-medium">
              Het uitgangspunt is steeds hetzelfde: alleen vernieuwen wat zinvol is.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Wat kunnen we vernieuwen? */}
      <section ref={possibilitiesRef} className="section-padding py-12 lg:py-20 bg-softgray-100" id="mogelijkheden">
        <div className="container-wide">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
              Wat kunnen we aan je keuken vernieuwen?
            </h2>
            <p className="text-softgray-600 text-lg leading-relaxed">
              Iedere bestaande keuken is anders. Daarom bekijken we per situatie welke onderdelen vervangen kunnen worden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Large featured card */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-softgray-200">
              <div className="aspect-[16/9] bg-softgray-100 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=960"
                  alt="Nieuwe keukenfronten in rustige tint"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-xl font-semibold text-purple-800 mb-2">{renovationOptions[0].title}</h3>
                <p className="text-softgray-600 leading-relaxed">{renovationOptions[0].description}</p>
              </div>
            </div>

            {/* Two stacked cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white rounded-2xl overflow-hidden border border-softgray-200 flex-1">
                <div className="aspect-[16/10] bg-softgray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=640"
                    alt="Keuken werkblad in composiet"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-lg font-semibold text-purple-800 mb-1">{renovationOptions[1].title}</h3>
                  <p className="text-softgray-600 text-sm leading-relaxed">{renovationOptions[1].description}</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden border border-softgray-200 flex-1">
                <div className="aspect-[16/10] bg-softgray-100 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6283968/pexels-photo-6283968.jpeg?auto=compress&cs=tinysrgb&w=640"
                    alt="Moderne keukenapparatuur ingebouwd"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-lg font-semibold text-purple-800 mb-1">{renovationOptions[2].title}</h3>
                  <p className="text-softgray-600 text-sm leading-relaxed">{renovationOptions[2].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Three smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {renovationOptions.slice(3).map((option) => (
              <div key={option.title} className="bg-white rounded-xl border border-softgray-200 p-6">
                <h3 className="font-display text-lg font-semibold text-purple-800 mb-2">{option.title}</h3>
                <p className="text-softgray-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Renoveren of nieuwe keuken? */}
      <section className="section-padding py-12 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-turquoise-500 font-medium text-sm tracking-wider uppercase mb-4">Eerlijk advies</p>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-6">
                Renoveren of toch een nieuwe keuken?
              </h2>
              <div className="space-y-4 text-softgray-700 leading-relaxed">
                <p>
                  Keukenrenovatie is niet in iedere situatie automatisch de beste keuze. Zijn de kasten nog goed,
                  klopt de indeling en kunnen de gewenste onderdelen technisch worden vervangen? Dan kan renoveren
                  heel interessant zijn.
                </p>
                <p>
                  Is de keuken sterk verouderd, zijn de kastrompen slecht of wil je de indeling volledig veranderen?
                  Dan kan een <Link to="/keukens" className="text-turquoise-600 hover:text-turquoise-700 underline underline-offset-2">nieuwe keuken</Link> uiteindelijk
                  verstandiger zijn.
                </p>
                <p>
                  In de <Link to="/over-thuiskwartier/showroom-urk" className="text-turquoise-600 hover:text-turquoise-700 underline underline-offset-2">showroom</Link> kijken
                  we samen naar je situatie en bespreken we welke oplossing logisch is.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-softgray-100">
              <img
                src="https://images.pexels.com/photos/7045988/pexels-photo-7045988.jpeg?auto=compress&cs=tinysrgb&w=960"
                alt="Detail van keukenkasten en werkblad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Voor en na */}
      <section className="section-padding py-12 lg:py-20 bg-softgray-100">
        <div className="container-wide">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
              Een andere keuken, zonder opnieuw te beginnen
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-softgray-200">
                <BeforeAfterSlider index={i} />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-purple-800 mb-2">{project.title}</h3>
                  <p className="text-softgray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.replaced.map((item) => (
                      <span key={item} className="px-3 py-1 bg-softgray-50 text-softgray-600 text-xs rounded-full border border-softgray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Levering en montage */}
      <section className="section-padding py-12 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-softgray-100 order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=960"
                alt="Keukenmontage door vakmensen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-turquoise-500 font-medium text-sm tracking-wider uppercase mb-4">Goed uitgevoerd</p>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-6">
                We kunnen de renovatie ook voor je uitvoeren
              </h2>
              <div className="space-y-4 text-softgray-700 leading-relaxed">
                <p>
                  Bij een keukenrenovatie komt meer kijken dan alleen nieuwe onderdelen uitzoeken. Oude delen moeten
                  worden verwijderd, nieuwe onderdelen moeten passen en apparatuur moet netjes worden aangesloten.
                </p>
                <p>
                  Thuiskwartier kan daarom naast de levering ook de montage verzorgen. Zo weet je vooraf wie waarvoor
                  verantwoordelijk is en heb je een aanspreekpunt voor het geheel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hoe werkt een keukenrenovatie? */}
      <section className="section-padding py-12 lg:py-20 bg-softgray-100">
        <div className="container-wide">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-10 lg:mb-14">
            Hoe werkt een keukenrenovatie?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <div className="flex items-center gap-3 mb-3 lg:flex-col lg:items-start">
                  <div className="w-10 h-10 rounded-full bg-turquoise-300 text-night flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-[calc(2.5rem+0.5rem)] right-0 h-px bg-softgray-300" />
                  )}
                </div>
                <h3 className="font-semibold text-purple-800 mb-1 lg:mt-3">{step.title}</h3>
                <p className="text-softgray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-14">
            <Link to="/afspraak-maken" className="btn-primary inline-flex items-center gap-2">
              Plan een showroomafspraak <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/werkwijze" className="ml-4 text-turquoise-600 hover:text-turquoise-700 text-sm font-medium underline underline-offset-2">
              Meer over onze werkwijze
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Wat neem je mee? */}
      <section className="section-padding py-12 lg:py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
                Handig om mee te nemen
              </h2>
              <p className="text-softgray-700 leading-relaxed mb-8">
                Je hoeft vooraf nog niet alles uit te zoeken. Met een paar dingen kunnen we tijdens de afspraak wel
                sneller met je meedenken.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Camera, text: "Foto's van de huidige keuken" },
                  { icon: Ruler, text: 'Globale afmetingen' },
                  { icon: FileText, text: 'Oorspronkelijke keukentekening als je die nog hebt' },
                  { icon: Heart, text: "Foto's of inspiratiebeelden van wat je mooi vindt" },
                  { icon: HelpCircle, text: 'Informatie over apparatuur die je wilt behouden' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-turquoise-500 flex-shrink-0 mt-0.5" />
                    <span className="text-softgray-700">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-softgray-600 text-sm leading-relaxed bg-softgray-50 rounded-xl p-4 border border-softgray-200">
                Heb je niet alles? Geen probleem. We kunnen het gesprek ook gebruiken om eerst samen de mogelijkheden
                te verkennen.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-softgray-100 lg:self-center">
              <img
                src="https://images.pexels.com/photos/7545689/pexels-photo-7545689.jpeg?auto=compress&cs=tinysrgb&w=960"
                alt="Showroomgesprek over keukenmogelijkheden"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-narrow">
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* Related links */}
      <section className="section-padding py-10 bg-white">
        <div className="container-wide">
          <h3 className="font-sans font-semibold text-purple-800 mb-4">Bekijk ook</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Keukens', href: '/keukens' },
              { label: 'Projecten', href: '/projecten' },
              { label: 'Werkwijze', href: '/werkwijze' },
              { label: 'Showroom in Urk', href: '/over-thuiskwartier/showroom-urk' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 bg-purple-50 text-softgray-700 text-sm rounded-full hover:bg-softgray-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Afsluitende CTA */}
      <CTASection
        title="Benieuwd wat er met jouw keuken mogelijk is?"
        subtitle="Neem foto's van je huidige keuken mee naar de showroom. Samen bekijken we wat kan blijven, wat je wilt veranderen en welke aanpak bij jouw situatie past."
        ctaText="Plan een showroomafspraak"
        ctaHref="/afspraak-maken"
      />
    </>
  );
}
