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
    slug: 'badkamer-vloeren-tuinkamer-zwembad-woning-urk',
    title: 'Badkamer, vloeren, tuinkamer en zwembad in woning Urk',
    location: 'Urk',
    categories: ['Badkamers', 'Tegels', 'Zwembad'],
    image: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-01-badkamer.jpeg',
    imageAlt: 'Badkamer met gemarmerde tegels in karakteristieke woning Urk',
    gallery: [
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-01-badkamer.jpeg', alt: 'Badkamer met gemarmerde tegels' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-02-badkamer.jpeg', alt: 'Badkamer wandtegels hoogglans' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-03-badkamer.jpeg', alt: 'Badkamer mozaïek detail' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-04-badkamer.jpeg', alt: 'Badkamer overzicht' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-05-badkamer.jpeg', alt: 'Badkamer inloopdouche' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-06-badkamer.jpeg', alt: 'Badkamer wastafel' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-07-badkamer.jpeg', alt: 'Badkamer afwerking' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-08-vloer.jpeg', alt: 'Waaltjesvloer in visgraatverband' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-09-vloer.jpeg', alt: 'Waaltjesvloer detail met bies' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-10-vloer.jpeg', alt: 'Keramische tegels hardsteenlook woonkamer' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-11-vloer.jpeg', alt: 'Vloertegels woonkamer overzicht' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-12-vloer.jpeg', alt: 'Vloertegels keuken' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-13-vloer.jpeg', alt: 'Vloer overgang detail' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-14-vloer.jpeg', alt: 'Vloertegels hal' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-15-keuken.jpeg', alt: 'Keuken met hardsteenlook vloer' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-16-tuinkamer.jpeg', alt: 'Tuinkamer met Castelo-vloer' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-17-tuinkamer.jpeg', alt: 'Tuinkamer overzicht' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-18-tuinkamer.jpeg', alt: 'Tuinkamer detail' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-19-zwembad.jpeg', alt: 'Zwembad met grootformaat tegels' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-20-zwembad.jpeg', alt: 'Zwembad tegels en randen' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-21-zwembad.jpeg', alt: 'Zwembad overzicht' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-22-zwembad.jpeg', alt: 'Zwembad afwerking' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-23-stonepanels.jpeg', alt: 'Stone panels bij zwembad' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-24-stonepanels.jpeg', alt: 'Stone panels detail' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-25-douche.jpeg', alt: 'Douche bij zwembad' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-26-zwembad.jpeg', alt: 'Zwembadruimte totaaloverzicht' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-27-toilet.jpeg', alt: 'Toilet met tegelwerk' },
      { src: '/projecten/badkamer-vloeren-tuinkamer-zwembad-woning-urk/foto-28-toilet.jpeg', alt: 'Toilet detail' },
    ],
    intro: 'Voor de invulling van deze nieuw gebouwde karakteristieke woning in Urk is Thuiskwartier gevraagd voor het realiseren van de badkamer, de toiletten, de verschillende vloeren en de tegels rondom het zwembad.',
    clientWish: 'De opdrachtgever had al een duidelijk beeld van de tegels die zij in de woning wilde toepassen. Aan Thuiskwartier de taak om hiervoor een passend voorstel te maken voor zowel de levering als de montage. Op basis van die keuzes hebben we de verschillende tegelwerken verder uitgewerkt en gerealiseerd, volledig afgestemd op de wensen van de opdrachtgever.',
    choices: 'In deze woning is bewust gekozen voor verschillende materialen en legpatronen, passend bij de sfeer van iedere ruimte.\n\nIn de badkamer zijn tegels met een gemarmerde uitstraling toegepast. Op de vloer ligt een matte variant, terwijl op de wanden hoogglans tegels zijn gebruikt. Het mozaïek vormt een mooi accent en geeft de badkamer extra karakter.\n\nOok voor de overige ruimtes zijn verschillende tegelvloeren gekozen. In de gang ligt een waaltjesvloer in visgraatverband, afgewerkt met een bies van dezelfde waaltjes. In de woonkamer en keuken is gekozen voor keramische tegels met een hardsteenlook in het formaat 60 x 60 cm, met verouderde randen.\n\nDe tuinkamer kreeg een karakteristieke Castelo-vloer. Rondom het zwembad zijn grootformaat tegels met een grijze marmerlook toegepast. Dezelfde tegels zijn gebruikt voor de zwembadranden. Aan de wanden zijn stone panels aangebracht en ook de aangrenzende douche is volledig betegeld.',
    result: 'Hoewel iedere ruimte zijn eigen uitstraling heeft, vormen de verschillende materialen samen één geheel. De warme marmerlook in de badkamer, het karakter van de waaltjes en Castelo-vloer en de rustige hardsteenlook in de woonkamer en keuken geven iedere ruimte een eigen sfeer, zonder dat de samenhang verloren gaat.\n\nOok rondom het zwembad komen materiaal en afwerking mooi bij elkaar. Door dezelfde tegel door te zetten in de zwembadranden en te combineren met de stone panels ontstaat een rustig en verzorgd geheel.\n\nThuiskwartier verzorgde bij dit project zowel de levering als de montage. Daardoor konden de verschillende tegelwerken en afwerkingen als één geheel worden uitgevoerd.',
    quote: {
      text: 'Wat we vooral fijn vonden, is dat er echt werd meegedacht over hoe de verschillende ruimtes bij elkaar konden passen. Door de combinatie van materialen heeft iedere ruimte een eigen uitstraling gekregen, maar voelt het huis toch als één geheel. Ook de uitvoering is netjes en zorgvuldig gedaan.',
      name: 'Familie H. uit Urk',
    },
  },
  {
    slug: 'appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet',
    title: 'Appartement in Urk voorzien van tegelvloer, keuken, badkamer en toilet',
    location: 'Urk',
    categories: ['Tegels', 'Wandpanelen', 'Keukens', 'Badkamers', 'Toilet'],
    image: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-01-vloer.jpeg',
    imageAlt: 'Appartement in Urk voorzien van tegelvloer, keuken, badkamer en toilet',
    gallery: [
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-01-vloer.jpeg', alt: 'Tegelvloer appartement overzicht' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-02-vloer.jpeg', alt: 'Tegelvloer leisteenlook detail' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-03-vloer.jpeg', alt: 'Tegelvloer woonkamer' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-04-vloer-keuken.jpeg', alt: 'Tegelvloer richting keuken' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-05-vloer.jpeg', alt: 'Tegelvloer detail' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-06-vloer.jpeg', alt: 'Tegelvloer gang' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-07-vloer.jpeg', alt: 'Tegelvloer afwerking' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-08-keuken.jpeg', alt: 'Keuken met houtlook fronten' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-09-keuken.jpeg', alt: 'Keuken werkblad marmerlook' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-10-keuken.jpeg', alt: 'Keuken overzicht' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-11-keuken.jpeg', alt: 'Keuken wandplanken' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-12-keuken.jpeg', alt: 'Keuken detail' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-13-keuken.jpeg', alt: 'Keuken afwerking' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-14-toilet.jpeg', alt: 'Toilet met wandpanelen' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-15-toilet.jpeg', alt: 'Toilet detail' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-16-badkamer.jpeg', alt: 'Badkamer met HSK-panelen' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-17-badkamer.jpeg', alt: 'Badkamer marmerlook panelen' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-18-badkamer.jpeg', alt: 'Badkamer overzicht' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-19-badkamer.jpeg', alt: 'Badkamer detail' },
      { src: '/projecten/appartement-urk-voorzien-van-tegelvloer-keuken-badkamer-toilet/foto-20-badkamer.jpeg', alt: 'Badkamer afwerking' },
    ],
    intro: 'Van een eengezinswoning naar een comfortabel appartement waar alles gelijkvloers is. Voor deze verhuizing mocht Thuiskwartier meerdere onderdelen van de nieuwe woning verzorgen. Van de vloer en het sanitair tot de keuken: alles is op elkaar afgestemd om een lichte, warme en rustige basis te creëren voor deze nieuwe woonfase.',
    clientWish: 'De opdrachtgever verruilde een eengezinswoning voor een appartement waar alles gelijkvloers is. Een nieuwe woonfase, met de wens om het appartement direct goed en als één geheel in te richten.\nVoor de vloer, badkamer, het toilet en de keuken kwam de opdrachtgever bij Thuiskwartier terecht. Wij mochten deze onderdelen leveren én realiseren, zodat de verschillende ruimtes mooi op elkaar konden worden afgestemd.',
    choices: 'Voor de vloer is gekozen voor een ivoorkleurige tegel met een leisteenlook. De rustige kleur en natuurlijke uitstraling vormen een mooie basis voor het hele appartement.\n\nIn de badkamer zijn hoogglans HSK-panelen met een marmerlook toegepast. Dezelfde panelen zijn teruggebracht in het toilet, waardoor beide ruimtes duidelijk bij elkaar horen.\n\nOok in de keuken is gekozen voor een combinatie van warme en natuurlijke materialen. De houtlook fronten geven de keuken een warme uitstraling, terwijl het werkblad met marmerlook mooi aansluit bij de materialen die elders in het appartement zijn gebruikt.',
    result: 'Door de lichte vloer heeft het appartement een frisse en open uitstraling gekregen, zonder dat het kil of steriel aanvoelt. De warme tinten in de rest van het interieur zorgen juist voor een gezellige en uitnodigende sfeer.\n\nIn de badkamer geven de hoogglans wandpanelen met marmerlook de ruimte een luxe uitstraling. Datzelfde materiaal is ook in het toilet toegepast, waardoor beide ruimtes mooi op elkaar aansluiten.\n\nDe keuken brengt extra warmte in het appartement door de houtlook fronten. Het lichte werkblad vormt daarbij een stijlvol contrast. Ook de wandplanken zijn uitgevoerd in hetzelfde materiaal als de keukenfronten, waardoor het geheel rustig en compleet oogt.\n\nHet resultaat is een lichte, warme woning waarin vloer, badkamer, toilet en keuken duidelijk als één geheel zijn ontworpen.',
    quote: {
      text: 'We wilden in ons nieuwe appartement meteen alles goed doen. Het is fijn dat vloer, badkamer, toilet en keuken zo mooi op elkaar aansluiten. Het is licht en modern geworden, maar vooral ook warm en gezellig. Precies zoals we het voor ogen hadden.',
      name: 'Familie C. uit Urk',
    },
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
