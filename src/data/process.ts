import type { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    title: 'Você conta a ideia',
    description:
      'Envie a descrição, uma foto ou o arquivo da peça (STL, OBJ, 3MF ou STEP). Se não tiver o arquivo, avaliamos juntos o caminho possível.',
  },
  {
    title: 'Orçamento e prazo',
    description:
      'Respondo com valor, material sugerido e prazo de impressão. Sem compromisso e sem letras miúdas.',
  },
  {
    title: 'Produção',
    description:
      'Com o pedido confirmado, a peça entra na fila da impressora. Você recebe fotos do andamento quando fizer sentido.',
  },
  {
    title: 'Entrega',
    description:
      'Retirada combinada na região de São Paulo ou envio pelos Correios. O acabamento é revisado antes de sair.',
  },
]
