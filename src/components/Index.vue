<template>
  <div>
    <hero />
    <customers />
    <services />
    <projects />
    <about />
    <contact />
  </div>
</template>

<script>
import Hero from "./Hero";
import Customers from "./Customers";
import Services from "./Services";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default {
  name: "Index",
  components: {
    Projects,
    Services,
    Customers,
    Hero,
    About,
    Contact,
  },
};
</script>
