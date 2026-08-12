export interface Review {
  name: string;
  text: string;
  rating: number;
  source: string;
}

export const reviews: Review[] = [
  {
    name: 'Familie De Vries',
    text: 'Heel prettig geholpen in de showroom. Rustig advies, geen druk om te kopen. Onze keuken is precies geworden wat we voor ogen hadden.',
    rating: 5,
    source: 'Google Review',
  },
  {
    name: 'Mark en Esther',
    text: 'We kwamen voor een badkamer en zijn uiteindelijk ook de PVC-vloer hier gaan doen. Fijn dat alles onder een dak kan. Montage netjes geregeld.',
    rating: 5,
    source: 'Google Review',
  },
  {
    name: 'Jannie B.',
    text: 'Goede ervaring met Thuiskwartier. Nuchter advies, eerlijk over wat wel en niet past bij ons budget. Aanrader voor iedereen in de regio.',
    rating: 5,
    source: 'Google Review',
  },
  {
    name: 'Peter van den Berg',
    text: 'Van begin tot eind goed begeleid. De tegels in onze badkamer zijn prachtig geworden. Ook na oplevering stonden ze voor ons klaar.',
    rating: 5,
    source: 'Google Review',
  },
  {
    name: 'Familie Korf',
    text: 'Fijne showroom, alles kun je zien en voelen. Het advies was persoonlijk en niet opdringerig. Wij zijn erg blij met het resultaat.',
    rating: 5,
    source: 'Google Review',
  },
];
