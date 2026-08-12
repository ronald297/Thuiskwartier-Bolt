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
    image: 'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Stel dat plannen bespreekt met adviseur',
    readTime: '5 min',
  },
  {
    slug: 'keuken-badkamer-vloer-afstemmen',
    title: 'Keuken, badkamer en vloer op elkaar afstemmen',
    intro: 'Als je meerdere ruimtes tegelijk aanpakt, wil je dat het totaalplaatje klopt. Zo pak je dat aan.',
    image: 'https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Interieur met op elkaar afgestemde materialen',
    readTime: '6 min',
  },
  {
    slug: 'pvc-of-tegels',
    title: 'PVC of tegels: wat past beter bij jouw woning?',
    intro: 'Beide opties hebben sterke punten. We helpen je de juiste keuze maken op basis van je situatie.',
    image: 'https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Materiaalsamples van PVC en tegels',
    readTime: '7 min',
  },
];
