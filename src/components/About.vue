<template>
  <section id="about" class="bg-white pt-5">
    <div class="container">
      <h4 class="h2 text-primary text-center">Qui suis-je ?</h4>

      <div class="row">
        <div class="col pt-4">
          <div class="d-flex align-items-start mb-4">
            <img
              src="../assets/images/icons8-germer-96.png"
              class="px-3"
              alt="Début"
            />
            <div>
              <p class="text-justify">
                Après un cursus universitaire en informatique, je fais mes
                premières expériences professionnelles dans des agences web où
                j'ai pu développer mes compétences sur le
                <em>language PHP</em> mais surtout rapidement me spécialiser sur
                le <strong>framework Symfony</strong> (depuis la version 1.1).
              </p>
              <p class="text-justify mb-0">
                Adepte de la gestion de projets et de la relation client, j'ai
                pu
                <strong
                  >piloter de nombreux projets de différentes envergures pour
                  des TPE/PME, Startups et Grands comptes.</strong
                >
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start mb-4">
            <img
              src="../assets/images/icons8-outils-administratifs-96.png"
              alt="Entrepreneuriat"
              class="px-3"
            />
            <div>
              <p class="text-justify">
                En 2015,
                <strong
                  >je me lance dans l'entrepreneuriat et l'innovation</strong
                >
                pour me consacrer à la création d'une marketplace permettant aux
                entrepreneurs de s'équiper de logiciel SaaS au sein d'un
                abonnement unique. #LeNetflixDesEntrepreneurs
              </p>
              <p class="text-justify mb-0">
                Accompagné par plusieurs structures d'aide aux startups (Lyon
                Startup, Incubateurs...), j'ai pu développer de nombreuses
                connaissances dans la
                <strong>mise sur le marché d'un produit/service web</strong> :
                gestion marketing, développement commercial, recherche de
                financements...
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start mb-4">
            <img
              src="../assets/images/icons8-petite-entreprise-96.png"
              alt="Freelancing"
              class="px-3"
            />
            <div>
              <p class="text-justify fw-bold">
                Depuis {{ new Date().getFullYear() - 2018 }} ans, je propose mes
                services en tant que freelance à des entreprises à fort
                potentiel !
              </p>
              <p class="text-justify mb-0">
                Mes différentes expériences professionnelles m'ont apporté une
                certaine polyvalence me permettant aujourd'hui d’accompagner mes
                clients sur de nombreux sujets : stratégie, faisabilité
                technique et fonctionnelle, conception & développement
                technique, automatisation, structuration d’équipes...
              </p>
            </div>
          </div>

          <p class="text-center">
            <strong>
              Vous souhaitez en savoir plus sur mes précédentes expériences
              professionnelles ?
            </strong>
            <a
              href="https://www.linkedin.com/in/lopesjohan/"
              class="d-inline-block ms-2"
              target="_blank"
            >
              <span
                class="d-flex align-items-center bg-primary px-2 text-white"
              >
                <i class="fa fa-brands fa-linkedin-in text-white me-2"></i>
                <small>Voir mon profil <strong>Linked</strong></small>
              </span>
            </a>
          </p>
        </div>
        <div class="col-5 d-none d-lg-block">
          <img
            src="../assets/images/johan-lopes.png"
            class="mw-100 ps-5"
            alt="Johan LOPES"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
</style>
