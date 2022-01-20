<template>
  <div>
    <index-hero />
    <index-customers />
    <index-services />
    <index-projects />
    <index-about />
    <index-contact />
  </div>
</template>

<script>
import IndexHero from "./IndexHero";
import IndexCustomers from "./IndexCustomers";
import IndexServices from "./IndexServices";
import IndexProjects from "./IndexProjects";
import IndexAbout from "./IndexAbout";
import IndexContact from "./IndexContact";

export default {
  name: "IndexContainer",
  components: {
    IndexProjects,
    IndexServices,
    IndexCustomers,
    IndexHero,
    IndexAbout,
    IndexContact,
  },
};
</script>
