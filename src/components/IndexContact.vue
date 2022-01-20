<template>
  <section id="contact" class="bg-primary text-white py-5">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-12 col-lg-6">
          <h4 class="h3 text-white">Vous avez un projet ?</h4>

          <p class="text-justify mb-0">
            Je vous propose d'en discuter quelques instants afin de mieux
            comprendre votre métier, vos objectifs, vos contraintes et ainsi
            mieux cerner les contours de votre projet.
          </p>
        </div>
        <div class="col-12 col-lg-3 mt-4 mt-lg-0 text-center">
          <p class="font-weight-light">Sur les réseaux sociaux</p>

          <ul class="list-inline mb-0 text-nowrap">
            <li class="list-inline-item mx-3">
              <a
                href="https://fr.linkedin.com/in/lopesjohan"
                target="_blank"
                title="LinkedIn"
              >
                <i class="fab fa-2x text-white fa-linkedin"></i>
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a
                href="https://twitter.com/johan_lopes"
                target="_blank"
                title="Twitter"
              >
                <i class="fab fa-2x text-white fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item mx-3">
              <a
                href="#"
                title="TikTok"
                class="text-decoration-none"
                @click.prevent="showTiktokLol = true"
              >
                <span v-if="showTiktokLol" class="fs-3">😂</span>
                <i v-else class="fab fa-2x text-white fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 border-lg-start mt-4 mt-lg-0 text-center">
          <p class="font-weight-light text-nowrap">Directement par tchat</p>

          <button class="btn btn-secondary text-white" @click="openChatbox">
            <i class="fa fa-microphone-alt me-2"></i> Discuter maintenant avec
            Johan
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexContact",
  data() {
    return {
      showTiktokLol: false,
    };
  },
  methods: {
    openChatbox() {
      window.$crisp.push(["do", "chat:open"]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
</style>
