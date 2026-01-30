<template>
  <div>
    <HomeHero />
    <HomeCustomers />
    <HomeAbout />
    <HomeCareer />
    <HomeContact />
    <router-view />
  </div>
</template>

<script setup>
import HomeHero from './Home/HomeHero.vue'
import HomeCustomers from './Home/HomeCustomers.vue'
import HomeCareer from './Home/HomeCareer.vue'
import HomeAbout from './Home/HomeAbout.vue'
import HomeContact from './Home/HomeContact.vue'
</script>
