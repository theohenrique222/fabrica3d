<script setup lang="ts">
import { cn } from '@/lib/utils'

withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    align?: 'left' | 'center'
  }>(),
  { description: undefined, align: 'left' },
)
</script>

<template>
  <header :class="cn('max-w-2xl', align === 'center' && 'mx-auto text-center')">
    <p class="flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-primary uppercase" :class="align === 'center' && 'justify-center'">
      <span class="inline-block size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {{ eyebrow }}
    </p>
    <h2 class="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-relaxed text-muted-foreground">
      {{ description }}
    </p>
  </header>
</template>
