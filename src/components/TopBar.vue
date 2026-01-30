<template>
  <nav id="topbar" class="navbar navbar-expand-md" :class="classObject">
    <div class="container">
      <router-link :to="{ name: 'homepage', hash: '#hero' }" class="navbar-brand">
        <img
          src="@/assets/images/logo.svg"
          alt="Johan Lopes | Concepteur de solutions web Freelance"
        />
      </router-link>

      <button class="navbar-toggler" type="button" title="Menu" @click="toggleMenu">
        <span class="navbar-toggler-icon" />
      </button>

      <div class="navbar-collapse collapse" :class="{ show: showMenuCollapsed }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'homepage', hash: '#about' }" class="nav-link">
              Qui suis-je ?
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'homepage', hash: '#career' }" class="nav-link">
              Mon parcours professionnel
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'homepage', hash: '#contact' }" class="nav-link">
              On discute de votre projet ?
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, onMounted, onBeforeMount, onBeforeUnmount, ref } from 'vue'

const fixed = ref(false)
const showMenuCollapsed = ref(false)

const classObject = computed(() => ({
  'fixed-top': fixed.value,
  'navbar-light': fixed.value,
  'navbar-dark': !fixed.value,
}))

onMounted(() => {
  affixTopbar()
})

onBeforeMount(() => {
  window.addEventListener('scroll', affixTopbar)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', affixTopbar)
})

const affixTopbar = () => {
  let scrollHeight = window.scrollY
  let viewportHeight = window.innerHeight

  fixed.value = scrollHeight > viewportHeight
}

const toggleMenu = () => {
  showMenuCollapsed.value = !showMenuCollapsed.value
}
</script>

<style lang="scss" scoped>
#topbar {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 2000;
  transition: all 0.5s ease-out;

  &.fixed-top {
    position: fixed;
    box-shadow: 0 0 10px 0 #888;
  }

  .navbar-brand {
    padding: 0;
  }

  .navbar-title {
    color: #333;
    font-size: 17px;
    margin: 0;
    line-height: 20px;

    small {
      color: #999;
    }
  }

  .navbar-nav {
    .nav-link {
      margin-left: $navbar-nav-link-padding-x;
      margin-right: $navbar-nav-link-padding-x;
      padding-left: 0;
      padding-right: 0;

      &.active {
        border-bottom: 2px solid $red;
      }
    }
  }

  &.navbar-light {
    background: rgb(255, 255, 255);
    height: 60px;

    .navbar-brand {
      img {
        height: 50px;
      }
    }

    @include media-breakpoint-down('sm') {
      .navbar-collapse {
        margin-top: 20px;
        background: rgb(240, 240, 240);

        a {
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
    }
  }

  &.navbar-dark {
    height: 100px;
    padding-top: 20px;
    padding-bottom: 20px;

    .navbar-brand {
      img {
        height: 60px;
        filter: brightness(0) invert(1);
        opacity: 0.6;
      }
    }

    .navbar-title {
      display: none;
    }

    @include media-breakpoint-down('sm') {
      .navbar-collapse {
        margin-top: 20px;
        background: rgb(0, 0, 0);

        li:not(:last-child) {
          border-bottom: 1px solid #fff;
        }

        a {
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
    }
  }
}
</style>
