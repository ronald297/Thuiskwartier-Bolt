export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'Ronald van Biljouw',
    role: 'Mede-eigenaar',
    description: 'Ronald bewaakt graag het totaalplaatje en zorgt dat keuzes praktisch, mooi en logisch blijven.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Simon van Biljouw',
    role: 'Mede-eigenaar',
    description: 'Simon kent elk materiaal en helpt klanten met advies dat verder kijkt dan alleen het product.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Marieke Hoekstra',
    role: 'Adviseur keukens & badkamers',
    description: 'Marieke luistert goed en denkt mee over indelingen die passen bij hoe je leeft.',
    image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Jan de Boer',
    role: 'Projectbegeleider',
    description: 'Jan houdt overzicht over de planning en zorgt dat montage soepel verloopt.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];
