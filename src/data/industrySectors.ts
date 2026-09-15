import sector01Img from '../assets/images/sectors/01-automotivo.png';
import sector02Img from '../assets/images/sectors/02-naval.jpg';
import sector03Img from '../assets/images/sectors/03-ferroviario.jpg';
import sector04Img from '../assets/images/sectors/04-robotica.jpg';
import sector05Img from '../assets/images/sectors/05-metalmecanico.jpg';
import sector06Img from '../assets/images/sectors/06-portuario.jpg';

export interface IndustrySector {
  id: number;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  products: string[];
  ctaText: string;
  ctaHref: string;
}

export const industrySectors: IndustrySector[] = [
  {
    id: 1,
    number: '01',
    name: 'AUTOMOTIVO',
    category: 'ENGENHARIA E INFRAESTRUTURA',
    description: 'Cabos, esteiras e componentes para linhas de produção onde precisão, movimento e continuidade são essenciais.',
    image: sector01Img,
    products: [
      'Cabos elétricos especiais',
      'Esteiras porta-cabos',
      'Proteção de cabos',
      'Periféricos para robótica',
    ],
    ctaText: 'EXPLORAR SOLUÇÕES',
    ctaHref: '#solucoes-automotivo',
  },
  {
    id: 2,
    number: '02',
    name: 'NAVAL E PETROQUÍMICO',
    category: 'ALTA PERFORMANCE',
    description: 'Soluções para aplicações industriais e ambientes extremos, incluindo embarcações, plataformas e operações offshore.',
    image: sector02Img,
    products: [
      'Cabos elétricos especiais',
      'Proteção de cabos',
      'Esteiras porta-cabos',
    ],
    ctaText: 'EXPLORAR SOLUÇÕES',
    ctaHref: '#solucoes-naval',
  },
  {
    id: 3,
    number: '03',
    name: 'FERROVIÁRIO',
    category: 'INOVAÇÃO TÉCNICA',
    description: 'Cabos e componentes de alta confiabilidade para metrôs, trens e locomotivas, com foco em segurança e desempenho.',
    image: sector03Img,
    products: [
      'Cabos elétricos especiais',
      'Proteção de cabos',
      'Esteiras porta-cabos',
    ],
    ctaText: 'EXPLORAR SOLUÇÕES',
    ctaHref: '#solucoes-ferroviario',
  },
  {
    id: 4,
    number: '04',
    name: 'ROBÓTICA',
    category: 'PRECISÃO EM MOVIMENTO',
    description: 'Tecnologias para robôs e cobots, com cabos especiais, proteção dinâmica e periféricos desenvolvidos para aplicações industriais de alta exigência.',
    image: sector04Img,
    products: [
      'Cabos elétricos especiais',
      'Proteção de cabos',
      'Periféricos para robótica',
    ],
    ctaText: 'EXPLORAR SOLUÇÕES',
    ctaHref: '#solucoes-robotica',
  },
  {
    id: 5,
    number: '05',
    name: 'METALMECÂNICO',
    category: 'MOVIMENTO CONTÍNUO',
    description: 'Soluções para máquinas, equipamentos e processos industriais que exigem proteção, flexibilidade e resistência em movimento.',
    image: sector05Img,
    products: [
      'Cabos elétricos especiais',
      'Esteiras porta-cabos',
      'Proteção de cabos',
    ],
    ctaText: 'EXPLORAR SOLUÇÕES',
    ctaHref: '#solucoes-metalmecanico',
  },
  {
    id: 6,
    number: '06',
    name: 'PORTUÁRIO',
    category: 'OPERAÇÕES DE ALTA EXIGÊNCIA',
    description: 'Cabos e sistemas de proteção para gruas, pontes rolantes, pórticos e equipamentos de movimentação de carga.',
    image: sector06Img,
    products: [
      'Cabos elétricos especiais',
      'Esteiras porta-cabos',
      'Proteção de cabos',
    ],
    ctaText: 'EXPLORAR SOLUÇÕES',
    ctaHref: '#solucoes-portuario',
  },
];
