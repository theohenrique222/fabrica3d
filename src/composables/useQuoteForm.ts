import { computed, reactive, ref } from 'vue'
import { site, whatsappLink } from '@/data/site'

interface QuoteForm {
  name: string
  phone: string
  pieceType: string
  description: string
}

const initialForm = (): QuoteForm => ({
  name: '',
  phone: '',
  pieceType: site.quotePieceTypes[0],
  description: '',
})

export function useQuoteForm() {
  const form = reactive<QuoteForm>(initialForm())
  const errors = reactive<Record<keyof QuoteForm, string>>({
    name: '',
    phone: '',
    pieceType: '',
    description: '',
  })
  const sent = ref(false)

  const message = computed(() =>
    [
      `Olá! Meu nome é ${form.name.trim()}.`,
      `Quero um orçamento de: ${form.pieceType}.`,
      `Descrição: ${form.description.trim()}`,
      `Meu WhatsApp: ${form.phone.trim()}.`,
    ].join('\n'),
  )

  const whatsappHref = computed(() => whatsappLink(message.value))

  function validate(): boolean {
    errors.name = form.name.trim().length >= 2 ? '' : 'Informe seu nome.'
    errors.phone =
      form.phone.replace(/\D/g, '').length >= 10 ? '' : 'Informe um WhatsApp com DDD.'
    errors.description =
      form.description.trim().length >= 10
        ? ''
        : 'Descreva a peça com pelo menos 10 caracteres.'

    return !errors.name && !errors.phone && !errors.description
  }

  function submit(): boolean {
    sent.value = false

    if (!validate()) return false

    window.open(whatsappHref.value, '_blank', 'noopener,noreferrer')
    sent.value = true
    return true
  }

  return { form, errors, sent, whatsappHref, submit }
}
