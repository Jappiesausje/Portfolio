<script setup lang="ts">
import { useRouter } from 'vue-router'
import projectsData from '../data/projects.json'
import Button from 'primevue/button'
import profielfoto from '../assets/profielfoto.jpeg'

const router = useRouter()

// Centralized URLs
const linkedinUrl = 'https://www.linkedin.com/in/jasper-de-waal-83519a2b7/'
const githubUrl = 'https://github.com/Jappiesausje'
const emailAddress = 'contact@jasperdewaal-dev.nl'

const chapters = [
  {
    id: 1,
    title: 'De Start',
    period: '8 - 12 jaar',
    story: 'Mijn interesse in techniek begon al vroeg. Ik was altijd nieuwsgierig naar hoe dingen werkten. Met mijn eerste Micro-Bit begon ik echt te begrijpen hoe je met code simpele dingen kon aansturen.',
    icon: 'pi-power-off'
  },
  {
    id: 2,
    title: 'Ontdekken met Python',
    period: '13 - 14 jaar',
    story: 'Rond mijn 13e ben ik begonnen met Python. Ik leerde mezelf de basis via YouTube. Ik maakte kleine scripts, Discord bots en simpele spelletjes zoals Snake en Pong. Ook heb ik kort geoefend met het Django framework.',
    icon: 'pi-code'
  },
  {
    id: 3,
    title: 'Projecten en Experimenten',
    period: 'Middelbare School',
    story: 'Op de middelbare school werden mijn projecten iets serieuzer. Ik begon met het automatiseren van games en het bouwen van tools voor schoolsystemen. Ook probeerde ik grotere systemen te bouwen, waar ik veel van heb geleerd.',
    icon: 'pi-git-commit'
  },
  {
    id: 4,
    title: 'Opleiding en Werk',
    period: 'Hogeschool Leiden / Nu',
    story: 'Nu studeer ik Software Engineering aan de Hogeschool Leiden, waar ik in het eerste jaar mijn propedeuse heb behaald met een gemiddelde van 7,8. Ik richt me nu vooral op schoolprojecten en grijp elke kans aan om met mijn ICT-vaardigheden praktische problemen in mijn dagelijks leven op te lossen.',
    icon: 'pi-server'
  }
]

const skillCategories = [
  {
    name: 'Talen',
    skills: [
      { name: 'Python', icon: 'pi-code', color: 'text-blue-400' },
      { name: 'TypeScript', icon: 'pi-code', color: 'text-blue-500' },
      { name: 'Java', icon: 'pi-code', color: 'text-orange-400' },
      { name: 'HTML5', icon: 'pi-code', color: 'text-orange-500' },
      { name: '(S)CSS', icon: 'pi-code', color: 'text-pink-400' }
    ]
  },
  {
    name: 'Frameworks & Libs',
    skills: [
      { name: 'Vue.js', icon: 'pi-desktop', color: 'text-emerald-400' },
      { name: 'Angular', icon: 'pi-desktop', color: 'text-red-500' },
      { name: 'Spring Boot', icon: 'pi-server', color: 'text-green-500' },
      { name: 'Django', icon: 'pi-globe', color: 'text-green-600' },
      { name: 'discord.py', icon: 'pi-discord', color: 'text-indigo-400' },
      { name: 'OpenCV', icon: 'pi-eye', color: 'text-red-400' }
    ]
  },
  {
    name: 'Tools & Infra',
    skills: [
      { name: 'Docker', icon: 'pi-box', color: 'text-blue-600' },
      { name: 'Git / GitLab', icon: 'pi-git', color: 'text-orange-600' },
      { name: 'RabbitMQ', icon: 'pi-send', color: 'text-orange-400' },
      { name: 'Blockly', icon: 'pi-th-large', color: 'text-blue-300' }
    ]
  },
  {
    name: 'Concepten',
    skills: [
      { name: 'API Design', icon: 'pi-external-link', color: 'text-purple-400' },
      { name: 'Automatisering', icon: 'pi-sync', color: 'text-emerald-500' },
      { name: 'Logistiek', icon: 'pi-truck', color: 'text-yellow-400' },
      { name: 'Raspberry Pi / GPIO', icon: 'pi-server', color: 'text-gray-400' }
    ]
  }
]

