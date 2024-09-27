<template>
  <section id="hero" class="vh-100">
    <div class="container d-flex flex-column justify-content-center h-100">
      <div class="text-center text-lg-start">
        <h1 class="h2 text-white">
          Hey 👋<br />
          je suis <strong class="text-uppercase">Johan Lopes</strong>
        </h1>
        <h2 class="lead text-white">Concepteur de solutions web</h2>
        <h3 class="h4 text-light">
          Conseil et développement de services web<br />
          Spécialiste des frameworks Symfony & Vue.Js
        </h3>
      </div>
    </div>
    <div class="hero-mouse"><span></span></div>
  </section>
</template>

<script>
export default {
  name: 'IndexHero'
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: url('@/assets/images/background.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(140deg, #000 40%, transparent);
    opacity: 0.8;
    z-index: 10;
  }

  * {
    z-index: 20;
  }

  h1 {
    text-shadow: 2px 2px 8px #222;
    font-family: 'Kalam', cursive;
  }

  .hero-mouse {
    border: 2px solid #fff;
    border-radius: 16px;
    height: 40px;
    width: 24px;
    display: block;
    z-index: 10;
    opacity: 0.7;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    margin-left: -10px;

    span {
      display: block;
      position: relative;
      border-radius: 10px;
      background: #fff;
      width: 2px;
      height: 6px;
      top: 4px;
      margin-left: auto;
      margin-right: auto;
      @include mouseWheel();
    }
  }
}
</style>
