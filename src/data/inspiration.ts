export interface Article {
  slug: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    slug: 'showroomafspraak-voorbereiden',
    title: 'Zo bereid je je showroomafspraak goed voor',
    intro: 'Een goede voorbereiding maakt je showroombezoek een stuk waardevoller. We delen een paar praktische tips.',
    image: '/images/inspiration/gesprek-in-showroom.png',
    imageAlt: 'Stel dat plannen bespreekt met adviseur',
    readTime: '5 min',
  },
  {
    slug: 'keuken-badkamer-vloer-afstemmen',
    title: 'Keuken, badkamer en vloer op elkaar afstemmen',
    intro: 'Als je meerdere ruimtes tegelijk aanpakt, wil je dat het totaalplaatje klopt. Zo pak je dat aan.',
    image: '/keuken-badkamer-vloer-op-elkaar-afstemmen.png',
    imageAlt: 'Interieur met op elkaar afgestemde materialen',
    readTime: '6 min',
  },
  {
    slug: 'pvc-of-tegels',
    title: 'PVC of tegels: wat past beter bij jouw woning?',
    intro: 'Beide opties hebben sterke punten. We helpen je de juiste keuze maken op basis van je situatie.',
    image: '/pvc-of-tegels.png',
    imageAlt: 'Materiaalsamples van PVC en tegels',
    readTime: '7 min',
  },
];
