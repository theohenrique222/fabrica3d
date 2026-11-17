<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useQuoteForm } from '@/composables/useQuoteForm'
import { site } from '@/data/site'

const { form, errors, sent, whatsappHref, submit } = useQuoteForm()
</script>

<template>
  <form class="space-y-4" novalidate @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="space-y-1.5">
        <Label for="nome">Nome</Label>
        <Input
          id="nome"
          v-model="form.name"
          autocomplete="name"
          placeholder="Seu nome"
          required
          :aria-invalid="errors.name ? 'true' : undefined"
        />
        <p v-if="errors.name" class="text-xs text-destructive">
          {{ errors.name }}
        </p>
      </div>

      <div class="space-y-1.5">
        <Label for="telefone">WhatsApp</Label>
        <Input
          id="telefone"
          v-model="form.phone"
          type="tel"
          inputmode="tel"
          autocomplete="tel"
          placeholder="(11) 90000-0000"
          required
          :aria-invalid="errors.phone ? 'true' : undefined"
        />
        <p v-if="errors.phone" class="text-xs text-destructive">
          {{ errors.phone }}
        </p>
      </div>
    </div>

    <div class="space-y-1.5">
      <Label for="tipo">Tipo de peça</Label>
      <select
        id="tipo"
        v-model="form.pieceType"
        class="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
      >
        <option v-for="type in site.quotePieceTypes" :key="type" :value="type">
          {{ type }}
        </option>
      </select>
    </div>

    <div class="space-y-1.5">
      <Label for="descricao">O que você precisa?</Label>
      <Textarea
        id="descricao"
        v-model="form.description"
        rows="4"
        placeholder="Ex.: suporte para uma peça específica, medidas aproximadas, material desejado e prazo."
        required
        :aria-invalid="errors.description ? 'true' : undefined"
      />
      <p v-if="errors.description" class="text-xs text-destructive">
        {{ errors.description }}
      </p>
      <p class="text-xs leading-relaxed text-muted-foreground">
        Se tiver o arquivo (STL, OBJ, 3MF ou STEP), envie depois pelo WhatsApp.
      </p>
    </div>

    <Button type="submit" size="lg" class="h-11 w-full">
      Enviar para o WhatsApp
      <ArrowUpRight />
    </Button>

    <p class="text-center text-xs leading-relaxed text-muted-foreground/70">
      A mensagem é montada e aberta no seu WhatsApp. Nada é enviado automaticamente.
    </p>

    <div
      v-if="sent"
      role="status"
      class="rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm leading-relaxed text-primary"
    >
      Se o WhatsApp não abriu,
      <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="underline underline-offset-4">
        clique aqui para enviar a mensagem
      </a>.
    </div>
  </form>
</template>
