<script setup lang="ts">
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import WhatsAppFloat from '@/components/common/WhatsAppFloat.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import MaterialsSection from '@/components/sections/MaterialsSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import QuoteSection from '@/components/sections/QuoteSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <a
    href="#conteudo"
    class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
  >
    Ir para o conteúdo
  </a>

  <SiteHeader />

  <main id="conteudo">
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <ProcessSection />
    <MaterialsSection />
    <AboutSection />
    <QuoteSection />
    <FaqSection />
    <CtaSection />
  </main>

  <SiteFooter />
  <WhatsAppFloat />
</template>
