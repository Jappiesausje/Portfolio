<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const scrollToSection = async (id: string) => {
  if (route.name !== 'home') {
    await router.push('/')
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  } else {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <div class="my-app-dark min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans flex flex-col pb-16 md:pb-0">

    <!-- Top Header -->
    <header class="border-b border-[#30363d] bg-[#161b22]/80 backdrop-blur sticky top-0 z-50 py-3 md:py-6">
      <div class="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
        <button @click="scrollToSection('home')" class="text-xl md:text-3xl font-black text-emerald-400 tracking-wider flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span class="text-[#8b949e] font-light">&lt;</span> JASPER DE WAAL <span class="text-[#8b949e] font-light">/&gt;</span>
        </button>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-2 text-sm lg:text-base">
          <button @click="scrollToSection('home')" class="px-4 py-2 rounded-md hover:bg-[#21262d] hover:text-emerald-400 transition-all duration-200 font-medium">Home</button>
          <button @click="scrollToSection('journey')" class="px-4 py-2 rounded-md hover:bg-[#21262d] hover:text-emerald-400 transition-all duration-200 font-medium">Journey</button>
          <button @click="scrollToSection('skills')" class="px-4 py-2 rounded-md hover:bg-[#21262d] hover:text-emerald-400 transition-all duration-200 font-medium">Skills</button>
          <button @click="scrollToSection('contact')" class="px-4 py-2 rounded-md hover:bg-[#21262d] hover:text-emerald-400 transition-all duration-200 font-medium">Contact</button>
        </nav>

        <span class="hidden sm:inline-block text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider font-mono">
          v1.0
        </span>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow w-full">
      <RouterView />
    </main>

    <!-- Bottom Nav (Mobile) -->
    <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-[#161b22]/95 border-t border-[#30363d] backdrop-blur-lg z-50 flex justify-around py-3 px-2 shadow-2xl">
      <button @click="scrollToSection('home')" class="flex flex-col items-center justify-center flex-1 py-1 text-xs text-[#8b949e] active:text-emerald-400">
        <i class="pi pi-home text-xl mb-1"></i>
        <span>Home</span>
      </button>
      <button @click="scrollToSection('journey')" class="flex flex-col items-center justify-center flex-1 py-1 text-xs text-[#8b949e] active:text-emerald-400">
        <i class="pi pi-map text-xl mb-1"></i>
        <span>Journey</span>
      </button>
      <button @click="scrollToSection('skills')" class="flex flex-col items-center justify-center flex-1 py-1 text-xs text-[#8b949e] active:text-emerald-400">
        <i class="pi pi-bolt text-xl mb-1"></i>
        <span>Skills</span>
      </button>
      <button @click="scrollToSection('contact')" class="flex flex-col items-center justify-center flex-1 py-1 text-xs text-[#8b949e] active:text-emerald-400">
        <i class="pi pi-envelope text-xl mb-1"></i>
        <span>Contact</span>
      </button>
    </nav>

    <!-- Footer -->
    <footer class="border-t border-[#30363d] bg-[#090d10] py-10 text-xs text-[#8b949e] mb-2 md:mb-0">
      <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
          <span class="font-medium">© 2026 Jasper de Waal</span>
        </div>
        <div class="flex space-x-8 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a href="https://github.com/jouwgithub" target="_blank" class="hover:text-emerald-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/jouwprofiel" target="_blank" class="hover:text-emerald-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>