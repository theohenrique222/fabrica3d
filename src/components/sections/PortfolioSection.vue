<script setup lang="ts">
import { computed, ref } from 'vue'
import { Info } from '@lucide/vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import SectionContainer from '@/components/layout/SectionContainer.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { projectCategories, projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

const activeCategory = ref<ProjectCategory | 'todos'>('todos')

const categoryLabels: Record<ProjectCategory | 'todos', string> = {
  'todos': 'Todos',
  'protótipo': 'Protótipos',
  'reposição': 'Reposição',
  'personalizado': 'Personalizados',
}

const filteredProjects = computed(() =>
  activeCategory.value === 'todos'
    ? projects
    : projects.filter((project) => project.category === activeCategory.value),
)
</script>

<template>
  <SectionContainer id="projetos" class="border-y border-border/50 bg-card/20">
    <SectionHeading
      eyebrow="Projetos"
      title="Peças que saíram da oficina."
      description="Uma seleção de trabalhos recentes. Cada peça é feita sob demanda, com material e acabamento definidos junto ao cliente."
    />

    <div class="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos por categoria">
      <button
        v-for="category in projectCategories"
        :key="category"
        type="button"
        :aria-pressed="activeCategory === category"
        :class="
          cn(
            'rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
            activeCategory === category
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
          )
        "
        @click="activeCategory = category"
      >
        {{ categoryLabels[category] }}
      </button>
    </div>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="(project, index) in filteredProjects"
        :key="project.slug"
        :project="project"
        :delay="index * 60"
      />
    </div>

    <p class="mt-8 flex max-w-2xl items-start gap-2 text-xs leading-relaxed text-muted-foreground/70">
      <Info class="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
      As imagens são ilustrações técnicas das peças. Fotos reais entram no portfólio conforme os projetos são concluídos.
    </p>
  </SectionContainer>
</template>
