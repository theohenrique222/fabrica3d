<script setup lang="ts">
import StepCard from '@/components/common/StepCard.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { processSteps } from '@/data/process'
</script>

<template>
  <SectionContainer id="como-funciona">
    <SectionHeading
      eyebrow="Como funciona"
      title="Simples do primeiro contato à entrega."
      description="Sem etapas escondidas: você acompanha o orçamento, a produção e o acabamento antes da peça sair."
    />

    <ol class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StepCard
        v-for="(step, index) in processSteps"
        :key="step.title"
        :step="step"
        :index="index"
        :delay="index * 70"
      />
    </ol>
  </SectionContainer>
</template>
