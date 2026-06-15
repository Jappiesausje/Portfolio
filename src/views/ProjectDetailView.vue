<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import projectsData from '../data/projects.json'
import Button from 'primevue/button'

interface Project {
  id: string
  title: string
  type: string
  language: string
  skills: string[]
  opensource: boolean
  shortDescription: string
  longDescription: string
  learningOutcomes: string[]
  githubUrl: string
  images: string[]
}

const props = defineProps<{
  id: string
}>()

const project = computed(() => (projectsData as Project[]).find(p => p.id === props.id))

const getLanguageColor = (lang: string) => {
  switch (lang) {
    case 'Vue': return 'bg-amber-400'
    case 'TypeScript': return 'bg-blue-500'
    case 'Python': return 'bg-[#3776ab]'
    case 'Django': return 'bg-[#092e20]'
    case 'Scratch/Blockly': return 'bg-orange-500'
    case 'Java': return 'bg-[#b07219]'
    case 'C++': return 'bg-[#f34b7d]'
    default: return 'bg-emerald-400'
  }
}
</script>

<template>
  <div v-if="project" class="max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
    <!-- Breadcrumbs -->
    <div class="flex items-center gap-2 text-sm font-mono mb-4">
      <RouterLink to="/" class="text-[#58a6ff] hover:underline flex items-center gap-1">
        <i class="pi pi-arrow-left text-[10px]"></i> Home
      </RouterLink>
      <span class="text-[#30363d]">/</span>
      <span class="text-[#f0f6fc] font-bold">{{ project.title }}</span>
    </div>

    <!-- Main Content Layout -->
    <div class="flex flex-col lg:flex-row gap-8">

      <!-- Left Column: README Style -->
      <div class="flex-grow space-y-8">
        <div class="bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
          <div class="bg-[#161b22] border-b border-[#30363d] px-6 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2 text-[#f0f6fc] text-xs font-mono">
              <i class="pi pi-list text-[#8b949e]"></i>
              PROJECT_README.md
            </div>
          </div>

          <div class="p-6 md:p-10 space-y-10">
            <section>
              <h1 class="text-3xl md:text-5xl font-black text-[#f0f6fc] mb-6 border-b border-[#30363d] pb-4 tracking-tight">
                {{ project.title }}
              </h1>
              <p class="text-[#c9d1d9] leading-relaxed text-lg md:text-xl">
                {{ project.longDescription }}
              </p>
            </section>

            <section v-if="project.images && project.images.length > 0">
              <div class="rounded-xl border border-[#30363d] overflow-hidden bg-[#161b22] shadow-inner">
                <img :src="project.images[0]" :alt="project.title" class="w-full h-auto object-cover" />
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-[#f0f6fc] mb-6 border-b border-[#30363d] pb-2 flex items-center gap-3">
                <i class="pi pi-book text-emerald-400"></i>
                Wat ik heb geleerd
              </h2>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li v-for="outcome in project.learningOutcomes" :key="outcome" class="bg-[#161b22] border border-[#30363d] p-4 rounded-lg flex gap-4 text-[#c9d1d9] hover:border-emerald-500/30 transition-colors group">
                  <i class="pi pi-check text-emerald-500 mt-1 text-sm shrink-0 group-hover:scale-125 transition-transform"></i>
                  <span class="text-sm md:text-base">{{ outcome }}</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <!-- Right Column: Sidebar -->
      <div class="lg:w-80 shrink-0 space-y-6">
        <div class="bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-6 shadow-xl">
          <div class="space-y-4">
            <h3 class="text-[#f0f6fc] font-bold text-sm uppercase tracking-widest text-[#8b949e]">Over dit project</h3>
            <p class="text-sm text-[#8b949e] leading-relaxed">
              {{ project.shortDescription }}
            </p>

            <div class="flex flex-wrap gap-2 pt-2">
              <span v-for="skill in project.skills" :key="skill" class="bg-[#21262d] text-[#58a6ff] px-3 py-1 rounded-full text-xs font-mono border border-[#30363d]">
                #{{ skill }}
              </span>
            </div>
          </div>

          <div class="pt-6 border-t border-[#30363d] space-y-4">
            <h3 class="text-[#f0f6fc] font-bold text-sm uppercase tracking-widest text-[#8b949e]">Links</h3>
            <div class="space-y-3">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="flex items-center justify-between p-3 rounded-lg bg-[#21262d] border border-[#30363d] text-[#f0f6fc] hover:border-emerald-500/50 hover:text-emerald-400 transition-all group">
                <div class="flex items-center gap-3">
                  <i class="pi pi-github text-lg"></i>
                  <span class="text-sm font-semibold">GitHub Repo</span>
                </div>
                <i class="pi pi-external-link text-xs opacity-50 group-hover:opacity-100"></i>
              </a>
              <div v-else class="flex items-center gap-3 p-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-[#8b949e] cursor-not-allowed opacity-60">
                <i class="pi pi-lock text-sm"></i>
                <span class="text-sm font-semibold">Private Code</span>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-[#30363d] space-y-4">
            <h3 class="text-[#f0f6fc] font-bold text-sm uppercase tracking-widest text-[#8b949e]">Techniek</h3>
            <div class="space-y-4">
              <div class="w-full h-2 rounded-full bg-[#0d1117] overflow-hidden flex">
                <div :class="[getLanguageColor(project.language), 'h-full w-full']"></div>
              </div>
              <div class="flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <span :class="[getLanguageColor(project.language), 'w-3 h-3 rounded-full']"></span>
                  <span class="text-[#f0f6fc] font-bold">{{ project.language }}</span>
                </div>
                <span class="text-[#8b949e] font-mono">100%</span>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-[#30363d] space-y-3 text-xs text-[#8b949e] font-mono uppercase tracking-tighter">
            <div class="flex justify-between">
              <span>Category</span>
              <span class="text-[#f0f6fc]">{{ project.type }}</span>
            </div>
            <div class="flex justify-between">
              <span>Status</span>
              <span class="text-emerald-400 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="flex flex-col items-center justify-center py-32 space-y-6">
    <i class="pi pi-search text-6xl text-[#30363d] animate-bounce"></i>
    <p class="text-[#8b949e] font-mono text-xl">404: Project niet gevonden</p>
    <RouterLink to="/">
      <Button label="Terug naar Home" icon="pi pi-home" severity="secondary" outlined />
    </RouterLink>
  </div>
</template>