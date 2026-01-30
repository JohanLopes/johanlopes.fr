<template>
  <main>
    <TopBar />
    <router-view />
    <BottomBar />
  </main>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue'
import BottomBar from '@/components/BottomBar.vue'
</script>
