<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqItems } from '@/data/faq'
import { defaultWhatsappLink } from '@/data/site'
</script>

<template>
  <SectionContainer id="duvidas">
    <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <SectionHeading
          eyebrow="Dúvidas"
          title="Antes de pedir seu orçamento."
          description="As perguntas que mais aparecem no atendimento. Se a sua não estiver aqui, chama no WhatsApp."
        />
        <a
          :href="defaultWhatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
        >
          Tirar dúvida no WhatsApp
          <ArrowUpRight class="size-4" aria-hidden="true" />
        </a>
      </div>

      <Accordion type="single" collapsible class="w-full">
        <AccordionItem
          v-for="(item, index) in faqItems"
          :key="item.question"
          :value="`item-${index}`"
          class="border-border/70"
        >
          <AccordionTrigger class="py-4 text-[15px] hover:no-underline">
            {{ item.question }}
          </AccordionTrigger>
          <AccordionContent class="pb-4 text-sm leading-relaxed text-muted-foreground">
            {{ item.answer }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </SectionContainer>
</template>
