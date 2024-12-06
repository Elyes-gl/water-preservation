import bodyImage from '../assets/images/human_body1.png';
import ocean1 from '../assets/images/ocean1.jpg';
import ocean3 from '../assets/images/ocean3.jpg';
import ocean4 from '../assets/images/ocean4.png';
import ocean5 from '../assets/images/ocean5.jpg';
import ocean6 from '../assets/images/ocean6.jpg';
import ocean7 from '../assets/images/ocean7.png';
import ocean8 from '../assets/images/ocean8.png';
import ocean9 from '../assets/images/ocean9.jpg';

export const humanBody = {
  image: bodyImage,
  organs: [
    {
      id: 'heart',
      name: 'Cœur (Pompe le sang)',
      position: { top: '45%', left: '52%' },
      oceanEquivalent: 'Courants marins',
      oceanImage: ocean1,
      description: 'Le cœur pompe le sang dans tout le corps, comme les courants marins transportent les nutriments à travers les océans.',
      text: 'De la même manière que les courants marins redistribuent la chaleur, l’oxygène et les nutriments dans les différents bassins océaniques, le cœur assure une circulation continue du sang, distribuant l’oxygène et les nutriments à chaque cellule du corps humain. Cette analogie met en évidence le rôle central de la circulation, qu’elle soit sanguine ou marine, dans le maintien de l’équilibre et de la santé de l’ensemble du système.'
    },
    {
      id: 'lungs',
      name: 'Poumons (Oxygénation)',
      position: { top: '45%', left: '43%' },
      oceanEquivalent: 'Phytoplancton',
      oceanImage: ocean4,
      description: 'Les poumons oxygènent le sang, tout comme le phytoplancton produit de l’oxygène pour la planète.',
      text: 'Les poumons, à l’instar du phytoplancton qui prospère dans les eaux de surface, sont essentiels à la production et l’échange d’oxygène. Tandis que le phytoplancton libère de l’oxygène dans l’atmosphère et soutient les chaînes alimentaires marines, les poumons assurent l’oxygénation du sang, permettant aux organes et aux tissus de fonctionner de manière optimale. Cette analogie souligne l’importance de l’oxygène, fluide vital partagé entre les milieux terrestre et marin.'
    },
    {
      id: 'skeleton',
      name: 'Squelette (Structure)',
      position: { top: '15%', left: '47%' },
      oceanEquivalent: 'Relief marin',
      oceanImage: ocean9,
      description: 'Le squelette assure la structure du corps, comme le relief marin façonne les fonds océaniques.',
      text: 'Le squelette humain, avec sa solide charpente osseuse, rappelle le relief du fond océanique qui soutient les écosystèmes marins. De la même manière que les montagnes sous-marines, dorsales et canyons façonnent les courants et la distribution des habitats sous l’eau, notre squelette définit la forme du corps, influence la posture, la mobilité et protège nos organes internes.'
    },
    {
      id: 'skin',
      name: 'Peau (Protection)',
      position: { top: '35%', left: '35%' },
      oceanEquivalent: 'Surface océanique',
      oceanImage: ocean5,
      description: 'La peau protège le corps, tout comme la surface de l’océan interagit avec l’atmosphère.',
      text: 'La peau agit comme une barrière protectrice contre les agressions extérieures, à l’image de la surface de l’océan qui sert d’interface dynamique entre l’atmosphère et la vie marine. Tout comme la surface océanique régule les échanges de chaleur, de gaz et de particules, la peau régule la température corporelle, la transpiration et protège contre les micro-organismes, assurant ainsi l’équilibre et la préservation de notre organisme.'
    },
    {
      id: 'nervous_system',
      name: 'Système nerveux (Communication)',
      position: { top: '6%', left: '50%' },
      oceanEquivalent: 'Circulation des courants',
      oceanImage: ocean7,
      description: 'Le système nerveux facilite la communication, tout comme la circulation des courants marins régule le climat mondial.',
      text: 'Le système nerveux, véritable réseau de communication interne, peut être comparé à la circulation globale des courants marins. De la même façon que ces flux aquatiques relient les océans, redistribuant chaleur, nutriments et énergie, les nerfs et le cerveau transmettent des informations à travers le corps, coordonnant les fonctions vitales, les réflexes et les perceptions sensorielles qui assurent la cohérence du système.'
    },
    {
      id: 'blood',
      name: 'Sang (Transport des nutriments)',
      position: { top: '39%', left: '52%' },
      oceanEquivalent: 'Eau océanique',
      oceanImage: ocean6,
      description: 'Le sang transporte les nutriments, de la même façon que l’eau océanique transporte nutriments et chaleur.',
      text: 'Le sang, fluide vital, assure le transport d’oxygène, de nutriments et d’hormones dans l’ensemble de l’organisme, à l’image de l’eau océanique qui diffuse chaleur, minéraux et vie dans le monde marin. Tout comme les courants et les vagues acheminent les éléments nécessaires au développement des écosystèmes marins, le sang soutient la croissance, la régénération et la santé globale du corps humain.'
    },
    {
      id: 'liver_kidneys',
      name: 'Foie/Reins (Filtration)',
      position: { top: '55%', left: '45%' },
      oceanEquivalent: 'Mangroves/Estuaires',
      oceanImage: ocean8,
      description: 'Le foie et les reins filtrent les déchets, tout comme les mangroves et les estuaires filtrent les polluants.',
      text: 'Le foie et les reins épurent et filtrent le sang, éliminant déchets et toxines, tout comme les mangroves et les estuaires filtrent les sédiments et polluants, préservant la qualité de l’eau côtière. Ainsi, ces écosystèmes naturels et nos organes de filtration jouent un rôle essentiel dans le maintien de conditions saines, garantes d’un équilibre vital pour l’ensemble du système.'
    },
    {
      id: 'stomach',
      name: 'Estomac/Intestins (Digestion)',
      position: { top: '60%', left: '55%' },
      oceanEquivalent: 'Zones marines riches',
      oceanImage: ocean3,
      description: 'L’estomac et les intestins digèrent les aliments, tout comme les zones marines riches en nutriments soutiennent les écosystèmes marins.',
      text: 'L’estomac et les intestins transforment les aliments en nutriments essentiels, tels les zones océaniques riches en nutriments (comme les upwellings) qui soutiennent la vie marine. Comme ces régions fertilisent l’océan en favorisant la croissance du plancton, base de la chaîne alimentaire sous-marine, notre système digestif convertit les aliments en énergie et substances vitales, nourrissant ainsi chaque cellule du corps.'
    }
  ]
};
