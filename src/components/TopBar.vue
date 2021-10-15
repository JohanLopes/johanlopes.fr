<template>
  <nav id="topbar" class="navbar navbar-expand-md" :class="classObject">
    <div class="container">
      <router-link :to="{ name: 'index' }" class="navbar-brand">
        <img src="../assets/images/logo.svg" alt="Johan Lopes" />
      </router-link>

      <h1 class="navbar-title">
        Johan LOPES
        <span class="d-none d-lg-block"
          ><small>Concepteur de solutions web Freelance</small></span
        >
      </h1>

      <button class="navbar-toggler" type="button" @click="this.toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="navbar-collapse collapse"
        :class="{ show: this.showMenuCollapsed }"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              :to="{ name: 'index', hash: '#services' }"
              class="nav-link"
              >Mes domaines d'expertise
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'index', hash: '#projects' }"
              class="nav-link"
              >Réalisations
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'index', hash: '#about' }"
              class="nav-link"
              >Qui suis-je ?
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'index', hash: '#contact' }"
              class="nav-link"
              >On discute de votre projet ?
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      fixed: false,
      topbarHeight: 60,
      showMenuCollapsed: false,
    };
  },
  mounted() {
    this.affixTopbar();
  },
  methods: {
    affixTopbar() {
      let scrollHeight = window.scrollY;
      let viewportHeight = window.innerHeight;

      this.fixed = scrollHeight > viewportHeight;
    },
    toggleMenu() {
      this.showMenuCollapsed = !this.showMenuCollapsed;
    },
  },
  computed: {
    classObject: function () {
      return {
        "fixed-top": this.fixed,
        "navbar-light": this.fixed,
        "navbar-dark": !this.fixed,
      };
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.affixTopbar);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.affixTopbar);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "~bootstrap/scss/mixins/breakpoints";

#topbar {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 2000;
  transition: all 0.5s ease-out;

  &.fixed-top {
    position: fixed;
    box-shadow: 0px 0px 10px 0px #888;
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
        height: 40px;
        filter: invert(0.3);
      }
    }

    @include media-breakpoint-down("sm") {
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
        filter: invert(1);
        opacity: 0.6;
      }
    }

    .navbar-title {
      display: none;
    }

    @include media-breakpoint-down("sm") {
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
