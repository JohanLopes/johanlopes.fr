<template>
  <div class="aside mw-100" v-on:keyup.esc="$router.push({ name: 'index' })">
    <div class="aside-header d-flex align-items-center p-2 px-4">
      <router-link
        :to="
          this.previousProjectSlug
            ? { name: 'project', params: { slug: this.previousProjectSlug } }
            : { path: this.$route.fullPath }
        "
        :class="{ disabled: !this.previousProjectSlug }"
        class="btn btn-sm btn-outline-secondary"
      >
        <i class="fa fa-chevron-left me-1"></i> Projet précédent
      </router-link>

      <router-link
        :to="
          this.nextProjectSlug
            ? { name: 'project', params: { slug: this.nextProjectSlug } }
            : { path: this.$route.fullPath }
        "
        :class="{ disabled: !this.nextProjectSlug }"
        class="btn btn-sm btn-outline-secondary ms-2"
      >
        Projet suivant <i class="fa fa-chevron-right ms-1"></i>
      </router-link>

      <router-link
        :to="{ name: 'index' }"
        tag="button"
        type="button"
        class="aside-close ms-auto"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </router-link>
    </div>

    <div v-if="project" class="aside-content p-4">
      <section class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img v-bind:src="logoUrl" class="logo" :alt="project.title" />
        </div>
        <div class="flex-grow-1 ms-4">
          <h3 class="mb-0">{{ project.title }}</h3>
          <p v-if="project.pitch" class="text-black mt-1 mb-0">
            {{ project.pitch }}
          </p>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            class="mt-1"
          >
            <i class="fa fa-link me-1"></i> {{ project.url }}
          </a>
        </div>
      </section>

      <section
        v-if="project.description"
        v-html="renderDescription"
        class="mt-4"
      ></section>

      <section
        v-if="project.contribution"
        v-html="renderContribution"
        class="bg-light p-3 mt-4"
      ></section>

      <section v-if="project.technologies.length > 0" class="mt-4">
        <span
          v-for="technology in project.technologies"
          v-bind:key="technology"
          class="d-inline-block mb-1 border-start border-secondary border-2 text-nowrap bg-light px-2 me-1"
          ><i class="fa fa-tag me-1"></i> {{ technology }}</span
        >
      </section>
    </div>
    <div v-else class="aside-loading"></div>
  </div>
</template>

<script>
import projectsCollection from "../assets/datas/projects.yaml";
import { marked } from "marked";

export default {
  name: "ProjectAside",

  data() {
    return {
      currentIndex: null,
      project: null,
    };
  },

  created() {
    this.fetchData();
  },

  computed: {
    slug() {
      return this.$route.params.slug;
    },

    renderDescription() {
      return marked.parse(this.project.description);
    },

    renderContribution() {
      return marked.parse(this.project.contribution);
    },

    logoUrl() {
      return require("../assets/datas/projects/logos/" + this.slug + ".png");
    },

    previousProjectSlug() {
      let previousIndex = this.currentIndex - 1;

      return previousIndex >= 0 ? projectsCollection[previousIndex].slug : null;
    },

    nextProjectSlug() {
      let nextIndex = this.currentIndex + 1;

      return nextIndex < projectsCollection.length
        ? projectsCollection[nextIndex].slug
        : null;
    },
  },

  methods: {
    fetchData() {
      this.currentIndex = projectsCollection.findIndex(
        (element) => element.slug === this.slug
      );
      this.project = projectsCollection[this.currentIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  max-width: 120px;
  max-height: 120px;
}
</style>
