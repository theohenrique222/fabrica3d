<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Menu } from '@lucide/vue'
import Logo from '@/components/common/Logo.vue'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { defaultWhatsappLink, navItems, site } from '@/data/site'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
    <div class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
      <Logo />

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <Button as-child size="lg" class="hidden h-9 px-3.5 sm:inline-flex">
          <a :href="defaultWhatsappLink" target="_blank" rel="noopener noreferrer">
            Pedir orçamento
            <ArrowUpRight />
          </a>
        </Button>

        <Sheet v-model:open="open">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="lg:hidden" aria-label="Abrir menu">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent class="w-full max-w-xs gap-0 p-0">
            <SheetHeader class="border-b border-border/60 px-5 py-4">
              <SheetTitle class="sr-only">Menu de navegação</SheetTitle>
              <Logo />
            </SheetHeader>

            <nav class="flex flex-col gap-1 p-3" aria-label="Navegação principal">
              <SheetClose v-for="item in navItems" :key="item.href" as-child>
                <a
                  :href="item.href"
                  class="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {{ item.label }}
                </a>
              </SheetClose>
            </nav>

            <SheetFooter class="mt-auto border-t border-border/60 p-4">
              <Button as-child class="w-full">
                <a :href="defaultWhatsappLink" target="_blank" rel="noopener noreferrer">
                  Pedir orçamento no WhatsApp
                  <ArrowUpRight />
                </a>
              </Button>
              <p class="text-center text-xs text-muted-foreground">
                {{ site.responseTime }}
              </p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
