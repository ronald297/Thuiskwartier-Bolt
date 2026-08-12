import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import { articles } from '../data/inspiration';

const articleContent: Record<string, { body: string[] }> = {
  'showroomafspraak-voorbereiden': {
    body: [
      'Een showroomafspraak is het moment waarop je woonplannen concreet worden. Je kunt materialen bekijken, advies krijgen en samen met een adviseur keuzes maken die passen bij je woning. Een goede voorbereiding maakt dat gesprek een stuk waardevoller.',
      '## Denk na over wat je wilt veranderen',
      'Ga je alleen de keuken aanpakken, of wil je ook de badkamer, vloer of maatwerkkasten meenemen? Het helpt als je vooraf weet welke ruimtes je wilt bespreken. Dan kan de adviseur zich voorbereiden en gerichter meedenken.',
      '## Neem plattegrond of bouwtekening mee',
      'Heb je een plattegrond, bouwtekening of foto van de huidige situatie? Neem die mee. Zo kan de adviseur sneller inschatten wat er mogelijk is en welke indelingen passen bij je ruimte.',
      '## Verzamel inspiratiebeelden',
      'Heb je screenshots, pins of foto\'s van interieurs die je aanspreken? Laat ze zien. Het helpt om snel te begrijpen welke richting je op wilt. Ook als je het nog niet precies weet, geven beelden houvast.',
      '## Denk na over je budget',
      'Je hoeft geen exact bedrag te noemen, maar een indicatie helpt. Dan kan de adviseur realistisch adviseren en keuzes voorstellen die passen bij wat je wilt besteden.',
      '## Neem de tijd',
      'Een showroomafspraak duurt meestal ongeveer 60 minuten. Bij een grotere vraag, bijvoorbeeld als je meerdere ruimtes wilt bespreken, nemen we daar de tijd voor. Plan je afspraak op een rustig moment, zodat je niet gehaast hoeft te zijn.',
      '## Stel gerust vragen',
      'Er zijn geen domme vragen. Of het nu gaat over onderhoud, levertijd, montage of kosten, het is juist de bedoeling dat je met een duidelijk beeld de deur uit gaat.',
    ],
  },
  'keuken-badkamer-vloer-afstemmen': {
    body: [
      'Als je meerdere ruimtes tegelijk aanpakt, wil je dat het totaalplaatje klopt. Kleuren, materialen en stijl moeten op elkaar aansluiten zonder dat alles precies hetzelfde hoeft te zijn. Dat is de kunst van goed afstemmen.',
      '## Begin met het totaalgevoel',
      'Bepaal eerst welke sfeer je in je woning wilt. Warm en natuurlijk? Strak en modern? Landelijk met een eigentijdse twist? Als je het gevoel weet, volgen de materiaalkeuzes makkelijker.',
      '## Kies een rode draad',
      'Een rode draad kan een kleur zijn, een materiaal of een stijlrichting. Bijvoorbeeld: eiken accenten die terugkomen in de keuken, de vloer en de badkamer. Of een warme grijstint die overal subtiel aanwezig is.',
      '## Laat ruimtes op elkaar aansluiten, niet kopieer',
      'Je badkamer hoeft er niet hetzelfde uit te zien als je keuken. Maar als de materialen en kleuren op elkaar inspelen, ontstaat er een samenhangend geheel. In de showroom kun je materialen naast elkaar leggen om te zien of het klopt.',
      '## Denk aan de overgangen',
      'Waar vloer en keuken samenkomen, of waar de hal overgaat in de badkamer. Die overgangen bepalen voor een groot deel of het geheel rustig en logisch aanvoelt.',
      '## Laat je adviseren',
      'Het afstemmen van meerdere ruimtes is precies waar Thuiskwartier goed in is. Omdat je bij ons terechtkunt voor keukens, badkamers, vloeren, tegels en maatwerkkasten, kijken we automatisch naar het totaalplaatje. Dat scheelt tijd, stress en teleurstellingen.',
    ],
  },
  'pvc-of-tegels': {
    body: [
      'Bij de keuze voor een nieuwe vloer komt de vraag vaak neer op: PVC of tegels? Beide hebben sterke punten. De beste keuze hangt af van je situatie, je woning en je voorkeuren.',
      '## PVC: warm, stil en onderhoudsvriendelijk',
      'PVC voelt warm aan, dempt geluid en is makkelijk te onderhouden. Het is geschikt voor alle ruimtes, inclusief keuken en badkamer. PVC is er in veel kleuren en patronen, van strakke planken tot visgraat. Het is snel gelegd en goed te combineren met vloerverwarming.',
      '## Tegels: duurzaam, tijdloos en stevig',
      'Tegels zijn robuust en gaan lang mee. Ze zijn verkrijgbaar in veel formaten, kleuren en structuren: van betonlook tot marmer, van mozaiek tot groot formaat. Tegels passen goed in badkamers en keukens, maar ook in de woonkamer of hal.',
      '## Wanneer kies je PVC?',
      'Als je waarde hecht aan warmte, comfort en een snelle legmethode. PVC is geschikt als je een vloer zoekt die in de hele woning doorloopt en die bij dagelijks gebruik praktisch en stil is.',
      '## Wanneer kies je tegels?',
      'Als je kiest voor duurzaamheid, een robuuste uitstraling en veel variatie in materiaal en formaat. Tegels passen goed als je een sterke visuele keuze wilt maken of als de vloer in natte ruimtes moet liggen.',
      '## Combineren kan ook',
      'In veel woningen werkt een combinatie goed. Tegels in de badkamer en hal, PVC in de woonkamer en slaapkamer. In de showroom kun je beide materialen naast elkaar leggen en voelen. Zo zie je snel wat het beste past bij jouw situatie.',
      '## Advies op maat',
      'In onze showroom helpen we je graag met de afweging. We kijken naar je woning, je gebruik en je budget. Zo maak je een keuze waar je lang blij mee bent.',
    ],
  },
};

export default function InspirationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const content = slug ? articleContent[slug] : undefined;

  if (!article || !content) return <Navigate to="/404" replace />;

  return (
    <>
      <PageMeta
        title={article.title}
        description={article.intro}
      />

      <section className="pt-32 lg:pt-40 section-padding pb-4">
        <div className="container-narrow">
          <div className="flex items-center gap-1.5 text-sm text-softgray-400 mb-4">
            <Clock className="w-4 h-4" />
            {article.readTime} leestijd
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-softgray-600">{article.intro}</p>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: 'Inspiratie', href: '/inspiratie' },
          { label: article.title },
        ]}
      />

      <section className="section-padding py-8">
        <div className="container-narrow">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-10">
            <img src={article.image} alt={article.imageAlt} className="w-full h-full object-cover" />
          </div>
          <article className="prose-custom">
            {content.body.map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2
                    key={i}
                    className="font-display text-xl lg:text-2xl font-semibold text-purple-800 mt-10 mb-4"
                  >
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-softgray-600 leading-relaxed mb-4">
                  {block}
                </p>
              );
            })}
          </article>

          <div className="mt-12 pt-8 border-t border-softgray-200 flex flex-col sm:flex-row gap-3">
            <Link to="/afspraak-maken" className="btn-primary inline-flex items-center gap-2">
              Plan een showroomafspraak <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/inspiratie" className="btn-secondary inline-flex items-center gap-2">
              Meer inspiratie
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="warm" />
    </>
  );
}
