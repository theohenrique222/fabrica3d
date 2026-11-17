import type { Project, ProjectCategory } from '@/types'

export const projectCategories: Array<ProjectCategory | 'todos'> = [
  'todos',
  'protótipo',
  'reposição',
  'personalizado',
]

export const projects: Project[] = [
  {
    slug: 'suporte-monitor',
    title: 'Suporte para monitor',
    category: 'personalizado',
    material: 'PETG',
    description:
      'Suporte com regulagem de altura para deixar o monitor na posição certa da bancada.',
    image: '/projects/suporte-monitor.svg',
    imageAlt: 'Desenho técnico de um suporte de mesa para monitor',
    layerHeight: '0,2 mm',
  },
  {
    slug: 'engrenagem-reposicao',
    title: 'Engrenagem de reposição',
    category: 'reposição',
    material: 'PLA',
    description:
      'Peça substituta para uma engrenagem desgastada de equipamento de escritório.',
    image: '/projects/engrenagem-reposicao.svg',
    imageAlt: 'Desenho técnico de uma engrenagem impressa em 3D',
    layerHeight: '0,12 mm',
  },
  {
    slug: 'prototipo-carcaca',
    title: 'Protótipo de carcaça',
    category: 'protótipo',
    material: 'PLA',
    description:
      'Carcaça para testar o encaixe de componentes eletrônicos antes da versão final.',
    image: '/projects/prototipo-carcaca.svg',
    imageAlt: 'Desenho técnico de uma carcaça para componentes eletrônicos',
    layerHeight: '0,2 mm',
  },
  {
    slug: 'vaso-geometrico',
    title: 'Vaso geométrico',
    category: 'personalizado',
    material: 'PLA',
    description:
      'Vaso decorativo de paredes finas com acabamento fosco, impresso em camadas visíveis.',
    image: '/projects/vaso-geometrico.svg',
    imageAlt: 'Desenho técnico de um vaso geométrico impresso em camadas',
    layerHeight: '0,16 mm',
  },
  {
    slug: 'guia-cabos',
    title: 'Guia de cabos',
    category: 'personalizado',
    material: 'TPU',
    description:
      'Organizador flexível que prende cabos na borda da mesa sem marcar a superfície.',
    image: '/projects/guia-cabos.svg',
    imageAlt: 'Desenho técnico de um guia de cabos flexível',
    layerHeight: '0,2 mm',
  },
  {
    slug: 'suporte-sensor',
    title: 'Suporte para sensor',
    category: 'protótipo',
    material: 'PETG',
    description:
      'Base sob medida para fixar um sensor em bancada de testes e ajustar o ângulo.',
    image: '/projects/suporte-sensor.svg',
    imageAlt: 'Desenho técnico de um suporte para sensor de bancada',
    layerHeight: '0,2 mm',
  },
]
