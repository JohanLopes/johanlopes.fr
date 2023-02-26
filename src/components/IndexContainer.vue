<template>
  <div>
    <IndexHero />
    <IndexCustomers />
    <IndexServices />
    <IndexProjects />
    <IndexAbout />
    <IndexContact />
  </div>
</template>

<script>
import IndexHero from './IndexHero.vue'
import IndexCustomers from './IndexCustomers.vue'
import IndexServices from './IndexServices.vue'
import IndexProjects from './IndexProjects.vue'
import IndexAbout from './IndexAbout.vue'
import IndexContact from './IndexContact.vue'

export default {
  name: 'IndexContainer',
  components: {
    IndexProjects,
    IndexServices,
    IndexCustomers,
    IndexHero,
    IndexAbout,
    IndexContact
  }
}
</script>
