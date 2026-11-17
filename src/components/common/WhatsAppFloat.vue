<script setup lang="ts">
import { MessageCircle } from '@lucide/vue'
import { defaultWhatsappLink, site } from '@/data/site'
</script>

<template>
  <a
    :href="defaultWhatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:right-6 sm:bottom-6"
    :aria-label="`Falar com a ${site.name} no WhatsApp`"
  >
    <MessageCircle class="size-5" aria-hidden="true" />
    <span class="hidden sm:inline">WhatsApp</span>
  </a>
</template>
