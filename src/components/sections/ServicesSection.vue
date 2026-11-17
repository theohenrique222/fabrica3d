<script setup lang="ts">
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import ServiceCard from '@/components/common/ServiceCard.vue'
import { services } from '@/data/services'
</script>

<template>
  <SectionContainer id="servicos">
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <SectionHeading
        eyebrow="Serviços"
        title="Do protótipo à peça que voltou a funcionar."
        description="Trabalho com demandas que não justificam uma produção industrial: uma peça única, um teste de encaixe ou um lote pequeno."
      />
      <p class="hidden font-mono text-[11px] tracking-[0.16em] text-muted-foreground/70 uppercase md:block">
        Atendimento por encomenda
      </p>
    </div>

    <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <ServiceCard
        v-for="(service, index) in services"
        :key="service.title"
        :service="service"
        :delay="index * 70"
      />
    </div>
  </SectionContainer>
</template>
