import type { Capability, Material } from '@/types'

export const materials: Material[] = [
  {
    name: 'PLA',
    description:
      'Bom para peças visuais, protótipos e decoração. Rígido, leve e fácil de imprimir.',
  },
  {
    name: 'PETG',
    description:
      'Indicado para uso funcional: resiste melhor a impacto e ao calor do dia a dia.',
  },
  {
    name: 'TPU',
    description:
      'Flexível e emborrachado. Ideal para guias, capas, pés de apoio e amortecedores.',
  },
  {
    name: 'ABS',
    description:
      'Peças técnicas com maior resistência térmica. Disponível sob consulta.',
  },
]

export const capabilities: Capability[] = [
  { label: 'Volume máximo', value: '220 × 220 × 250 mm' },
  { label: 'Altura de camada', value: '0,12 a 0,28 mm' },
  { label: 'Tolerância usual', value: '± 0,2 mm' },
  { label: 'Arquivos aceitos', value: 'STL, OBJ, 3MF, STEP' },
]
