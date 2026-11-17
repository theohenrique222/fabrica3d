<script setup lang="ts">
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle } from '@lucide/vue'
import InstagramIcon from '@/components/common/InstagramIcon.vue'
import QuoteForm from '@/components/common/QuoteForm.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { site, whatsappLink } from '@/data/site'

const directContacts = [
  {
    label: 'WhatsApp',
    value: site.whatsappDisplay,
    href: whatsappLink('Olá! Vim pelo site e gostaria de falar sobre um projeto.'),
    icon: MessageCircle,
    external: true,
  },
  {
    label: 'E-mail',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'Instagram',
    value: site.instagramHandle,
    href: site.instagramUrl,
    icon: InstagramIcon,
    external: true,
  },
]
</script>

<template>
  <SectionContainer id="orcamento" class="border-y border-border/50 bg-card/20">
    <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <SectionHeading
          eyebrow="Orçamento"
          title="Conte o que você precisa."
          description="Sem compromisso. Respondo com valor, material sugerido e prazo — geralmente em até 1 dia útil."
        />

        <ul class="mt-8 space-y-3">
          <li v-for="contact in directContacts" :key="contact.label">
            <a
              :href="contact.href"
              :target="contact.external ? '_blank' : undefined"
              :rel="contact.external ? 'noopener noreferrer' : undefined"
              class="group flex items-center gap-3 rounded-lg border border-border/70 bg-background/40 p-4 transition-colors hover:border-primary/40"
            >
              <span class="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-card text-primary">
                <component :is="contact.icon" class="size-4" aria-hidden="true" />
              </span>
              <span class="min-w-0">
                <span class="block font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {{ contact.label }}
                </span>
                <span class="block truncate text-sm text-foreground">{{ contact.value }}</span>
              </span>
              <ArrowUpRight class="ml-auto size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div class="mt-4 space-y-2 rounded-lg border border-border/70 bg-background/40 p-4 text-xs leading-relaxed text-muted-foreground">
          <p class="flex items-start gap-2">
            <Clock class="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
            <span>{{ site.hours[0] }} · {{ site.hours[1] }}</span>
          </p>
          <p class="flex items-start gap-2">
            <MapPin class="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
            <span>{{ site.serviceArea }}</span>
          </p>
        </div>
      </div>

      <div class="rounded-xl border border-border/70 bg-background/60 p-5 sm:p-6">
        <QuoteForm />
      </div>
    </div>
  </SectionContainer>
</template>
