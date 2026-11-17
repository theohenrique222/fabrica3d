<script setup lang="ts">
import { computed } from 'vue'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/types'

const props = defineProps<{
  project: Project
  delay?: number
}>()

const categoryLabels: Record<Project['category'], string> = {
  'protótipo': 'Protótipo',
  'reposição': 'Reposição',
  'personalizado': 'Personalizado',
}

const categoryLabel = computed(() => categoryLabels[props.project.category])
</script>

<template>
  <article
    v-reveal
    :style="{ '--reveal-delay': `${delay ?? 0}ms` }"
    class="group min-w-0 overflow-hidden rounded-xl border border-border/70 bg-card transition-colors hover:border-border"
  >
    <div class="relative aspect-4/3 overflow-hidden border-b border-border/70 bg-[#101314]">
      <img
        :src="project.image"
        :alt="project.imageAlt"
        loading="lazy"
        class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <Badge variant="outline" class="absolute top-3 left-3 border-white/10 bg-background/80 backdrop-blur">
        {{ categoryLabel }}
      </Badge>
    </div>

    <div class="space-y-2 p-4">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-heading text-base font-medium">
          {{ project.title }}
        </h3>
        <span class="shrink-0 font-mono text-[11px] text-primary">{{ project.material }}</span>
      </div>
      <p class="text-sm leading-relaxed text-muted-foreground">
        {{ project.description }}
      </p>
      <p class="pt-1 font-mono text-[11px] tracking-wide text-muted-foreground/70 uppercase">
        Camada {{ project.layerHeight }}
      </p>
    </div>
  </article>
</template>
