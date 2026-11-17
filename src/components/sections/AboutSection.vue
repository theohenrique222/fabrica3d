<script setup lang="ts">
import { Check } from '@lucide/vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'

const facts = [
  'Oficina em São Paulo',
  'Sem pedido mínimo',
  'Retirada combinada ou envio',
  'Peças produzidas sob demanda',
]

const workshop = [
  { label: 'Operação', value: 'Oficina própria' },
  { label: 'Produção', value: 'Impressão FDM' },
  { label: 'Atendimento', value: 'Direto pelo WhatsApp' },
  { label: 'Pagamento', value: 'Pix e transferência' },
  { label: 'Entregas', value: 'Retirada ou envio' },
]
</script>

<template>
  <SectionContainer>
    <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
      <div>
        <SectionHeading
          eyebrow="Sobre"
          title="Uma oficina pequena, com atendimento próximo."
        />

        <div class="mt-5 max-w-xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            A Fabrica 3D nasceu para resolver demandas que não compensam para grandes fornecedores:
            uma peça única, um protótipo para validar ou um lote pequeno para testar.
          </p>
          <p>
            Aqui você fala direto com quem opera a impressora — do orçamento ao acabamento.
            Sem intermediários e sem promessa de produção em massa.
          </p>
        </div>

        <ul class="mt-6 grid max-w-xl gap-2.5 sm:grid-cols-2">
          <li
            v-for="fact in facts"
            :key="fact"
            class="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Check class="size-4 shrink-0 text-primary" aria-hidden="true" />
            {{ fact }}
          </li>
        </ul>
      </div>

      <div class="bg-grid-sm relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6">
        <div class="absolute top-4 right-5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground/50 uppercase">
          fabrica3d / oficina
        </div>

        <p class="mt-7 font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
          Ficha rápida
        </p>

        <dl class="mt-4 divide-y divide-border/70">
          <div
            v-for="item in workshop"
            :key="item.label"
            class="flex items-baseline justify-between gap-4 py-3"
          >
            <dt class="text-sm text-muted-foreground">
              {{ item.label }}
            </dt>
            <dd class="text-right text-sm text-foreground">
              {{ item.value }}
            </dd>
          </div>
        </dl>

        <p class="mt-5 text-xs leading-relaxed text-muted-foreground/70">
          Empresa em início de operação. O escopo e o prazo de cada projeto são alinhados antes de começar.
        </p>
      </div>
    </div>
  </SectionContainer>
</template>
