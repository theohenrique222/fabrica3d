<script setup lang="ts">
import type { Component } from 'vue'
import { Box, Boxes, Shapes, Wrench } from '@lucide/vue'
import type { Service } from '@/types'

defineProps<{
  service: Service
  delay?: number
}>()

const icons: Record<Service['icon'], Component> = {
  prototype: Box,
  replacement: Wrench,
  custom: Shapes,
  batch: Boxes,
}
</script>

<template>
  <article
    v-reveal
    :style="{ '--reveal-delay': `${delay ?? 0}ms` }"
    class="flex h-full flex-col rounded-xl border border-border/70 bg-card p-5 transition-colors hover:border-primary/30"
  >
    <span class="grid size-10 place-items-center rounded-lg border border-border bg-background/60 text-primary">
      <component :is="icons[service.icon]" class="size-5" aria-hidden="true" />
    </span>
    <h3 class="mt-5 font-heading text-lg font-medium">
      {{ service.title }}
    </h3>
    <p class="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
      {{ service.description }}
    </p>
    <p class="mt-5 border-t border-border/70 pt-3 font-mono text-[11px] tracking-wide text-muted-foreground/80 uppercase">
      {{ service.idealFor }}
    </p>
  </article>
</template>
