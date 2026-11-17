import type { NavItem } from '@/types'

export const site = {
  name: 'Fabrica 3D',
  tagline: 'Impressão 3D sob medida',
  description:
    'Oficina de impressão 3D sob demanda em São Paulo. Protótipos, peças de reposição e itens personalizados com atendimento direto de quem imprime.',
  location: 'São Paulo, SP',
  whatsappNumber: '5511999999999',
  whatsappDisplay: '(11) 99999-9999',
  email: 'contato@fabrica3d.com.br',
  instagramHandle: '@fabrica3d',
  instagramUrl: 'https://instagram.com/fabrica3d',
  hours: ['Segunda a sexta, 9h às 18h', 'Sábado, 9h às 13h'],
  serviceArea: 'Retirada em São Paulo e envio para todo o Brasil',
  responseTime: 'Resposta em até 1 dia útil',
  quotePieceTypes: [
    'Protótipo',
    'Peça de reposição',
    'Item personalizado',
    'Pequena série',
    'Ainda não sei',
  ],
} as const

export const navItems: NavItem[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Materiais', href: '#materiais' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const defaultWhatsappLink = whatsappLink(
  `Olá! Vim pelo site da ${site.name} e gostaria de pedir um orçamento.`,
)
