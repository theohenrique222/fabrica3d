<script setup lang="ts">
import { Mail, MapPin, MessageCircle } from '@lucide/vue'
import InstagramIcon from '@/components/common/InstagramIcon.vue'
import Logo from '@/components/common/Logo.vue'
import { defaultWhatsappLink, navItems, site } from '@/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border/60 bg-card/40">
    <div class="mx-auto w-full max-w-6xl px-5 pt-12 pb-24 sm:px-8 sm:pt-16 sm:pb-16">
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div class="max-w-sm">
          <Logo />
          <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
            {{ site.description }}
          </p>
          <p class="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin class="size-4 text-primary" aria-hidden="true" />
            {{ site.location }}
          </p>
        </div>

        <div>
          <h2 class="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Navegação
          </h2>
          <ul class="mt-4 space-y-2.5">
            <li v-for="item in navItems" :key="item.href">
              <a
                :href="item.href"
                class="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {{ item.label }}
              </a>
            </li>
            <li>
              <a href="#orcamento" class="text-sm text-primary transition-colors hover:text-primary/80">
                Pedir orçamento
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Contato
          </h2>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                :href="defaultWhatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageCircle class="size-4" aria-hidden="true" />
                {{ site.whatsappDisplay }}
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${site.email}`"
                class="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail class="size-4" aria-hidden="true" />
                {{ site.email }}
              </a>
            </li>
            <li>
              <a
                :href="site.instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <InstagramIcon class="size-4" />
                {{ site.instagramHandle }}
              </a>
            </li>
          </ul>
          <p class="mt-4 text-xs leading-relaxed text-muted-foreground/70">
            {{ site.hours[0] }}<br />
            {{ site.hours[1] }}
          </p>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} {{ site.name }}. Impressão 3D sob demanda.</p>
        <p>{{ site.serviceArea }}</p>
      </div>
    </div>
  </footer>
</template>
