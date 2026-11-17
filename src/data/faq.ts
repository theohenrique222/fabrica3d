import type { FaqItem } from '@/types'

export const faqItems: FaqItem[] = [
  {
    question: 'Preciso ter o arquivo da peça para pedir um orçamento?',
    answer:
      'Não necessariamente. Se você já tem o arquivo em STL, OBJ, 3MF ou STEP, o orçamento é mais rápido. Se não tiver, envie fotos e medidas — avaliamos se é possível modelar ou reproduzir a partir de uma amostra.',
  },
  {
    question: 'Vocês fazem a modelagem 3D?',
    answer:
      'A modelagem própria é feita sob consulta, porque depende da complexidade da peça. Ajustes simples em arquivos existentes costumam ser incluídos no orçamento. Para projetos maiores, indicamos um modelador de confiança.',
  },
  {
    question: 'Qual é o prazo de produção?',
    answer:
      'Peças pequenas costumam ficar prontas em 1 a 3 dias úteis. Peças grandes, com acabamento ou em pequena série podem levar mais tempo. O prazo é confirmado no orçamento, antes de iniciar.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Para pedidos acima de R$ 100, trabalhamos com 50% para entrar na fila e 50% na entrega. Pedidos menores são pagos integralmente na aprovação. Aceitamos Pix e transferência.',
  },
  {
    question: 'Vocês entregam fora de São Paulo?',
    answer:
      'Sim. A retirada pode ser combinada na região de São Paulo e também enviamos para todo o Brasil pelos Correios ou transportadora. O frete é calculado junto com o orçamento.',
  },
  {
    question: 'Qual a diferença entre PLA, PETG e TPU?',
    answer:
      'O PLA é rígido e ótimo para peças visuais. O PETG é mais resistente para uso funcional. O TPU é flexível, parecido com borracha. Na dúvida, diga como a peça vai ser usada e sugerimos o material mais adequado.',
  },
]
