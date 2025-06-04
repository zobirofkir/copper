import SliderOne from '../assets/slider/slide_1.jpg';
import SliderTwo from '../assets/slider/slide_2.jpg';
import SliderThree from '../assets/slider/slide_3.jpg';
import SliderFour from '../assets/slider/slide_4.jpg';

interface SlideData {
  id: number
  title: string
  description: string
  image: string
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: 'Excellence en Cuivre',
    description: 'Solutions en cuivre premium avec une qualité et une durabilité inégalées',
    image: SliderOne
  },
  {
    id: 2,
    title: 'Cuivre Durable',
    description: 'Approvisionnement et traitement du cuivre écologiquement responsables',
    image: SliderTwo
  },
  {
    id: 3,
    title: 'Innovation en Cuivre',
    description: 'Applications avancées du cuivre pour les besoins industriels modernes',
    image: SliderThree
  },
  {
    id: 4,
    title: 'Artisanat du Cuivre',
    description: 'Produits en cuivre de qualité artisanale avec une finition exceptionnelle',
    image: SliderFour
  }
]