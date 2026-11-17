<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    id?: string
    class?: HTMLAttributes['class']
  }>(),
  { id: undefined },
)
</script>

<template>
  <section :id="id" :class="cn('py-16 sm:py-20 lg:py-24', props.class)">
    <div class="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <slot />
    </div>
  </section>
</template>
