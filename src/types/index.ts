export type ProjectCategory = 'protótipo' | 'reposição' | 'personalizado'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  material: 'PLA' | 'PETG' | 'TPU' | 'ABS'
  description: string
  image: string
  imageAlt: string
  layerHeight: string
}

export interface Service {
  icon: 'prototype' | 'replacement' | 'custom' | 'batch'
  title: string
  description: string
  idealFor: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Material {
  name: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Capability {
  label: string
  value: string
}

export interface NavItem {
  label: string
  href: string
}
