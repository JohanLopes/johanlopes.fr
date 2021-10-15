<template>
  <div>
    <top-bar />
    <router-view></router-view>
    <bottom-bar />
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";

export default {
  name: "App",
  components: {
    TopBar,
    BottomBar,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>
