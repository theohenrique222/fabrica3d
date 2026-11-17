<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { capabilities, materials } from '@/data/materials'
</script>

<template>
  <SectionContainer id="materiais" class="border-y border-border/50 bg-card/20">
    <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <SectionHeading
          eyebrow="Materiais"
          title="O material certo para cada uso."
          description="A escolha do filamento muda a resistência, a flexibilidade e o acabamento. Se você não souber qual usar, indica o uso da peça e sugiro a melhor opção."
        />

        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <div
            v-for="material in materials"
            :key="material.name"
            class="rounded-lg border border-border/70 bg-background/40 p-4"
          >
            <p class="font-mono text-sm font-medium text-primary">
              {{ material.name }}
            </p>
            <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {{ material.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="h-fit self-start rounded-xl border border-border/70 bg-card p-5 sm:p-6">
        <p class="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          Capacidade da oficina
        </p>
        <dl class="mt-4 divide-y divide-border/70">
          <div
            v-for="capability in capabilities"
            :key="capability.label"
            class="flex items-baseline justify-between gap-4 py-3"
          >
            <dt class="text-sm text-muted-foreground">
              {{ capability.label }}
            </dt>
            <dd class="text-right font-mono text-sm text-foreground">
              {{ capability.value }}
            </dd>
          </div>
        </dl>
        <p class="mt-4 border-t border-border/70 pt-4 text-xs leading-relaxed text-muted-foreground/70">
          Medidas acima do volume da impressora podem ser divididas em partes e montadas depois. Avaliamos caso a caso no orçamento.
        </p>
      </div>
    </div>
  </SectionContainer>
</template>
