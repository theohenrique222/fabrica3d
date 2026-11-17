<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Check } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { defaultWhatsappLink, site } from '@/data/site'

const highlights = [
  'PLA, PETG e TPU',
  'Peças únicas e lotes curtos',
  'Atendimento direto com quem imprime',
]
</script>

<template>
  <section id="inicio" class="relative overflow-hidden">
    <div class="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" aria-hidden="true" />
    <div class="pointer-events-none absolute -top-32 -left-32 -z-10 size-[28rem] rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

    <div class="mx-auto grid w-full max-w-6xl gap-12 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
      <div>
        <p class="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          <span class="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          Impressão 3D sob demanda · {{ site.location }}
        </p>

        <h1 class="mt-6 font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Peças sob medida,
          <span class="text-primary">impressas em 3D</span>
          com atenção ao detalhe.
        </h1>

        <p class="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Protótipos, peças de reposição e itens personalizados em impressão FDM.
          Projetos pequenos, prazos combinados direto com quem produz.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as-child size="lg" class="h-11 px-5 text-sm">
            <a :href="defaultWhatsappLink" target="_blank" rel="noopener noreferrer">
              Pedir orçamento
              <ArrowUpRight />
            </a>
          </Button>
          <Button as-child size="lg" variant="outline" class="h-11 px-5 text-sm">
            <a href="#projetos">
              Ver projetos
              <ArrowRight />
            </a>
          </Button>
        </div>

        <ul class="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <li v-for="highlight in highlights" :key="highlight" class="inline-flex items-center gap-1.5">
            <Check class="size-4 text-primary" aria-hidden="true" />
            {{ highlight }}
          </li>
        </ul>

        <p class="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground/70">
          Estamos começando: o atendimento é próximo e cada prazo é combinado antes de iniciar a produção.
        </p>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="overflow-hidden rounded-2xl border border-border/80 bg-card">
          <img
            src="/projects/hero.svg"
            alt="Ilustração técnica de uma peça impressa em 3D sobre a mesa da impressora"
            class="aspect-4/5 w-full object-cover"
          />
        </div>

        <div class="absolute -bottom-4 left-4 rounded-lg border border-border/80 bg-background/90 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur sm:left-5">
          <p class="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
            Protótipo funcional
          </p>
          <p class="mt-1 text-sm text-foreground">PETG · camada 0,2 mm</p>
        </div>

        <div class="absolute top-4 right-4 rounded-full border border-white/10 bg-background/80 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase backdrop-blur">
          FDM
        </div>
      </div>
    </div>
  </section>
</template>
