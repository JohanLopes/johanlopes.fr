<template>
  <div class="aside mw-100" @keyup.esc="$router.push({ name: 'index' })">
    <div class="aside-header d-flex align-items-center p-2 px-4">
      <router-link
        :to="previousProjectSlug ? { name: 'project', params: { slug: previousProjectSlug } } : { path: $route.fullPath }"
        :class="{ disabled: !previousProjectSlug }"
        class="btn btn-sm btn-outline-secondary"
      >
        <i class="fa fa-chevron-left me-1"></i> Projet précédent
      </router-link>

      <router-link
        :to="nextProjectSlug ? { name: 'project', params: { slug: nextProjectSlug } } : { path: $route.fullPath }"
        :class="{ disabled: !nextProjectSlug }"
        class="btn btn-sm btn-outline-secondary ms-2"
      >
        Projet suivant <i class="fa fa-chevron-right ms-1"></i>
      </router-link>

      <router-link :to="{ name: 'index' }" type="button" class="aside-close ms-auto" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </router-link>
    </div>

    <div v-if="project" class="aside-content p-4">
      <section class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <picture>
            <source :srcset="logoUrl(project.slug, 'webp')" type="image/webp" />
            <source :srcset="logoUrl(project.slug, 'png')" type="image/png" />
            <img :src="logoUrl(project.slug, 'png')" class="logo" :alt="project.title" />
          </picture>
        </div>
        <div class="flex-grow-1 ms-4">
          <h3 class="mb-0">{{ project.title }}</h3>
          <p v-if="project.pitch" class="text-black mt-1 mb-0">
            {{ project.pitch }}
          </p>
          <a v-if="project.url" :href="project.url" target="_blank" class="mt-1"> <i class="fa fa-link me-1"></i> {{ project.url }} </a>
        </div>
      </section>

      <!-- eslint-disable vue/no-v-html -->
      <section v-if="project.description" class="mt-4" v-html="renderDescription"></section>

      <section v-if="project.contribution" class="bg-light p-3 mt-4" v-html="renderContribution"></section>
      <!-- eslint-enable vue/no-v-html -->

      <section v-if="project.technologies.length > 0" class="mt-4">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="d-inline-block mb-1 border-start border-secondary border-2 text-nowrap bg-light px-2 me-1"
          ><i class="fa fa-tag me-1"></i> {{ technology }}</span
        >
      </section>
    </div>
    <div v-else class="aside-loading"></div>
  </div>
</template>

<script>
import projectsCollection from '@/assets/datas/projects.yaml'
import { marked } from 'marked'

export default {
  name: 'AsideProjectDetails',

  data() {
    return {
      currentIndex: null,
      project: null
    }
  },

  computed: {
    slug() {
      return this.$route.params.slug
    },

    renderDescription() {
      return marked.parse(this.project.description)
    },

    renderContribution() {
      return marked.parse(this.project.contribution)
    },

    previousProjectSlug() {
      let previousIndex = this.currentIndex - 1

      return previousIndex >= 0 ? projectsCollection[previousIndex].slug : null
    },

    nextProjectSlug() {
      let nextIndex = this.currentIndex + 1

      return nextIndex < projectsCollection.length ? projectsCollection[nextIndex].slug : null
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.currentIndex = projectsCollection.findIndex((element) => element.slug === this.slug)
      this.project = projectsCollection[this.currentIndex]
    },
    logoUrl: (slug, format) => new URL(`../assets/datas/projects/logos/${slug}.${format}`, import.meta.url).href
  }
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 120px;
  max-height: 120px;
}
</style>
