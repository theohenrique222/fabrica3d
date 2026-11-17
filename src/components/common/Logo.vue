<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <a
    href="#inicio"
    :class="cn('inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring', props.class)"
    :aria-label="`${site.name} — início`"
  >
    <span class="grid size-9 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
      <svg viewBox="0 0 24 24" fill="none" class="size-5" aria-hidden="true">
        <path d="M12 3 21 8 12 13 3 8 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M3 12 12 17 21 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity=".7" />
        <path d="M3 16 12 21 21 16" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" opacity=".4" />
      </svg>
    </span>
    <span class="font-heading text-lg font-semibold tracking-tight">
      fabrica<span class="text-primary">3d</span>
    </span>
  </a>
</template>
