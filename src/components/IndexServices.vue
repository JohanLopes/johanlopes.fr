<template>
  <section id="services" class="py-5">
    <div class="container">
      <h4 class="h2 text-primary text-center">Mes domaines d'expertise</h4>

      <h5 class="text-center w-75 mx-auto">
        Mes 15 années d'expériences m'ont permis d'intervenir sur toute la
        chaine de réalisation d'un projet web :<br />
        conception fonctionnelle, architecture technique, développement frontend
        et backend, pilotage d'équipes Agile, gestion de projet...<br />
        Cette polyvalence me permet aujourd'hui de vous accompagner de A à Z sur
        votre projet.
      </h5>

      <div class="row mt-5">
        <div class="col-12 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body pb-0 text-center">
              <img
                src="../assets/images/scrum.svg"
                class="h-100"
                alt="Gestion de projet"
              />
            </div>
            <div class="card-body h-100">
              <h3 class="card-title text-center">Conseil & Structuration</h3>
              <p class="card-text text-body">
                Dès la naissance de votre projet, je vous accompagne dans sa
                <strong>définition technique et fonctionnelle</strong> en accord
                avec vos objectifs, votre planning de livraison et votre budget.
              </p>
              <p class="card-text text-body">
                Afin de maximiser les chances de réussite d'un projet web, je
                veille à ce que son équipe soit
                <strong>organisée et alignée sur des objectifs communs</strong>.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body pb-0 text-center">
              <img
                src="../assets/images/symfony.svg"
                class="h-100"
                alt="Symfony"
              />
            </div>
            <div class="card-body h-100">
              <h3 class="card-title text-center">Développement Backend</h3>
              <p class="card-text text-body">
                Adepte du framework
                <a href="https://symfony.com" target="_blank">Symfony</a> depuis
                plus de {{ new Date().getFullYear() - 2008 }} ans, j'ai choisi
                ce framework pour
                <strong>sa flexibilité et son évolutivité</strong>.
              </p>
              <p class="card-text text-body">
                Mon expertise sur
                <a href="https://symfony.com" target="_blank">Symfony</a> me
                permet de vous proposer des applications
                <strong>robustes</strong>, <strong>pérennes</strong> et qui
                répondent parfaitement à
                <strong>vos contraintes métiers</strong>.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <div class="card h-100">
            <div class="card-body pb-0 text-center">
              <img
                src="../assets/images/vuejs.svg"
                class="h-100"
                alt="Vue.js"
              />
            </div>
            <div class="card-body h-100">
              <h3 class="card-title text-center">Développement Frontend</h3>
              <p class="card-text text-body">
                Depuis {{ new Date().getFullYear() - 2016 }} ans, je vous
                propose aussi des interfaces utilisateurs plus dynamiques,
                basées sur le célèbre framework
                <a href="https://fr.vuejs.org/index.html" target="_blank"
                  >Vue.js</a
                >.
              </p>
              <p class="card-text text-body">
                <a href="https://fr.vuejs.org/index.html" target="_blank"
                  >Vue.js</a
                >
                propose de nombreux "composants" qui permettent d'ajouter
                facilement des fonctionnalités à vos interfaces, et de pouvoir
                ainsi tester rapidement leur efficacité auprès de vos clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body h-100">
          <h3 class="card-title text-center">Mais aussi...</h3>
          <div class="row">
            <div class="col-12 col-lg-4">
              <div class="d-flex align-items-center mt-2 mt-lg-0">
                <img
                  class="me-3"
                  src="../assets/images/html5-css.svg"
                  width="50"
                  alt="Generic placeholder image"
                />
                <div>
                  <h4 class="mt-0 mb-0">Intégration HTML5/CSS3</h4>
                  <p class="text-body mb-0">
                    Bootstrap framework, Sass, Webpack
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="d-flex align-items-center mt-2 mt-lg-0">
                <img
                  class="me-3"
                  src="../assets/images/wireframes.png"
                  width="50"
                  alt="Generic placeholder image"
                />
                <div>
                  <h4 class="mt-0 mb-0">Prototypage / Ergonomie</h4>
                  <p class="text-body mb-0">Wireframe, UX</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="d-flex align-items-center mt-2 mt-lg-0">
                <img
                  class="me-3"
                  src="../assets/images/docker.svg"
                  width="50"
                  alt="Generic placeholder image"
                />
                <div>
                  <h4 class="mt-0 mb-0">Déploiement / Automatisation</h4>
                  <p class="text-body mb-0">Docker, Gitlab CI/CD, Deployer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexServices",
};
</script>

<style lang="scss" scoped>
#services {
  background-color: gray(100);

  .card {
    border: 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-shadow: 0 24px 48px 0 rgba(17, 16, 62, 0.2);
      opacity: 0.5;
      transition: opacity 0.3s ease-in-out;
      mix-blend-mode: multiply;
      z-index: 500;
    }

    & > * {
      z-index: 1000;
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }
  }
}
</style>
