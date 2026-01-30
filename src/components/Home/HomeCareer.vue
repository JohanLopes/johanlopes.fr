<template>
  <section id="career" class="bg-primary pt-5">
    <div class="container">
      <h4 class="h2 text-white text-center mb-5">Mon parcours professionnel</h4>

      <ul class="carrer-timeline mb-0">
        <career-item
          v-for="experience in experiences"
          :key="experience.slug"
          :experience="experience"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import experiences from '@/assets/datas/career.yaml'
import CareerItem from '@/components/Home/HomeCareerItem.vue'
</script>

<style lang="scss" scoped>
#career {
  .carrer-timeline {
    border-left: 2px dotted hsl(0, 0%, 90%);
    position: relative;
    list-style: none;
    padding-left: 50px;
    margin-left: 50px;
  }
}
</style>
