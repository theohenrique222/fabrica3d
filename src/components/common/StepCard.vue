<script setup lang="ts">
import type { ProcessStep } from '@/types'

defineProps<{
  step: ProcessStep
  index: number
  delay?: number
}>()
</script>

<template>
  <li
    v-reveal
    :style="{ '--reveal-delay': `${delay ?? 0}ms` }"
    class="relative flex h-full flex-col rounded-xl border border-border/70 bg-card p-5"
  >
    <span class="font-mono text-xs tracking-[0.2em] text-primary">
      {{ String(index + 1).padStart(2, '0') }}
    </span>
    <h3 class="mt-3 font-heading text-base font-medium">
      {{ step.title }}
    </h3>
    <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
      {{ step.description }}
    </p>
  </li>
</template>
