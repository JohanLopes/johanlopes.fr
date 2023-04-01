<template>
  <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="project">
    <picture>
      <source :srcset="pictureUrl(project.slug, 'webp')" type="image/webp" />
      <source :srcset="pictureUrl(project.slug, 'png')" type="image/png" />
      <img :src="pictureUrl(project.slug, 'png')" class="logo" :alt="project.title" />
    </picture>

    <div class="content">
      <h3>{{ project.title }}</h3>
      <span><i class="fa fa-search-plus me-2"></i> Plus de détails</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'IndexProjectsItem',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    pictureUrl: (slug, format) =>
      new URL(`../assets/datas/projects/pictures-sm/${slug}.${format}`, import.meta.url).href
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@fortawesome/fontawesome-free/scss/_functions.scss';
@import '@fortawesome/fontawesome-free/scss/_variables.scss';

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
    content: '';
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
