<template>
  <router-link
    :to="{ name: 'project', params: { slug: project.slug } }"
    class="project"
  >
    <img :src="pictureUrl" :alt="project.title" />
    <div class="content">
      <h3>{{ project.title }}</h3>
      <span><i class="fa fa-search-plus me-2"></i> Plus de détails</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Project",
  props: ["project"],
  computed: {
    pictureUrl: function () {
      return require("../assets/datas/projects/pictures-sm/" +
        this.project.slug +
        ".png");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "~@fortawesome/fontawesome-free/scss/functions";
@import "~@fortawesome/fontawesome-free/scss/variables";

.project {
  position: relative;
  display: inline-block;
  overflow: hidden;

  width: 350px;
  margin: 0.6rem;

  img {
    width: 100%;
    height: auto;
    transform: scale(1);
    transition: 0.3s all ease;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    transition: 0.3s all ease;
    background: rgba(0, 0, 0, 0.6);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: 0.3s all ease;

    h3 {
      color: #fff;
      font-size: 1.6rem;
      margin-bottom: 1.3rem;
    }

    span {
      color: #ddd;
    }
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    &:before {
      visibility: visible;
      opacity: 1;
    }

    .content {
      z-index: 3;
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
