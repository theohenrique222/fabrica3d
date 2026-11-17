<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import { Button } from '@/components/ui/button'
import { defaultWhatsappLink, site } from '@/data/site'
</script>

<template>
  <SectionContainer class="pt-0 sm:pt-0 lg:pt-0">
    <div class="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
      <div class="bg-grid-sm pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div class="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="font-mono text-[11px] tracking-[0.18em] text-primary uppercase">
            Prefere conversar?
          </p>
          <h2 class="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
            Manda uma mensagem com a sua ideia.
          </h2>
          <p class="mt-1 text-sm text-muted-foreground">
            {{ site.responseTime }}, sem compromisso.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <Button as-child size="lg" class="h-11 px-4">
            <a :href="defaultWhatsappLink" target="_blank" rel="noopener noreferrer">
              WhatsApp
              <ArrowUpRight />
            </a>
          </Button>
          <Button as-child size="lg" variant="outline" class="h-11 px-4">
            <a href="#orcamento">Usar o formulário</a>
          </Button>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
