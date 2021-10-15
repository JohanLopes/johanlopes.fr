<template>
  <section id="projects" class="bg-primary py-5">
    <div class="container">
      <h4 class="h2 text-center text-white">Quelques réalisations...</h4>

      <h5 class="text-center w-75 mx-auto text-light">
        Voici quelques exemples de projets que j'ai pu réaliser. La plupart
        m'ont été confié par des clients dans le cadre de leur conception,
        pilotage et développement technique. Cherchant toujours à innover, j'ai
        aussi imaginé, développé et commercialisé certains de ces projets.
      </h5>

      <div class="d-flex justify-content-center flex-wrap mt-5">
        <projects-item
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        ></projects-item>
      </div>
    </div>

    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
import projectsCollection from "../assets/datas/projects.yaml";
import ProjectsItem from "./ProjectsItem";

export default {
  name: "Projects",
  components: {
    ProjectsItem,
  },
  data: function () {
    return {
      projects: projectsCollection,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
</style>
