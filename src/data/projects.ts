export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  categories: string[];
  image: string;
  imageAlt: string;
  gallery?: ProjectImage[];
  intro: string;
  clientWish: string;
  choices: string;
  result: string;
  brands?: string[];
  quote?: { text: string; name: string };
}

export const projects: Project[] = [
  {
    slug: 'compleet-ingerichte-woning-zeeheldenwijk-urk',
    title: 'Compleet ingerichte woning Zeeheldenwijk Urk',
    location: 'Urk',
    categories: ['Keukens', 'Badkamers', 'Tegels', 'Maatwerkkasten'],
    image: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-01.jpeg',
    imageAlt: 'Compleet ingerichte woning in de Zeeheldenwijk te Urk',
    gallery: [
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-01.jpeg', alt: 'Overzicht woning Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-02.jpeg', alt: 'Keuken Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-03.jpeg', alt: 'Keukendetail Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-04.jpeg', alt: 'Badkamer Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-05.jpeg', alt: 'Badkamerdetail Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-06.jpeg', alt: 'Toilet Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-07.jpeg', alt: 'Tegelvloer Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-08.jpeg', alt: 'Maatwerkkast Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-09.jpeg', alt: 'Interieurdetail Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-10.jpeg', alt: 'Woonruimte Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-12.jpeg', alt: 'Detail afwerking Zeeheldenwijk Urk' },
      { src: '/projecten/compleet-ingerichte-woning-zeeheldenwijk-urk/foto-13.jpeg', alt: 'Eindresultaat Zeeheldenwijk Urk' },
    ],
    intro: 'Een compleet ingerichte nieuwbouwwoning in de Zeeheldenwijk te Urk. Voorzien van keuken, badkamer, toilet, tegelvloer en maatwerkkasten.',
    clientWish: 'Meer informatie volgt.',
    choices: 'Meer informatie volgt.',
    result: 'Meer informatie volgt.',
  },
  {
    slug: 'keuken-urk',
    title: 'Keuken in Urk',
    location: 'Urk',
    categories: ['Keukens'],
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Moderne keuken met warm hout en strak werkblad',
    intro: 'Een complete keukenrenovatie in een jaren-90 woning. De klant zocht een rustige, moderne keuken die past bij het gezinsleven.',
    clientWish: 'De bestaande keuken was verouderd en te klein voor het gezin. De wens was een ruime, lichte keuken met voldoende werkruimte en opbergruimte. Belangrijk: een kookeiland waar het gezin samen kon koken.',
    choices: 'Gekozen voor een Nobilia keuken in mat wit met eiken accenten. Composiet werkblad in een warme grijstint. Siemens apparatuur inclusief inductiekookplaat en oven. Quooker voor direct kokend water.',
    result: 'Een rustige, functionele keuken die past bij het huis en het dagelijks gebruik. De klant is blij met de indeling en de kwaliteit van de materialen.',
    brands: ['Nobilia', 'Siemens', 'Quooker'],
    quote: {
      text: 'We koken nu echt met plezier. De keuken voelt als het hart van ons huis.',
      name: 'Familie De Vries',
    },
  },
  {
    slug: 'badkamer-emmeloord',
    title: 'Badkamer in Emmeloord',
    location: 'Emmeloord',
    categories: ['Badkamers', 'Tegels'],
    image: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Moderne badkamer met grote tegels en inloopdouche',
    intro: 'Een complete badkamerrenovatie met aandacht voor comfort en rust. Tegels en sanitair in samenhang gekozen.',
    clientWish: 'De oude badkamer was gedateerd en de indeling was onpraktisch. De wens was een ruimtelijk gevoel, een inloopdouche en een badmeubel met voldoende opbergruimte. Onderhoudsvriendelijke materialen waren belangrijk.',
    choices: 'Grote formaat tegels in een warme betonlook voor wand en vloer. Hotbath kranen in geborsteld messing. Primabad badmeubel met dubbele wastafel. Inloopdouche met helder glas.',
    result: 'Een badkamer die rust uitstraalt en dagelijks fijn in gebruik is. De materialen sluiten mooi op elkaar aan.',
    brands: ['Hotbath', 'Primabad'],
    quote: {
      text: 'Het voelt als een hotel, maar dan thuis. Precies wat we wilden.',
      name: 'Mark en Esther',
    },
  },
  {
    slug: 'keuken-en-pvc-vloer-kampen',
    title: 'Keuken en PVC-vloer in Kampen',
    location: 'Kampen',
    categories: ['Keukens', 'PVC-vloeren'],
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Keuken met visgraat PVC-vloer in warme tint',
    intro: 'Keuken en PVC-vloer in samenhang gekozen en geplaatst. Door alles bij Thuiskwartier te regelen, paste alles direct bij elkaar.',
    clientWish: 'Na de aankoop van een nieuwe woning wilde de klant de keuken en woonkamervloer in een keer aanpakken. De wens was een warme, samenhangende uitstraling zonder zelf achter verschillende leveranciers aan te moeten.',
    choices: 'Ballerina keuken in een donkere antraciet tint met natuurstenen werkblad. PVC-vloer in visgraatpatroon van de Zuiderzee Collectie, warm eiken. Keuken en vloer op elkaar afgestemd in kleur en sfeer.',
    result: 'Een woning die direct af voelt. De keuken en vloer versterken elkaar en de klant hoefde maar bij een partij aan te kloppen.',
    brands: ['Ballerina', 'Zuiderzee Collectie'],
  },
];
