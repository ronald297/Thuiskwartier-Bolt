export interface ProductPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  features: string[];
  brands: string[];
  faq: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
  whyTitle: string;
  whyItems: string[];
}

export const productPages: Record<string, ProductPage> = {
  keukens: {
    slug: 'keukens',
    title: 'Keukens',
    metaTitle: 'Keukens in Urk en omgeving',
    metaDescription: 'Keukens die passen bij je woning en je manier van leven. Persoonlijk advies, montage mogelijk. Bezoek onze showroom in Urk.',
    heroImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Moderne keuken met natuurlijk licht en warme materialen',
    intro: 'Een keuken moet mooi zijn, maar vooral kloppen met hoe je leeft. In onze showroom helpen we je keuzes maken in opstelling, stijl, werkblad, apparatuur en afwerking. Met montage als je dat wilt.',
    features: [
      'Advies over indeling en opstelling',
      'Keuze in stijlen, van modern tot landelijk',
      'Werkbladen in composiet, natuursteen of hout',
      'Apparatuur van topmerken',
      'Afstemming op vloer en interieur',
      'Montage door vakmensen mogelijk',
    ],
    brands: ['Nobilia', 'Ballerina', 'Siemens', 'Bosch', 'AEG', 'Electrolux', 'ATAG', 'Bora', 'Quooker', 'Dekker Zevenhuizen', 'Montapanel'],
    faq: [
      {
        question: 'Wat kost een keuken bij Thuiskwartier?',
        answer: 'De prijs van een keuken hangt af van de indeling, materialen, apparatuur en montage. Daarom geven we liever goed advies dan een snelle vanafprijs. In de showroom kijken we samen wat past bij jouw plannen en budget.',
      },
      {
        question: 'Kunnen jullie ook de montage verzorgen?',
        answer: 'Ja, montage is mogelijk. Je kiest zelf of je de keuken door ons laat plaatsen of dat je dit zelf regelt.',
      },
      {
        question: 'Hoelang duurt het traject van afspraak tot keuken?',
        answer: 'Dat verschilt per project. Gemiddeld duurt het traject van eerste afspraak tot oplevering enkele weken tot een paar maanden, afhankelijk van de levertijden en planning.',
      },
      {
        question: 'Kan ik alleen voor een keuken terecht?',
        answer: 'Zeker. Je kunt bij ons terecht voor alleen een keuken, maar ook voor een keuken in combinatie met een vloer, badkamer of maatwerkkasten.',
      },
    ],
    relatedLinks: [
      { label: 'PVC-vloeren', href: '/pvc-vloeren' },
      { label: 'Tegels', href: '/tegels' },
      { label: 'Maatwerkkasten', href: '/maatwerkkasten' },
      { label: 'Projecten', href: '/projecten' },
    ],
    whyTitle: 'Waarom kiezen voor Thuiskwartier voor je keuken',
    whyItems: [
      'Persoonlijk advies dat past bij je woning en budget',
      'Keukens afstemmen op de rest van je interieur',
      'Montage door vakmensen mogelijk',
      'Garantie en nazorg na oplevering',
    ],
  },
  badkamers: {
    slug: 'badkamers',
    title: 'Badkamers',
    metaTitle: 'Badkamers in Urk en omgeving',
    metaDescription: 'Van sanitair tot tegels, van kranen tot meubels. Persoonlijk advies en montage mogelijk. Bezoek onze showroom in Urk.',
    heroImage: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Moderne badkamer met grote tegels en rustige sfeer',
    intro: 'Een badkamer gebruik je elke dag. Dan wil je dat de indeling klopt, de materialen goed gekozen zijn en de uitvoering netjes geregeld wordt. In onze showroom helpen we je stap voor stap met keuzes voor sanitair, tegels, meubels, kranen en montage.',
    features: [
      'Sanitair van sterke merken',
      'Tegels voor wand en vloer',
      'Kranen en accessoires',
      'Badmeubels en spiegelkasten',
      'Douche en bad',
      'Montage en installatie mogelijk',
    ],
    brands: ['Hotbath', 'Primabad', 'Brauer', 'Xenz', 'Villeroy & Boch', 'Dansani', 'LoooX', 'hansgrohe', 'Lavigo'],
    faq: [
      {
        question: 'Wat kost een badkamer bij Thuiskwartier?',
        answer: 'De prijs van een badkamer hangt af van de afmetingen, het sanitair, de tegels en of je montage wilt. In de showroom bekijken we samen wat past bij je wensen en budget.',
      },
      {
        question: 'Verzorgen jullie ook de tegels voor de badkamer?',
        answer: 'Ja. Tegels zijn een belangrijk onderdeel van de badkamer en die kiezen we graag in samenhang met het sanitair en de kranen.',
      },
      {
        question: 'Hoe lang duurt een badkamerrenovatie?',
        answer: 'Een badkamerrenovatie duurt gemiddeld twee tot vier weken, afhankelijk van de omvang en de keuzes.',
      },
    ],
    relatedLinks: [
      { label: 'Tegels', href: '/tegels' },
      { label: 'Service', href: '/service' },
      { label: 'Projecten', href: '/projecten' },
      { label: 'Showroom in Urk', href: '/over-thuiskwartier/showroom-urk' },
    ],
    whyTitle: 'Waarom kiezen voor Thuiskwartier voor je badkamer',
    whyItems: [
      'Sanitair, tegels en meubels in samenhang gekozen',
      'Persoonlijk advies over indeling en materialen',
      'Montage en installatie mogelijk',
      'Garantie en nazorg na oplevering',
    ],
  },
  'pvc-vloeren': {
    slug: 'pvc-vloeren',
    title: 'PVC-vloeren',
    metaTitle: 'PVC-vloeren in Urk en omgeving',
    metaDescription: 'Sterke, comfortabele PVC-vloeren die passen bij je interieur. Visgraat, rechte plank en meer. Bezoek onze showroom in Urk.',
    heroImage: 'https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Woonkamer met PVC-vloer in warme houtkleur',
    intro: 'Een vloer bepaalt voor een groot deel de rust in je woning. Met PVC kies je voor een sterke, comfortabele vloer die past bij je interieur en dagelijks gebruik. In de showroom laten we je zien welke kleuren, patronen en afwerkingen passen bij jouw woning.',
    features: [
      'Visgraat en rechte plank',
      'Grote keuze in kleuren en structuren',
      'Onderhoudsvriendelijk',
      'Geschikt voor vloerverwarming',
      'Comfortabel en geluiddempend',
      'Montage mogelijk',
    ],
    brands: ['Zuiderzee Collectie', 'Floorlife', 'Ambiant', 'vtwonen'],
    faq: [
      {
        question: 'Wat is het verschil tussen PVC en laminaat?',
        answer: 'PVC is stiller, vochtbestendig en comfortabeler dan laminaat. Het is geschikt voor alle ruimtes, ook de keuken en badkamer.',
      },
      {
        question: 'Is PVC geschikt voor vloerverwarming?',
        answer: 'Ja, PVC geleidt warmte goed en is prima te combineren met vloerverwarming.',
      },
      {
        question: 'Kan ik PVC ook in de keuken leggen?',
        answer: 'Zeker. PVC is vochtbestendig en onderhoudsvriendelijk, waardoor het prima geschikt is voor de keuken.',
      },
    ],
    relatedLinks: [
      { label: 'Keukens', href: '/keukens' },
      { label: 'Tegels', href: '/tegels' },
      { label: 'Projecten', href: '/projecten' },
      { label: 'PVC of tegels?', href: '/inspiratie/pvc-of-tegels' },
    ],
    whyTitle: 'Waarom kiezen voor Thuiskwartier voor je PVC-vloer',
    whyItems: [
      'Materialen bekijken en voelen in de showroom',
      'Advies over kleur en patroon passend bij je interieur',
      'Afstemming met keuken en badkamer mogelijk',
      'Montage door vakmensen mogelijk',
    ],
  },
  tegels: {
    slug: 'tegels',
    title: 'Tegels',
    metaTitle: 'Tegels in Urk en omgeving',
    metaDescription: 'Tegels voor badkamer, toilet, wand en vloer. Advies over formaat, structuur en combinaties. Bezoek onze showroom in Urk.',
    heroImage: 'https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Tegelwand in badkamer met warme kleurschakeringen',
    intro: 'Tegels kies je niet alleen op kleur. Formaat, structuur, voeg, onderhoud en combinatie met de rest van de ruimte maken veel verschil. In onze showroom helpen we je materialen kiezen die mooi blijven en passen bij je badkamer, toilet, wand of vloer.',
    features: [
      'Wand- en vloertegels',
      'Groot formaat en mozaiek',
      'Natuursteen en keramiek',
      'Betonlook, houtlook en marmer',
      'Advies over voegen en onderhoud',
      'Passend bij sanitair en kranen',
    ],
    brands: ['Cotto d\'Este', 'Ergon', 'Provenza', 'Sant\'Agostino', 'The Mosaic Factory', 'CottoceramiX', 'Coem', 'EdimaxAstor', 'Emil'],
    faq: [
      {
        question: 'Welk formaat tegel past bij mijn badkamer?',
        answer: 'Dat hangt af van de grootte van de ruimte en de gewenste uitstraling. Grote tegels geven rust, kleinere formaten bieden meer mogelijkheden in patronen.',
      },
      {
        question: 'Kunnen jullie ook tegels voor de woonkamer adviseren?',
        answer: 'Ja. We adviseren over tegels voor badkamer, toilet, keuken, hal en woonkamer. We kijken naar gebruik, onderhoud en aansluiting op de rest van het interieur.',
      },
    ],
    relatedLinks: [
      { label: 'Badkamers', href: '/badkamers' },
      { label: 'PVC-vloeren', href: '/pvc-vloeren' },
      { label: 'Projecten', href: '/projecten' },
      { label: 'Service', href: '/service' },
    ],
    whyTitle: 'Waarom kiezen voor Thuiskwartier voor je tegels',
    whyItems: [
      'Ruime keuze in de showroom',
      'Advies over formaat, kleur en combinatie',
      'Tegels in samenhang met sanitair kiezen',
      'Oorspronkelijk gestart als tegelspecialist',
    ],
  },
  maatwerkkasten: {
    slug: 'maatwerkkasten',
    title: 'Maatwerkkasten',
    metaTitle: 'Maatwerkkasten in Urk en omgeving',
    metaDescription: 'Maatwerkkasten die passen bij je ruimte en interieur. Voor bijkeuken, slaapkamer, hal of woonkamer. Bezoek onze showroom in Urk.',
    heroImage: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Maatwerkkasten in een lichte, moderne ruimte',
    intro: 'Soms maakt juist maatwerk het verschil. Een kast die past bij de ruimte, de indeling en de stijl van je woning zorgt voor rust en overzicht. We denken graag mee over maatwerkkasten die praktisch zijn en mooi aansluiten op de rest van je interieur.',
    features: [
      'Op maat gemaakt voor jouw ruimte',
      'Schuifdeuren, draaikasten en inbouwkasten',
      'Bijkeuken, slaapkamer, hal en woonkamer',
      'Passend bij je keuken of interieur',
      'Slimme indeling voor opbergruimte',
      'Montage mogelijk',
    ],
    brands: [],
    faq: [
      {
        question: 'Waar kunnen maatwerkkasten geplaatst worden?',
        answer: 'In de bijkeuken, slaapkamer, hal, woonkamer of onder een schuin dak. Overal waar standaard kasten niet passen, kan maatwerk een oplossing zijn.',
      },
      {
        question: 'Kan de stijl van de kast aansluiten op mijn keuken?',
        answer: 'Ja. We stemmen materialen, kleuren en afwerking af op de rest van je interieur, zodat het geheel klopt.',
      },
    ],
    relatedLinks: [
      { label: 'Keukens', href: '/keukens' },
      { label: 'Projecten', href: '/projecten' },
      { label: 'Showroom in Urk', href: '/over-thuiskwartier/showroom-urk' },
    ],
    whyTitle: 'Waarom kiezen voor Thuiskwartier voor je maatwerkkasten',
    whyItems: [
      'Maatwerk dat past bij je ruimte en interieur',
      'Afstemming op keuken en andere ruimtes',
      'Praktische indeling op maat',
      'Montage mogelijk',
    ],
  },
};
