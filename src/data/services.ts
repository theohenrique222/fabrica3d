import type { Service } from '@/types'

export const services: Service[] = [
  {
    icon: 'prototype',
    title: 'Protótipos',
    description:
      'Impressão de modelos para validar encaixe, forma e função antes de investir em ferramental ou produção.',
    idealFor: 'Testes de produto e validação de ideia',
  },
  {
    icon: 'replacement',
    title: 'Peças de reposição',
    description:
      'Reprodução de peças que quebraram ou saíram de linha, a partir de um arquivo ou de uma amostra física.',
    idealFor: 'Eletrodomésticos, móveis e equipamentos',
  },
  {
    icon: 'custom',
    title: 'Itens personalizados',
    description:
      'Peças únicas com medidas e acabamento definidos por você: suportes, organizadores, decoração e presentes.',
    idealFor: 'Uso pessoal, escritório e brindes',
  },
  {
    icon: 'batch',
    title: 'Pequenas séries',
    description:
      'Lotes curtos para feiras, testes internos e demandas que não justificam uma produção industrial.',
    idealFor: 'De 5 a 50 unidades',
  },
]
