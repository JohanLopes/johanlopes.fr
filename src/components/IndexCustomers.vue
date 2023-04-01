<template>
  <section id="customers" class="bg-light d-none d-md-block">
    <div class="p-3 d-flex flex-wrap align-items-center justify-content-center">
      <picture v-for="(name, slug) in customers" :key="slug">
        <source :srcset="logoUrl(slug, 'webp')" type="image/webp" />
        <source :srcset="logoUrl(slug, 'png')" type="image/png" />
        <img :src="logoUrl(slug, 'png')" :alt="name" class="px-3" />
      </picture>
    </div>
    <div class="customers-explanation d-none d-lg-block">Ils m'ont confié leurs projets web 😊</div>
  </section>
</template>

<script>
import customersCollection from '@/assets/datas/customers.yml'

export default {
  name: 'IndexCustomers',
  data: function () {
    return {
      customers: customersCollection
    }
  },
  methods: {
    logoUrl: (slug, format) =>
      new URL(`../assets/datas/customers/${slug}.${format}`, import.meta.url).href
  }
}
</script>

<style lang="scss" scoped>
#customers {
  position: relative;

  img {
    filter: grayscale(1);
    transition: all 0.3s ease-out;

    &:hover {
      filter: grayscale(0);
    }
  }

  .customers-explanation {
    position: absolute;
    bottom: -50px;
    left: 60%;
    font-family: 'Kalam', cursive;
    font-size: 133%;
    color: #888;
    transition: opacity 4s ease-out;
    display: block;

    &::before {
      content: '';
      height: 50px;
      width: 50px;
      background: url('@/assets/images/arrows-right-down.png') no-repeat 0 top;
      background-size: contain;
      display: inline-block;
      margin-left: -50px;
    }
  }
}
</style>
