<template>
  <section id="contact" class="bg-primary text-white py-5">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-12 col-lg-8">
          <h2 class="h3 text-white">Vous avez un projet ?</h2>

          <p class="text-justify mb-0">
            Je vous propose d'en discuter quelques instants afin de mieux comprendre votre métier,
            vos objectifs, vos contraintes et ainsi mieux cerner les contours de votre projet.
          </p>
        </div>
        <div class="col-12 col-lg-4 mt-4 mt-lg-0 text-center">
          <a
            href="https://www.linkedin.com/in/lopesjohan/"
            class="d-inline-block text-decoration-none"
            target="_blank"
          >
            <span class="d-flex align-items-center border-white border">
              <span class="bg-white text-primary p-1 d-flex align-items-center align-self-stretch">
                <IconLinkedin />
              </span>
              <small class="text-white px-2"
                >Prendre contact avec moi sur <strong>LinkedIn</strong></small
              >
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconLinkedin from '@/components/Icon/IconLinkedin.vue'
</script>
