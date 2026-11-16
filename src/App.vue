<template>
  <main>
    <TopBar />
    <router-view />
    <BottomBar />
  </main>
</template>

<script setup>
import BottomBar from '@/components/BottomBar.vue'
import TopBar from '@/components/TopBar.vue'
</script>
