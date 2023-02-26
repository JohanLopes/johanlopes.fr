<template>
  <footer id="footer" class="bg-primary text-light">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center py-3 border-top border-white-50">
        <p class="mb-0 me-2">© {{ new Date().getFullYear() }}</p>
        <p class="mb-0 ps-2 border-start">
          Johan LOPES
          <span class="mx-1 fw-light d-none d-md-inline"
            >Concepteur de solutions web Freelance</span
          >
        </p>

        <router-link :to="{ name: 'legal-notices' }" class="text-decoration-none ms-auto">
          Mentions légales
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BottomBar'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

#footer {
  font-size: 14px;

  a {
    color: $white;

    &:hover {
      color: $red;
    }
  }
}
</style>