const getProjectsByChapter = (chapterId: number) => {
  return projectsData.filter(p => p.chapter === chapterId)
}

const goToProject = (id: string) => {
  router.push({ name: 'project-detail', params: { id } })
}

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

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="space-y-20 pb-24">
    <!-- Home Section -->
    <section id="home" class="min-h-[85vh] flex flex-col items-center justify-center py-12 px-6">
      <div class="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div class="relative group shrink-0 animate-in fade-in zoom-in duration-700">
          <div class="absolute -inset-2 bg-emerald-500/20 rounded-full blur group-hover:bg-emerald-500/40 transition duration-500"></div>
          <img :src="profielfoto" alt="Jasper de Waal" class="relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#30363d] group-hover:border-emerald-400 transition-colors duration-500 shadow-2xl" />
        </div>

        <div id="about" class="space-y-6 text-center md:text-left animate-in fade-in slide-in-from-right-8 duration-700">
          <div class="space-y-2">
            <h1 class="text-6xl md:text-8xl font-black text-[#f0f6fc] tracking-tight">
              Jasper de Waal
            </h1>
            <p class="text-emerald-400 font-mono text-xl md:text-2xl tracking-widest uppercase">
              Software Engineering Student
            </p>
          </div>
          <div class="space-y-4">
            <p class="text-xl md:text-3xl text-[#c9d1d9] leading-tight max-w-2xl font-medium">
              Ik ben een 18-jarige student met een passie voor techniek en code.
            </p>
            <p class="text-lg text-[#8b949e] leading-relaxed max-w-2xl">
              Ik studeer aan de Hogeschool Leiden en ben elke dag bezig om nieuwe dingen te leren. Of het nu gaat om het schrijven van scripts of het ontdekken van hoe systemen werken: ik duik er graag in.
            </p>
          </div>
          <div class="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Button label="Mijn Journey" icon="pi pi-map" severity="success" size="large" @click="scrollToSection('journey')" class="!px-8 !py-4" />
            <Button label="Contact" icon="pi-envelope" severity="secondary" size="large" outlined @click="scrollToSection('contact')" class="!px-8 !py-4" />
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section id="journey" class="py-16 border-t border-[#30363d] px-6">
      <header class="mb-16 text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-bold text-[#f0f6fc]">Mijn Journey</h2>
        <p class="text-[#8b949e] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Mijn ontwikkeling: van de eerste stappen met hardware tot mijn eigen projecten nu.
        </p>
      </header>

      <div class="relative max-w-7xl mx-auto">
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#30363d] -translate-x-1/2 hidden md:block"></div>
        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-[#30363d] md:hidden"></div>

        <div class="space-y-20">
          <div v-for="(chapter, index) in chapters" :key="chapter.id" class="relative group">
            <div class="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 -top-2">
              <div class="w-12 h-12 rounded-full bg-[#0d1117] border-2 border-[#30363d] group-hover:border-emerald-400 transition-all duration-300 flex items-center justify-center shadow-lg shadow-black group-hover:shadow-emerald-500/20">
                <i :class="['pi', chapter.icon, 'text-base text-[#8b949e] group-hover:text-emerald-400 transition-colors']"></i>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
              <!-- Chapter Text Block -->
              <div :class="['pl-16 md:pl-0 space-y-4', index % 2 === 0 ? 'md:text-right md:order-1' : 'md:text-left md:order-2']">
                 <div class="inline-block px-4 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-emerald-400 font-mono text-xs mb-1 uppercase tracking-widest">
                   {{ chapter.period }}
                 </div>
                 <h3 class="text-3xl md:text-4xl font-bold text-[#f0f6fc] tracking-tight group-hover:text-emerald-400 transition-colors">{{ chapter.title }}</h3>
                 <p class="text-[#8b949e] leading-relaxed text-base md:text-lg">
                   {{ chapter.story }}
                 </p>
              </div>

              <!-- Project Cards Block -->
              <div :class="['pl-16 md:pl-0', index % 2 === 0 ? 'md:order-2' : 'md:order-1']">
                 <!-- Desktop: 2-column grid -->
                 <div :class="['hidden sm:grid gap-4', getProjectsByChapter(chapter.id).length === 1 ? 'grid-cols-1' : 'grid-cols-2']">
                   <div
                     v-for="project in getProjectsByChapter(chapter.id)"
                     :key="project.id"
                     @click="goToProject(project.id)"
                     :class="[
                       'bg-[#161b22] border border-[#30363d] p-5 rounded-2xl hover:border-[#8b949e] hover:bg-[#1c2128] transition-all cursor-pointer group/card active:scale-[0.98] relative overflow-hidden min-h-[200px]',
                       getProjectsByChapter(chapter.id).length === 1 ? 'col-span-2' : ''
                     ]"
                   >
                      <div class="flex items-start gap-4 mb-3">
                        <h4 class="text-xl font-bold text-[#58a6ff] group-hover/card:underline flex-grow min-w-0">
                          <i class="pi pi-book text-sm opacity-50 mr-2"></i>
                          {{ project.title }}
                        </h4>
                        <span class="text-[10px] font-mono border border-[#30363d] px-3 py-1 rounded text-[#8b949e] shrink-0 bg-[#0d1117] uppercase tracking-wider">{{ project.type }}</span>
                      </div>
                      <p class="text-sm text-[#8b949e] line-clamp-2 mb-4 leading-relaxed">{{ project.shortDescription }}</p>
                      <div class="flex flex-col gap-2 text-[11px] font-mono text-[#8b949e]">
                        <span class="flex items-center gap-2">
                          <span :class="['w-3 h-3 rounded-full', getLanguageColor(project.language)]"></span>
                          {{ project.language }}
                        </span>
                        <div class="flex flex-wrap gap-2">
                          <span v-for="skill in project.skills.slice(0, 3)" :key="skill" class="bg-[#21262d] text-[#c9d1d9] px-3 py-1 rounded border border-[#30363d]">
                            {{ skill }}
                          </span>
                        </div>
                      </div>
                   </div>
                 </div>
                 <!-- Mobile: Horizontal Swipeable List with visual cue -->
                 <div class="sm:hidden -ml-4 pl-4 flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x relative">
                   <div
                     v-for="project in getProjectsByChapter(chapter.id)"
                     :key="project.id"
                     @click="goToProject(project.id)"
                     class="min-w-[280px] bg-[#161b22] border border-[#30363d] p-6 rounded-2xl active:bg-[#1c2128] snap-start min-h-[180px]"
                   >
                      <div class="flex items-start gap-4 mb-3">
                        <h4 class="text-base font-bold text-[#58a6ff] flex-grow min-w-0">
                          <i class="pi pi-book text-sm opacity-50 mr-2"></i>
                          {{ project.title }}
                        </h4>
                        <span class="text-[10px] font-mono border border-[#30363d] px-3 py-1 rounded text-[#8b949e] shrink-0 bg-[#0d1117] uppercase tracking-wider">{{ project.type }}</span>
                      </div>
                      <p class="text-sm text-[#8b949e] line-clamp-2 mb-4 leading-relaxed">{{ project.shortDescription }}</p>
                      <div class="flex flex-col gap-2 text-[11px] font-mono text-[#8b949e]">
                        <span class="flex items-center gap-2">
                          <span :class="['w-2.5 h-2.5 rounded-full', getLanguageColor(project.language)]"></span>
                          {{ project.language }}
                        </span>
                        <div class="flex flex-wrap gap-2">
                          <span v-for="skill in project.skills.slice(0, 3)" :key="skill" class="bg-[#21262d] text-[#c9d1d9] px-3 py-1 rounded border border-[#30363d]">
                            {{ skill }}
                          </span>
                        </div>
                      </div>
                   </div>
                   <!-- Scroll indicator gradient -->
                   <!-- Removed the scroll indicator gradient as per user request -->
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 border-t border-[#30363d] px-6">
      <header class="mb-16 text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-bold text-[#f0f6fc]">Mijn Skills</h2>
        <div class="w-20 h-1 bg-emerald-400 mx-auto rounded-full"></div>
      </header>

      <div class="max-w-5xl mx-auto">
        <!-- Desktop: Grid layout -->
        <div class="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="category in skillCategories" :key="category.name" class="bg-[#161b22] border border-[#30363d] p-6 rounded-2xl space-y-6 shadow-xl">
            <h3 class="text-[#f0f6fc] font-bold text-sm uppercase tracking-widest text-emerald-400 border-b border-[#30363d] pb-2">{{ category.name }}</h3>
            <div class="space-y-4">
              <div v-for="skill in category.skills" :key="skill.name" class="flex items-center gap-4 group">
                <i :class="['pi', skill.icon, skill.color, 'text-xl group-hover:scale-110 transition-transform']"></i>
                <span class="text-[#c9d1d9] font-medium group-hover:text-[#f0f6fc] transition-colors">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile: Horizontal Swipeable List with visual cue -->
        <div class="sm:hidden -ml-4 pl-4 flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x relative">
          <div
            v-for="category in skillCategories"
            :key="category.name"
            class="min-w-[280px] bg-[#161b22] border border-[#30363d] p-6 rounded-2xl space-y-6 shadow-xl snap-start"
          >
            <h3 class="text-[#f0f6fc] font-bold text-sm uppercase tracking-widest text-emerald-400 border-b border-[#30363d] pb-2">{{ category.name }}</h3>
            <div class="space-y-4">
              <div v-for="skill in category.skills" :key="skill.name" class="flex items-center gap-4 group">
                <i :class="['pi', skill.icon, skill.color, 'text-xl group-hover:scale-110 transition-transform']"></i>
                <span class="text-[#c9d1d9] font-medium group-hover:text-[#f0f6fc] transition-colors">{{ skill.name }}</span>
              </div>
            </div>
          </div>
          <!-- Scroll indicator gradient -->
          <!-- Removed the scroll indicator gradient as per user request -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 border-t border-[#30363d] px-6">
      <div class="bg-[#161b22] border border-[#30363d] rounded-3xl p-12 md:p-24 text-center space-y-8 max-w-5xl mx-auto relative overflow-hidden group">
        <div class="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <h2 class="text-5xl md:text-7xl font-bold text-[#f0f6fc] tracking-tight relative">Laten we kennismaken!</h2>
        <p class="text-lg md:text-xl text-[#8b949e] leading-relaxed max-w-2xl mx-auto relative">
          Heb je een vraag over mijn werk of wil je gewoon even contact leggen? Stuur me gerust een berichtje.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6 relative">
          <a :href="`mailto:${emailAddress}`" class="inline-flex items-center gap-3 px-12 py-5 bg-emerald-500 hover:bg-emerald-600 text-[#0d1117] font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 text-lg">
            <i class="pi pi-envelope text-xl"></i>
            Mail me
          </a>
          <a :href="linkedinUrl" target="_blank" class="inline-flex items-center gap-3 px-12 py-5 bg-[#21262d] border border-[#30363d] text-[#f0f6fc] font-bold rounded-2xl hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <i class="pi pi-linkedin text-xl text-[#0077b5]"></i>
            LinkedIn
          </a>
          <a :href="githubUrl" target="_blank" class="inline-flex items-center gap-3 px-12 py-5 bg-[#21262d] border border-[#30363d] text-[#f0f6fc] font-bold rounded-2xl hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <i class="pi pi-github text-xl"></i>
            GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>